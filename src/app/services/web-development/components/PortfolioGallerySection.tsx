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
    gsap.utils.toArray(".portfolio-anim").forEach((elem: unknown) => {
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
      {/* 1st Image: Isometric grid of mobile screens */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image 
          src="/web-development-page/a7154514d69f6021c641cb61019bf95e8a0eb79e.png" 
          alt="Isometric app screens grid" 
          width={1448} 
          height={1086} 
          className={styles.portfolioImage} 
        />
      </div>

      {/* 2nd Image: Tablet and laptop mockup */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image 
          src="/web-development-page/6d606ea59bad1d35476e75ce4157348c50f19eaa.png" 
          alt="Interior design website mockup" 
          width={4096} 
          height={2920} 
          className={styles.portfolioImage} 
        />
      </div>

      {/* 3rd Image: Row of 4 mobile screens */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image 
          src="/web-development-page/610f9f0abe14c7dd3b353f5d3b14e7ef15493f38.jpg" 
          alt="App UI screens row" 
          width={1920} 
          height={1080} 
          className={styles.portfolioImage} 
        />
      </div>

      {/* 4th Image: Desktop monitor with red graphics */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image 
          src="/web-development-page/04b71f64138645a5bc9d7c84a4d13f243aae7034.jpg" 
          alt="Gaming or high tech desktop mockup" 
          width={1920} 
          height={1080} 
          className={styles.portfolioImage} 
        />
      </div>

      {/* 5th Image: Row of 4 mobile screens (restaurant/food apps) */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image 
          src="/web-development-page/474bd812a5bee5c7dc8751f41f02a69b93a6d5cf.jpg" 
          alt="Food app screens" 
          width={1920} 
          height={1080} 
          className={styles.portfolioImage} 
        />
      </div>
    </section>
  );
}
