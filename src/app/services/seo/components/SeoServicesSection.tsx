"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SeoServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".seo-card-anim", {
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
    <section className={styles.seoServicesSection} ref={containerRef}>
      <div className={styles.cardsSectionHeader}>
        <div>OUR SERVICES</div>
        <div>info@mccollinsmedia.com</div>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={`${styles.card} ${styles.cardBlack} seo-card-anim`}>
          <h3 className={styles.cardTitle}>
            SEARCH <span className={styles.titleItalic}>Visibility</span>
          </h3>
          <p className={styles.cardText}>
            We optimize your website so your brand can rank for keywords when customers search for your products, services or solutions online.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardGradient} seo-card-anim`}>
          <h3 className={styles.cardTitle}>
            GENERATIVE <span className={styles.titleItalic}>Discovery</span>
          </h3>
          <p className={styles.cardText}>
            We structure your content to improve visibility across AI-powered search experiences, answer engines and generative discovery platforms.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardWhite} seo-card-anim`}>
          <h3 className={styles.cardTitle}>
            KEYWORD <span className={styles.titleItalic}>Intelligence</span>
          </h3>
          <p className={styles.cardText}>
            We identify the search terms, questions and topics your customers use, then build content around real demand and business intent.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardGradient} seo-card-anim`}>
          <h3 className={styles.cardTitle}>
            CONTENT <span className={styles.titleItalic}>Architecture</span>
          </h3>
          <p className={styles.cardText}>
            We create and organize website content, blogs and landing pages so search engines and AI platforms can understand your expertise clearly.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardBlack} seo-card-anim`}>
          <h3 className={styles.cardTitle}>
            TECHNICAL <span className={styles.titleItalic}>Performance</span>
          </h3>
          <p className={styles.cardText}>
            We improve website health, indexing, crawlability, mobile performance and structured data to support stronger organic performance.
          </p>
        </div>
      </div>
    </section>
  );
}
