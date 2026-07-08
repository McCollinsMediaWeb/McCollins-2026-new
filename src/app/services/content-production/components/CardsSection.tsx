"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".brand-card");
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      x: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.cardsSection} ref={containerRef}>
      <div className={styles.cardsSectionHeader}>
        <div className={styles.cardsSectionTitle}>Content Production</div>
        <div className={styles.cardsSectionEmail}>info@mccollinsmedia.com</div>
      </div>
      <div className={styles.cardsWrapper}>
        <div className={`${styles.card} ${styles.cardBlack} brand-card`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleItalic}>Explainer</span> VIDEO
          </h3>
          <p className={styles.cardText}>
            High-impact animated and live-action explainer videos that simplify complex ideas and drive viewer conversions.
          </p>
        </div>
        
        <div className={`${styles.card} ${styles.cardGradient} brand-card`}>
          <h3 className={styles.cardTitle}>
            SOCIAL MEDIA<br/>
            <span className={styles.titleItalic}>&amp; Campaigns</span>
          </h3>
          <p className={styles.cardText}>
            Engaging short-form video campaigns optimized for Instagram, TikTok, LinkedIn, and YouTube Shorts.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardWhite} brand-card`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleItalic}>How-To</span> VIDEOS
          </h3>
          <p className={styles.cardText}>
            Educational tutorial and product walkthrough videos that build trust and guide customers through key features.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardGradient} brand-card`}>
          <h3 className={styles.cardTitle}>
            COMPANY ID<br/>
            <span className={styles.titleItalic}>&amp; Culture</span>
          </h3>
          <p className={styles.cardText}>
            Brand culture and corporate identity video productions that showcase team values and attract partners.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardBlack} brand-card`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleItalic}>High-Fidelity</span> PRODUCTION
          </h3>
          <p className={styles.cardText}>
            Turnkey film production, from professional sets and camera crews to world-class color grading and audio mastering.
          </p>
        </div>
      </div>
    </section>
  );
}
