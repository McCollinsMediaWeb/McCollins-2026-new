"use client";

import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function GoogleCaseStudiesSection() {
  return (
    <section className={styles.caseSection}>
      <h2 className={styles.caseTitle}>
        GOOGLE ADS CASE <span className={styles.caseTitleItalic}>Studies</span>
      </h2>
      <h3 className={styles.caseSubtitle}>
        REAL CAMPAIGNS. MEASURABLE RESULTS. CLEAR GROWTH OUTCOMES.
      </h3>
      <p className={styles.caseDesc}>
        Explore how McCollins Media has helped brands use Google Ads to generate qualified
        leads, increase conversions, improve campaign efficiency and scale digital growth.
      </p>

      <div className={styles.casePlaceholder} style={{ overflow: "hidden" }}>
        <Image
          src="/google-ads-page/1c8f9dfda90b2c665319768267513fa6d1758ff3.jpg"
          alt="Google Ads Case Studies Data and Performance Overview"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 90vw"
        />
      </div>
    </section>
  );
}
