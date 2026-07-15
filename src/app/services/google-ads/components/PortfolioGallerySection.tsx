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
          src="/web-development-page/4326c49ea93d6dd871d0dae8aa2d1c89b37706d6.webp" 
          alt="Portfolio image 1" 
          width={1920} 
          height={1080} 
          className={styles.portfolioImage} 
        />
      </div>

      {/* 2nd Image */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image 
          src="/web-development-page/04b71f64138645a5bc9d7c84a4d13f243aae7034.webp" 
          alt="Portfolio image 2" 
          width={1920} 
          height={1080} 
          className={styles.portfolioImage} 
        />
      </div>

      {/* 3rd Image */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image 
          src="/web-development-page/9d3fbd62efd2a1bc2e86fa935f7f9bb4ff8d4f0a.webp" 
          alt="Portfolio image 3" 
          width={1920} 
          height={1080} 
          className={styles.portfolioImage} 
        />
      </div>

      {/* 4th Image */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image 
          src="/web-development-page/474bd812a5bee5c7dc8751f41f02a69b93a6d5cf.webp" 
          alt="Portfolio image 4" 
          width={1920} 
          height={1080} 
          className={styles.portfolioImage} 
        />
      </div>

      {/* 5th Image */}
      <div className={`${styles.portfolioImageWrapper} portfolio-anim`}>
        <Image 
          src="/web-development-page/610f9f0abe14c7dd3b353f5d3b14e7ef15493f38.webp" 
          alt="Portfolio image 5" 
          width={1920} 
          height={1080} 
          className={styles.portfolioImage} 
        />
      </div>
    </section>
  );
}
