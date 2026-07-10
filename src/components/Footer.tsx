"use client";

import React, { useRef } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

import { usePathname } from "next/navigation";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const footerElements = containerRef.current?.querySelectorAll(".footer-reveal");

      if (footerElements && footerElements.length > 0) {
        gsap.from(footerElements, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 50,
          opacity: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "all",
        });
      }
      // SVG Water drop reveal animation
      const svgPaths = containerRef.current?.querySelectorAll("." + styles.footerLogoSvg + " path");

      if (svgPaths && svgPaths.length > 0) {
        gsap.from(svgPaths, {
          scrollTrigger: {
            trigger: "." + styles.bottomSection,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          y: -80,
          opacity: 0,
          scale: 0.9,
          duration: 1.5,
          ease: "elastic.out(1, 0.4)",
          stagger: 0.1,
          transformOrigin: "center center",
          clearProps: "all",
        });
      }
    },
    { scope: containerRef, dependencies: [pathname] }
  );

  return (
    <footer className={styles.footer} ref={containerRef}>
      <div className={styles.footerInner}>
        <div className={`${styles.topSection} footer-reveal`}>
          <h2 className={styles.footerTitle}>
            <span className={styles.sansText}>Precision from the</span>{" "}
            <span className={styles.italicText}>first click.</span>
          </h2>
          <div className={styles.linksGrid}>
            <ul className={styles.linksList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/works">Work</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <ul className={styles.linksList}>
              <li><a href="https://www.instagram.com/mccollinsmedia/?hl=en">Instagram ↗</a></li>
              <li><a href="https://www.linkedin.com/company/mccollins-media/">LinkedIn ↗</a></li>
              <li><a href="https://www.facebook.com/mccollinsmedia/">Facebook ↗</a></li>
              <li><a href="https://www.tiktok.com/mccollinsmedia">Tiktok ↗</a></li>
              <li><a href="https://www.x.com/@mccollinsmedia">X ↗</a></li>
            </ul>
          </div>
        </div>

        <div className={`${styles.middleSection} footer-reveal`}>
          <div className={styles.middleLeft}>
            <div className={styles.contactInfo}>
              <p>New Business:</p>
              <p><a href="mailto:info@mccollinsmedia.com">info@mccollinsmedia.com</a></p>
            </div>
            <div className={styles.newsletter}>
              <p>Sign up for our newsletter</p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email" className={styles.newsletterInput} />
                <button type="submit" className={styles.newsletterSubmit}>→</button>
              </form>
            </div>
          </div>
          <div className={styles.middleRight}>
            <div className={styles.address}>
              <p>G04, Loft Office 2,</p>
              <p>Entrance C, Dubai Media City</p>
            </div>
            <div className={styles.legal}>
              <p><a href="#">Terms of use</a></p>
              <p>©13–26</p>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.svgWrapper}>
            <svg viewBox="0 0 1709 248" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.footerLogoSvg}>
              <path d="M183.042 70.2614C181.038 59.3462 170.848 52.2684 159.805 54.1019C151.021 55.5515 144.455 62.9277 143.944 72.0521V245.884H90.9881V69.7071C89.5384 62.9277 85.1467 57.4276 78.7511 54.9546C72.8672 52.7374 66.3437 53.5049 61.0567 57.3423C56.6224 60.5827 53.1688 65.6992 52.9982 72.0095V245.842H0L0.0852928 66.5093C1.2365 56.5321 3.62421 47.5783 8.57014 39.0935C18.6752 21.6548 36.0285 7.96827 56.0254 4.38674C77.7705 0.506741 101.264 4.85573 117.551 20.2904C126.761 12.4025 137.292 7.15819 149.06 4.81314C173.15 -0.00488067 195.449 4.68518 213.698 21.2285L219.71 27.283C230.668 39.5199 236.722 54.912 236.722 71.4979V186.107L236.85 245.842H183.042V70.2188V70.2614Z" fill="currentColor" />
              <path d="M371.199 181.332H421.937C417.588 198.856 408.336 213.907 395.459 225.419C361.392 255.99 309.886 255.478 276.544 224.14C242.562 192.162 239.961 139.505 271.257 104.329C290.742 82.5837 319.693 71.7964 349.027 75.9322V123.942C335 119.849 320.375 123.004 309.844 132.597C292.448 148.373 292.661 175.32 310.27 190.797C328.561 207.255 358.194 203.29 371.199 181.332Z" fill="currentColor" />
              <path d="M522.434 216.038C553.431 205.848 580.293 186.533 597.39 158.648L662.156 158.734C655.803 180.052 643.822 198.557 627.961 213.395C580.079 258.079 504.91 257.951 456.9 213.053L451.571 207.766C404.84 158.435 406.972 80.7073 456.516 34.19C482.568 9.33246 518.682 -3.0324 555.264 0.634408V58.7917C534.926 54.4853 513.992 60.1135 498.429 73.8001C482.866 87.4866 474.936 106.887 476.172 127.48C478.048 159.416 502.906 185.339 534.543 188.836C534.287 199.026 528.105 207.681 522.476 216.081L522.434 216.038Z" fill="currentColor" />
              <path d="M887.153 40.671C935.035 91.8784 929.492 171.653 877.048 216.507C824.604 261.362 751.354 255.861 705.604 207.852C669.106 169.521 661.048 111.577 687.099 64.7611C708.205 26.8565 748.071 2.34004 791.816 1.10356H799.747C829.764 1.91367 858.245 13.6389 880.374 33.8917L887.153 40.7137V40.671ZM853.044 167.091C873.595 140.698 872.785 103.945 851.637 78.5755C823.283 44.551 771.606 43.5703 742.016 76.4437C717.414 103.774 717.755 145.431 743.423 172.42C773.951 204.526 825.884 201.968 853.086 167.048L853.044 167.091Z" fill="currentColor" />
              <path d="M1076.04 193.483V245.926L983.129 245.841C970.85 244.647 960.446 239.573 951.705 231.302C941.686 221.794 935.674 209.344 935.418 195.231V3.23487L988.459 3.19226V176.854C988.203 185.126 995.707 192.63 1003.85 193.483H1075.99H1076.04Z" fill="currentColor" />
              <path d="M1167.71 193.526H1240.02V245.927H1150.95C1137.05 245.927 1124.6 240.128 1114.88 230.577C1105.92 221.751 1100.42 210.452 1099.57 197.747V3.32045H1152.36V59.5591V70.3463V177.025C1152.78 185.766 1159.14 192.417 1167.71 193.611V193.526Z" fill="currentColor" />
              <path d="M1313.83 3.23521H1261V245.884H1313.83V3.23521Z" fill="currentColor" />
              <path d="M1454.61 62.9272C1442.16 52.0973 1423.66 52.9074 1412.57 64.8885C1407.67 70.1755 1404.56 76.5285 1404.34 83.9474V245.799L1351.13 245.756L1351.22 81.9861C1352.16 65.3575 1357.27 49.9228 1367.29 36.8332C1383.88 15.2587 1406.69 2.9365 1434.27 3.06442C1446 3.10705 1457.13 4.89783 1467.87 9.67321C1485.57 17.5611 1500.06 31.1624 1509.15 48.2599C1514.99 59.2604 1517.5 70.9856 1518.01 83.4784V245.756H1465.14V84.8854C1464.68 76.1448 1461.14 68.6832 1454.53 62.8846L1454.61 62.9272Z" fill="currentColor" />
              <path d="M1607.17 246.097L1570.29 245.927L1541.59 245.756V193.397L1635.61 193.312C1641.96 193.312 1647.89 189.347 1651.43 184.443C1659.06 173.997 1655.35 159.842 1644.35 153.702C1640.56 151.57 1636.72 151.016 1632.33 150.931L1623.12 150.803L1616.64 150.504C1597.32 150.931 1579.07 143.981 1565.17 130.678C1557.5 123.344 1551.23 115.201 1547.14 105.223C1539.72 87.3157 1539.63 66.9351 1547.05 48.9421C1552.47 35.8951 1561.59 25.2358 1572.8 16.9215C1584.91 7.9677 1599.2 3.23494 1614.38 3.10703H1708.31V55.2524H1615.48C1609.09 55.8494 1604.01 58.2371 1599.79 63.0125C1594.38 69.1522 1593.01 78.1913 1596.6 85.9087C1599.84 92.9438 1607 98.1029 1615.31 98.2309L1634.93 98.4867C1658.59 98.7851 1679.18 109.572 1693.64 128.162C1703.23 140.484 1708.26 155.194 1708.39 170.842C1708.52 182.909 1706.39 194.335 1700.8 205.037C1696.15 213.991 1689.97 221.581 1682.38 228.232C1669.8 239.232 1654.37 245.585 1637.49 246.14H1607.17V246.097Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
