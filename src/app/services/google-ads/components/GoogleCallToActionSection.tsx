"use client";

import React from "react";
import styles from "../page.module.css";

export default function GoogleCallToActionSection() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>
        READY TO TURN SEARCH INTENT INTO BUSINESS GROWTH?
      </h2>
      <p className={styles.ctaDesc}>
        Let&apos;s build Google Ads campaigns that generate qualified traffic, measurable leads and
        stronger conversions.
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
