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

export default function PrecisionAutomationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title and text reveal
    gsap.from(".precision-title-anim", {
      scrollTrigger: {
        trigger: ".precision-title-anim",
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".precision-desc-anim", {
      scrollTrigger: {
        trigger: ".precision-desc-anim",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out"
    });

    // Banner image reveal
    gsap.from(".precision-banner-anim", {
      scrollTrigger: {
        trigger: ".precision-banner-anim",
        start: "top 80%",
      },
      scale: 0.96,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.precisionSection} ref={containerRef}>
      <div className={styles.precisionInner}>
        <div className={styles.precisionHeader}>
          <h2 className={`${styles.precisionTitle} precision-title-anim`}>
            PRECISION AUTOMATION FOR<br />
            HIGH-VELOCITY <span className={styles.precisionTitleItalic}>Brands</span>
          </h2>
          <p className={`${styles.precisionDesc} precision-desc-anim`}>
            We architect sophisticated automation ecosystems that bridge the gap between audience engagement and commercial scale. By engineering intelligent workflows that nurture prospects with precision, we transform your digital presence into a high-velocity engine for sustainable growth.
          </p>
        </div>

        <div className={`${styles.bannerWrapper} precision-banner-anim`}>
          <Image
            src="/marketing-automations-page/a4e4b7d69d42145b8c0e2909696938b3f0c8feb8.webp"
            alt="Futuristic analytics workflow dashboard mockup"
            fill
            className={styles.bannerImage}
          />
        </div>
      </div>
    </section>
  );
}
