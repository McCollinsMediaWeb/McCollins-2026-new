import type { MetadataRoute } from "next";

const baseUrl = "https://www.mccollinsmedia.com";

const routes = [
  "",
  "/about",
  "/services",
  "/services/brand-development",
  "/services/content-production",
  "/services/google-ads",
  "/services/marketing-automation",
  "/services/performance-marketing",
  "/services/seo",
  "/services/social-media-marketing",
  "/services/web-development",
  "/works",
  "/industry",
  "/blog",
  "/careers",
  "/contact",
  "/social-media-agency",
  "/web-development-agency",
  "/brand-development-dubai-and-abudhabi",
  "/case-study/abudhabi-food-hub",
  "/case-study/better-life",
  "/case-study/cleaning-superstore",
  "/case-study/cryo",
  "/case-study/dxb-hotel",
  "/case-study/fujifilm",
  "/case-study/lg",
  "/case-study/mapei",
  "/case-study/mercedes-benz",
  "/case-study/oakberry",
  "/case-study/pioneer",
  "/case-study/voss",
  "/case-study/zilli",
  "/privacy-policy",
  "/cookies-policy",
  "/terms-conditions",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.8 : 0.7,
  }));
}
