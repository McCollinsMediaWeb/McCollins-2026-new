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
          src="/brand-development/e96a92d62b2616f1de6962eaec945e5636944701.png"
          alt="Steak on hot stone"
          width={2000}
          height={800}
          className={styles.fullWidthImage}
        />
      </div>

      <div className={styles.masonryGrid}>
        <div className="masonry-reveal">
          <Image
            src="/brand-development/b02196f19b25ca28cb15252c92475bb543f549f6.png"
            alt="Woman at table"
            width={960}
            height={960}
          />
        </div>
        <div className="masonry-reveal">
          <Image
            src="/brand-development/a76c556f9c07adbce72490f7944e4959c324d87a.png"
            alt="Abstract Gold Pattern"
            width={960}
            height={960}
          />
        </div>
      </div>

      <div className={`${styles.logoEvolution} masonry-reveal`}>
        <Image
          src="/brand-development/logos.jpg"
          alt="Logo Evolution"
          width={1920}
          height={600}
        />
      </div>

      <div className={styles.masonryGrid}>
        <div className="masonry-reveal">
          <Image
            src="/brand-development/252e524578d3aeee45ef12236b051b30b1830f27.jpg"
            alt="Woman at table"
            width={960}
            height={960}
          />
        </div>
        <div className="masonry-reveal">
          <Image
            src="/brand-development/aa0284fbffbe45ccf46a4246ab238a8dd41f5a42.jpg"
            alt="Abstract Gold Pattern"
            width={960}
            height={960}
          />
        </div>
      </div>

      <div className="masonry-reveal">
        <Image
          src="/brand-development/946fbdc42b3572313c5408025c343812221bf890.png"
          alt="Steak on hot stone"
          width={1920}
          height={800}
          className={styles.fullWidthImage}
        />
      </div>

      <div className={styles.masonryGrid}>
        <div className="masonry-reveal">
          <Image
            src="/brand-development/eed449fe2fa1eb0e3bc0b150a9ad9c03ae5f98f9.png"
            alt="Woman at table"
            width={960}
            height={960}
            style={{ backgroundColor: '#E7F1F0' }}
          />
        </div>
        <div className="masonry-reveal">
          <Image
            src="/brand-development/9b06a7d1d96633b423f4e0ca0ebbd144e51be5b2.png"
            alt="Abstract Gold Pattern"
            width={960}
            height={960}
          />
        </div>
      </div>
    </section>
  );
}
