"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PortfolioGallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray(".portfolio-anim").forEach((elem: any) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section className={styles.portfolioSection} ref={containerRef}>
      {/* 1st Image */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image
          src="/web-development-page/ec988d23f11459fc3435c729aaadd235a00259bd.png"
          alt="Portfolio image 1"
          width={1920}
          height={1080}
          className={styles.portfolioImage}
        />
      </div>

      {/* 2nd Image */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image
          src="/web-development-page/4dbca06f3ff5d9458494dafab0db90ed2079e655.png"
          alt="Portfolio image 2"
          width={1920}
          height={1080}
          className={styles.portfolioImage}
        />
      </div>

      {/* 3rd Image */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image
          src="/web-development-page/53e7fd625b0b794ee51a59918952d03afce9746d.png"
          alt="Portfolio image 3"
          width={1920}
          height={1080}
          className={styles.portfolioImage}
        />
      </div>

      {/* 4th Image */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image
          src="/web-development-page/9d3fbd62efd2a1bc2e86fa935f7f9bb4ff8d4f0a.jpg"
          alt="Portfolio image 4"
          width={1920}
          height={1080}
          className={styles.portfolioImage}
        />
      </div>

      {/* 5th Image */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image
          src="/web-development-page/610f9f0abe14c7dd3b353f5d3b14e7ef15493f38.jpg"
          alt="Portfolio image 5"
          width={1920}
          height={1080}
          className={styles.portfolioImage}
        />
      </div>
    </section>
  );
}
