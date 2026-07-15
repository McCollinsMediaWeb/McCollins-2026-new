import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const reportDir = path.join(root, "reports");
const supported = /\.(?:jpe?g|png)$/i;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  }))).flat();
}

function resizeLimit(relative, metadata) {
  const longest = Math.max(metadata.width ?? 0, metadata.height ?? 0);
  if (relative.startsWith("about-us-page/") && longest > 1200) return 1200;
  if (/^(industry-page|home-page-expertise|mercedez-benz)\//.test(relative) && longest > 2400) return 2400;
  if (longest > 3200) return 2560;
  return undefined;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 ** 2).toFixed(2)} MB`;
}

const files = (await walk(publicDir)).filter((file) => supported.test(file)).sort();
const rows = [];

for (const source of files) {
  const relative = path.relative(publicDir, source);
  const destination = source.replace(supported, ".webp");
  const sourceStat = await fs.stat(source);
  const metadata = await sharp(source).metadata();
  const maxDimension = resizeLimit(relative, metadata);
  let pipeline = sharp(source, { failOn: "warning" }).rotate();

  if (maxDimension) {
    pipeline = pipeline.resize({
      width: maxDimension,
      height: maxDimension,
      fit: "inside",
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3,
    });
  }

  const useLossless = metadata.hasAlpha && sourceStat.size <= 250 * 1024;
  await pipeline.webp(useLossless
    ? { lossless: true, effort: 2 }
    : { quality: 92, alphaQuality: 100, effort: 2, smartSubsample: true })
    .toFile(destination);

  const outputStat = await fs.stat(destination);
  const outputMetadata = await sharp(destination).metadata();
  rows.push({
    source: relative,
    output: path.relative(publicDir, destination),
    originalBytes: sourceStat.size,
    webpBytes: outputStat.size,
    reduction: (1 - outputStat.size / sourceStat.size) * 100,
    originalDimensions: `${metadata.width}×${metadata.height}`,
    webpDimensions: `${outputMetadata.width}×${outputMetadata.height}`,
    mode: useLossless ? "lossless" : "quality 92",
  });
}

await fs.mkdir(reportDir, { recursive: true });
const totalOriginal = rows.reduce((sum, row) => sum + row.originalBytes, 0);
const totalWebp = rows.reduce((sum, row) => sum + row.webpBytes, 0);
const summary = [
  "# Image optimization report",
  "",
  `- Images converted: ${rows.length}`,
  `- Original total: ${formatBytes(totalOriginal)}`,
  `- WebP total: ${formatBytes(totalWebp)}`,
  `- Total reduction: ${((1 - totalWebp / totalOriginal) * 100).toFixed(1)}%`,
  "- Originals retained in place as backups; website references use the WebP copies.",
  "",
  "| Original | Original size | WebP size | Reduction | Dimensions | Encoding |",
  "|---|---:|---:|---:|---:|---|",
  ...rows.map((row) => `| ${row.source.replaceAll("|", "\\|")} | ${formatBytes(row.originalBytes)} | ${formatBytes(row.webpBytes)} | ${row.reduction.toFixed(1)}% | ${row.originalDimensions} → ${row.webpDimensions} | ${row.mode} |`),
  "",
].join("\n");

await fs.writeFile(path.join(reportDir, "image-optimization.md"), summary);
console.log(summary.split("\n").slice(0, 8).join("\n"));
