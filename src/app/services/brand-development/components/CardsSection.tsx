"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        <div className={styles.cardsSectionTitle}>Brand Development</div>
        <div className={styles.cardsSectionEmail}>info@mccollinsmedia.com</div>
      </div>
      <div className={styles.cardsWrapper}>
        <div className={`${styles.card} ${styles.cardBlack} brand-card`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleItalic}>Brand</span> DISCOVERY
          </h3>
          <p className={styles.cardText}>
            We dive deep into your brand, audience, and market to uncover the unique insights that form the foundation of a powerful brand identity and a strategic roadmap for growth.
          </p>
        </div>
        
        <div className={`${styles.card} ${styles.cardGradient} brand-card`}>
          <h3 className={styles.cardTitle}>
            POSITIONING<br/>
            <span className={styles.titleItalic}>&amp; Strategy</span>
          </h3>
          <p className={styles.cardText}>
            We define what your brand stands for, the position it claims within the market, and the message that truly resonates with your audience—the strategic foundation for a brand that sticks.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardWhite} brand-card`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleItalic}>Visual</span> IDENTITY
          </h3>
          <p className={styles.cardText}>
            We design a visual identity that reflects your ambitions including logo, colors, typography, imagery, and guidelines. A recognizable look that gives your brand instant strength.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardGradient} brand-card`}>
          <h3 className={styles.cardTitle}>
            BRAND COLLATERAL<br/>
            <span className={styles.titleItalic}>&amp; Applications</span>
          </h3>
          <p className={styles.cardText}>
            We translate your brand&apos;s visual DNA into a cohesive ecosystem of high-impact physical and digital applications. Every touchpoint is architected to uphold your premium positioning and ensure absolute consistency throughout the consumer journey.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardBlack} brand-card`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleItalic}>Brand</span> GUIDELINES<br/>
            IMPLEMENTATION
          </h3>
          <p className={styles.cardText}>
            We deliver a complete brand playbook, tools, and templates, enabling you to implement the new brand identity easily and professionally across every channel.
          </p>
        </div>
      </div>
    </section>
  );
}
