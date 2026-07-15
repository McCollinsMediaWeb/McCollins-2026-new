"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MasonrySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray(".masonry-reveal").forEach((img: any) => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section className={styles.masonrySection} ref={containerRef}>
      <div className="masonry-reveal">
        <Image
          src="/brand-development/e96a92d62b2616f1de6962eaec945e5636944701.webp"
          alt="Steak on hot stone"
          width={2000}
          height={707}
          className={styles.fullWidthImage}
          style={{ "--mobile-image-ratio": "2000 / 707" } as React.CSSProperties}
        />
      </div>

      <div className={styles.masonryGrid}>
        <div className="masonry-reveal">
          <Image
            src="/brand-development/b02196f19b25ca28cb15252c92475bb543f549f6.webp"
            alt="Woman at table"
            width={2093}
            height={1358}
            style={{ "--mobile-image-ratio": "2093 / 1358" } as React.CSSProperties}
          />
        </div>
        <div className="masonry-reveal">
          <Image
            src="/brand-development/a76c556f9c07adbce72490f7944e4959c324d87a.webp"
            alt="Abstract Gold Pattern"
            width={1594}
            height={1594}
            style={{ "--mobile-image-ratio": "1594 / 1594" } as React.CSSProperties}
          />
        </div>
      </div>

      <div className={`${styles.logoEvolution} masonry-reveal`}>
        <Image
          src="/brand-development/logos.webp"
          alt="Logo Evolution"
          width={2984}
          height={1002}
          style={{ "--mobile-image-ratio": "2984 / 1002" } as React.CSSProperties}
        />
      </div>

      <div className={styles.masonryGrid}>
        <div className="masonry-reveal">
          <Image
            src="/brand-development/252e524578d3aeee45ef12236b051b30b1830f27.webp"
            alt="Woman at table"
            width={1500}
            height={2000}
            style={{ "--mobile-image-ratio": "1500 / 2000" } as React.CSSProperties}
          />
        </div>
        <div className="masonry-reveal">
          <Image
            src="/brand-development/aa0284fbffbe45ccf46a4246ab238a8dd41f5a42.webp"
            alt="Abstract Gold Pattern"
            width={1566}
            height={1691}
            style={{ "--mobile-image-ratio": "1566 / 1691" } as React.CSSProperties}
          />
        </div>
      </div>

      <div className="masonry-reveal">
        <Image
          src="/brand-development/946fbdc42b3572313c5408025c343812221bf890.webp"
          alt="Steak on hot stone"
          width={2560}
          height={1271}
          className={styles.fullWidthImage}
          style={{ "--mobile-image-ratio": "2560 / 1271" } as React.CSSProperties}
        />
      </div>

      <div className={styles.masonryGrid}>
        <div className="masonry-reveal">
          <Image
            src="/brand-development/eed449fe2fa1eb0e3bc0b150a9ad9c03ae5f98f9.webp"
            alt="Woman at table"
            width={2560}
            height={1766}
            style={{
              backgroundColor: '#E7F1F0',
              "--mobile-image-ratio": "2560 / 1766",
            } as React.CSSProperties}
          />
        </div>
        <div className="masonry-reveal">
          <Image
            src="/brand-development/9b06a7d1d96633b423f4e0ca0ebbd144e51be5b2.webp"
            alt="Abstract Gold Pattern"
            width={1562}
            height={1562}
            style={{ "--mobile-image-ratio": "1562 / 1562" } as React.CSSProperties}
          />
        </div>
      </div>
    </section>
  );
}
