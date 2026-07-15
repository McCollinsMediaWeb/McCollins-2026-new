"use client";

import React from "react";
import styles from "../page.module.css";

export default function AboutSEOSection() {
  return (
    <section className={styles.aboutSeoSection}>
      {/* Empty spacer column on desktop to align content to the right */}
      <div className={styles.aboutSeoLeftPlaceholder} />
      
      <div className={styles.aboutSeoContainer}>
        <p className={styles.aboutSeoText}>
          As an SEO and GEO agency in Dubai, McCollins Media helps businesses improve organic visibility
          across traditional search engines and AI-powered discovery platforms. Our approach combines
          keyword research, technical SEO, on-page optimization, content strategy, local SEO, authority
          building and generative engine optimization to help brands appear where customers are actively
          searching and asking questions.
        </p>
        
        <div className={styles.aboutSeoTags}>
          <div className={styles.tagsRow}>
            <span className={styles.tagItem}>I) SEO agency in Dubai</span>
            <span className={styles.tagItem}>II) GEO agency in Dubai</span>
            <span className={styles.tagItem}>III) Generative Engine Optimization</span>
          </div>
          <div className={styles.tagsRow}>
            <span className={styles.tagItem}>IV) AI search visibility</span>
            <span className={styles.tagItem}>V) Organic search growth</span>
            <span className={styles.tagItem}>VI) Technical SEO  Content strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
