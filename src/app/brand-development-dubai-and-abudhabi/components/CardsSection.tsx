"use client";

import React, { useRef } from "react";
import styles from "./CardsSection.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (wrapperRef.current?.offsetLeft || 0);
    scrollLeftStart.current = wrapperRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !wrapperRef.current) return;
    e.preventDefault();
    const x = e.pageX - (wrapperRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    wrapperRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

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
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section className={styles.cardsSection} ref={containerRef}>
      <div className={styles.cardsSectionHeader}>
        <div className={styles.cardsSectionTitle}>Brand Development</div>
        <div className={styles.cardsSectionEmail}>
          <a href="mailto:info@mccollinsmedia.com">info@mccollinsmedia.com</a>
        </div>
      </div>
      <div
        ref={wrapperRef}
        className={styles.cardsWrapper}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
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
            POSITIONING<br />
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
            BRAND COLLATERAL<br />
            <span className={styles.titleItalic}>&amp; Applications</span>
          </h3>
          <p className={styles.cardText}>
            We translate your brand&apos;s visual DNA into a cohesive ecosystem of high-impact physical and digital applications. Every touchpoint is architected to uphold your premium positioning and ensure absolute consistency throughout the consumer journey.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardBlack} brand-card`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleItalic}>Brand</span> GUIDELINES<br />
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
