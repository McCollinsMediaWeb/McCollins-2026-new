import Image from "next/image";
import styles from "../page.module.css";

const CLIENTS = [
  ["/home-page-brands/Toshiba_logo 1.webp", "Toshiba"], ["/home-page-brands/Pioneer_logo 1.webp", "Pioneer"],
  ["/home-page-brands/costa-coffee-white.png.webp", "Costa Coffee"], ["/home-page-brands/mmi-white.png.webp", "MMI"],
  ["/home-page-brands/oak-berry-white.png.webp", "Oak Berry"], ["/home-page-brands/dxb-white.png.webp", "Dubai Airport Freezone"],
  ["/home-page-brands/fujifilm-white.png.webp", "Fujifilm"], ["/home-page-brands/trader-vics-white.png.webp", "Trader Vic's"],
  ["/home-page-brands/wagamama-white.png.webp", "Wagamama"], ["/home-page-brands/rta-white.png.webp", "RTA"],
  ["/home-page-brands/energizer-white.png.webp", "Energizer"], ["/home-page-brands/damac-white.png.webp", "Damac"],
] as const;

export default function BrandsSection() {
  return <section className={styles.brandsSection}><div className={styles.brandsInner}>
    <p className={styles.brandsLabel}>SELECTED CLIENTS</p>
    <div className={styles.brandsGrid}>{CLIENTS.map(([src, alt]) => <div key={alt} className={styles.brandLogoWrapper}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 45vw, 13vw" className={styles.brandLogo} /></div>)}</div>
  </div></section>;
}
