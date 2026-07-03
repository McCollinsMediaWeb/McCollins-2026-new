"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MasonrySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray(".masonry-reveal").forEach((img: unknown) => {
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
          src="/brand-development/6629512c45caff7a5e433844de6c0c69e0e22fe8.jpg"
          alt="Steak on hot stone"
          width={1920}
          height={800}
          className={styles.fullWidthImage}
        />
      </div>

      <div className={`${styles.logoEvolution} masonry-reveal`}>
        <Image 
          src="/brand-development/4dc3c13a765b3dcfdce7f2ff72095ffcc8021def.jpg"
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
            src="/brand-development/178ae9d940d10b780466622e7107390499e30af9.jpg"
            alt="Abstract Gold Pattern"
            width={960}
            height={960}
          />
        </div>
        <div className="masonry-reveal">
          <Image 
            src="/brand-development/aa0284fbffbe45ccf46a4246ab238a8dd41f5a42.jpg"
            alt="Menu Layout"
            width={960}
            height={960}
          />
        </div>
        <div className="masonry-reveal">
          <Image 
            src="/brand-development/3ed2dfc71c56fe87b8b78ef54f290e176fb5295f.jpg"
            alt="Woman's face fire"
            width={960}
            height={960}
          />
        </div>
      </div>
    </section>
  );
}
