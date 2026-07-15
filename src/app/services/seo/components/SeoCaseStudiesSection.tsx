"use client";

import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function SeoCaseStudiesSection() {
  return (
    <section className={styles.caseSection}>
      <h2 className={styles.caseTitle}>
        SEO &amp; GEO CASE <span className={styles.caseTitleItalic}>Studies</span>
      </h2>
      <h3 className={styles.caseSubtitle}>
        Organic visibility. Search growth. AI-ready content.
      </h3>
      <p className={styles.caseDesc}>
        Explore how McCollins Media helps brands improve search rankings, increase organic traffic,
        strengthen digital authority and prepare their content for the future of AI-powered discovery.
      </p>

      <div className={styles.casePlaceholder}>
        <Image
          src="/seo-page/pioneer.png"
          alt="Pioneer Case Study Mobile Showcase"
          fill
          className={styles.caseImage}
        />
      </div>
    </section>
  );
}
