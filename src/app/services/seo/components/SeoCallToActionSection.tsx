"use client";

import React from "react";
import styles from "../page.module.css";

export default function SeoCallToActionSection() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>
        READY TO BE FOUND ACROSS SEARCH AND AI?
      </h2>
      <p className={styles.ctaDesc}>
        Let&apos;s build an SEO and GEO strategy that improves visibility, attracts qualified
        traffic and helps your brand stay discoverable across the digital landscape.
      </p>
      
      <div className={styles.ctaBtnWrapper}>
        <button className={`cta-button ${styles.ctaWhiteHover}`}>
          <span className="dot-indicator"></span>
          <span className="cta-text">
            <span className="cta-text-inner" data-text="LET'S TALK">LET'S TALK</span>
          </span>
        </button>
      </div>
    </section>
  );
}
