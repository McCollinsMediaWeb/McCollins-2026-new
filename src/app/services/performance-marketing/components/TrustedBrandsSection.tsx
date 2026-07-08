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

export default function TrustedBrandsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".trusted-title-anim", {
      scrollTrigger: {
        trigger: ".trusted-title-anim",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".trusted-card-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.trustedBrandsSection} ref={containerRef}>
      <div className={styles.cardsSectionHeader}>
        <div>Our Services</div>
        <div>info@mccollinsmedia.com</div>
      </div>


      <div className={styles.cardsWrapper}>
        <div className={`${styles.card} ${styles.cardBlack} brand-card`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleItalic}>Advanced</span><br />
            Attribution Modeling
          </h3>
          <p className={styles.cardText}>
            We deploy sophisticated tracking frameworks toprovide total transparency on the customer
            journey, ensuring every dollar is optimized for
            maximum ROI.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardGradient} brand-card`}>
          <h3 className={styles.cardTitle}>
            ALGORITHMIC<br /> AUDIENCE <span className={styles.titleItalic}>Targetting</span>
          </h3>
          <p className={styles.cardText}>
            Leveraging deep-tier data insights and AI-driven
            signals to reach high-value prospects at the
            exact moment of intent across global platforms.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardWhite} brand-card`}>
          <h3 className={styles.cardTitle}>
            CONTINUOUS<br />
            CONVERSION<br />
            <span className={styles.titleItalic}>Optimization</span>
          </h3>
          <p className={styles.cardText}>
            Leveraging deep-tier data insights and AI-driven signals to reach high-value prospects at the exact moment of intent across global platforms.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardGradient} brand-card`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleItalic}>Scalable</span><br />
            GROWTH<br />
            ARCHITECTURE
          </h3>
          <p className={styles.cardText}>
            We engineer flexible campaigns structures that allow for rapid budget scaling across global markets while maintaining strict cost-per-acquisition (CPA) thresholds.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardBlack} brand-card`}>
          <h3 className={styles.cardTitle}>
            MULTI-CHANNEL<br /><span className={styles.titleItalic}>Synergy</span>
          </h3>
          <p className={styles.cardText}>
            We architect unified campaigns across Search, Social, and Programmatic networks to ensure a cohesive brand presence that drives consistent sales velocity.
          </p>
        </div>
      </div>

    </section>
  );
}
