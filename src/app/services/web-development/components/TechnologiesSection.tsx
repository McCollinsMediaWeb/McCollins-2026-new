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

export default function TechnologiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".tech-title-anim", {
      scrollTrigger: {
        trigger: ".tech-title-anim",
        start: "top 85%",
      },
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".tech-logo-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.2)"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.techSection} ref={containerRef}>
      <h2 className={`${styles.techTitle} tech-title-anim`}>
        TECHNOLOGIES WE <span>Work With</span>
      </h2>

      <div className={styles.techLogos}>
        <div className={`${styles.techItem} tech-logo-anim`}>
          <div className={styles.techLogoWrapper}>
            <Image src="/web-development-page/shopify.png" alt="Shopify" width={100} height={60} className={styles.techLogo} />
          </div>
          <span className={styles.techName}>SHOPIFY</span>
        </div>
        <div className={`${styles.techItem} tech-logo-anim`}>
          <div className={styles.techLogoWrapper}>
            <Image src="/web-development-page/sitecore.png" alt="Sitecore" width={100} height={60} className={styles.techLogo} />
          </div>
          <span className={styles.techName}>SITECORE</span>
        </div>
        <div className={`${styles.techItem} tech-logo-anim`}>
          <div className={styles.techLogoWrapper}>
            <Image src="/web-development-page/wordpress.png" alt="Wordpress" width={100} height={60} className={styles.techLogo} />
          </div>
          <span className={styles.techName}>WORDPRESS</span>
        </div>
        <div className={`${styles.techItem} tech-logo-anim`}>
          <div className={styles.techLogoWrapper}>
            <Image src="/web-development-page/react.png" alt="React" width={100} height={60} className={styles.techLogo} />
          </div>
          <span className={styles.techName}>REACT</span>
        </div>
        <div className={`${styles.techItem} tech-logo-anim`}>
          <div className={styles.techLogoWrapper}>
            <Image src="/web-development-page/sitefinity.png" alt="Sitefinity" width={100} height={60} className={styles.techLogo} />
          </div>
          <span className={styles.techName}>SITEFINITY</span>
        </div>
      </div>
    </section>
  );
}
