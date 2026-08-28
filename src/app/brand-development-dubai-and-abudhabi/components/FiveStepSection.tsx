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

export default function FiveStepSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".ascension-anim-header", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".ascension-card-anim", {
      scrollTrigger: {
        trigger: ".ascension-grid-trigger",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section className={styles.ascensionSection} ref={containerRef}>
      <h2 className={`${styles.ascensionHeader} ascension-anim-header`}>
        A five-step path from insight to <span className={styles.ascensionHeaderItalic}>Identity.</span>
      </h2>

      <div className={styles.ascensionSubHeader}></div>

      <div className={`${styles.ascensionGrid} ascension-grid-trigger`}>
        <div className={`${styles.ascensionCard} ${styles.cardBlack} ${styles.cardShort} ${styles.cardNarrow} ascension-card-anim`}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Brand<br />Discovery</h3>
            <p className={styles.cardDesc}>We dive into your brand, audience and market to surface the insights that matter.</p>
          </div>
        </div>

        <div className={`${styles.ascensionCard} ${styles.cardTall} ${styles.cardWide} ascension-card-anim`}>
          <div className={styles.cardImageWrapper}>
            <Image src="/brand-development-dubai-and-abudhabi/positioning-bg.png" alt="Design" fill className={styles.cardImage} />
          </div>
          <div className={`${styles.cardContent} ${styles.cardContentBottom}`}>
            <div>
              <h3 className={styles.cardTitle}>Positioning &amp; Strategy</h3>
              <p className={styles.cardDesc}>We define what your brand stands for and the message that resonates.</p>
            </div>
          </div>
        </div>

        <div className={`${styles.ascensionCard} ${styles.cardGray} ${styles.cardShort} ${styles.cardNarrow} ascension-card-anim`}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Visual Identity</h3>
            <p className={styles.cardDesc}>Logo, colors, typography and imagery come together into a recognizable look.</p>
          </div>
        </div>

        <div className={`${styles.ascensionCard} ${styles.cardTall} ${styles.cardWide} ascension-card-anim`}>
          <div className={styles.cardImageWrapper}>
            <Image src="/brand-development-dubai-and-abudhabi/brand-collateral-bg.png" alt="Brand Collateral Background" fill className={styles.cardImage} />
          </div>
          <div className={styles.cardOverlayImageWrapper}>
            <Image src="/brand-development-dubai-and-abudhabi/brand-collateral-image.png" alt="Brand Collateral Overlay" fill className={styles.cardOverlayImage} />
          </div>
          <div className={`${styles.cardContent} ${styles.cardContentBottom}`}>
            <div>
              <h3 className={styles.cardTitle} style={{ color: '#000' }}>Brand Collateral</h3>
              <p className={styles.cardDesc} style={{ color: '#000' }}>Your visual DNA translated into a cohesive ecosystem of applications.</p>
            </div>
          </div>
        </div>

        <div className={`${styles.ascensionCard} ${styles.cardBlack} ${styles.cardShort} ${styles.cardNarrow} ascension-card-anim`}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Guidelines Implementation</h3>
            <p className={styles.cardDesc}>A complete playbook, tools and templates to roll the brand out yourself.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
