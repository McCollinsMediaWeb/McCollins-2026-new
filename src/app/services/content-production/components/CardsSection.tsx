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
      <h2 className={`${styles.trustedTitle} trusted-title-anim`}>
        VIDEO STORYTELLING<br />
        FORTECH <span>Marketing</span>
      </h2>
      <div className={styles.cardsSectionHeader}>
        <div className={styles.cardsSectionTitle}>OUR SERVICES</div>
        <div className={styles.cardsSectionEmail}>info@mccollinsmedia.com</div>
      </div>
      <div className={styles.cardsWrapper}>
        <div className={`${styles.card} ${styles.cardBlack} brand-card`}>
          <h3 className={styles.cardTitle}>
            CORPORATE<br />
            <span className={styles.titleItalic}>Video</span>
          </h3>
          <p className={styles.cardText}>
            We produce high-end corporate cinematography designed to command attention and drive brand engagement.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardGradient} brand-card`}>
          <h3 className={styles.cardTitle}>
            SOCIAL MEDIA<br />
            <span className={styles.titleItalic}>Videos</span>
          </h3>
          <p className={styles.cardText}>
            Dynamic social narratives that bridge the gap between creative storytelling and algorithmic performance to drive meaningful brand resonance.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardWhite} brand-card`}>
          <h3 className={styles.cardTitle}>
            HOW TO<br />
            <span className={styles.titleItalic}>Video</span>
          </h3>
          <p className={styles.cardText}>
            Instructional videos designed to simplify the user journey and foster deep-tier brand loyalty through educational excellence.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardGradient} brand-card`}>
          <h3 className={styles.cardTitle}>
            CGI<br />
            <span className={styles.titleItalic}>Video</span>
          </h3>
          <p className={styles.cardText}>
            Engineering immersive 3D environments and surrealist visual narratives that elevates your brand into the next dimension of digital engagement.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardBlack} brand-card`}>
          <h3 className={styles.cardTitle}>
            EXPLAINER<br />
            <span className={styles.titleItalic}>Video</span>
          </h3>
          <p className={styles.cardText}>
            Motion graphics designed to simplify your value propositions into streamable visual communication.
          </p>
        </div>
      </div>
    </section>
  );
}
