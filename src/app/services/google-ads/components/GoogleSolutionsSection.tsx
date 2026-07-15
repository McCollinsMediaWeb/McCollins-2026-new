"use client";

import React from "react";
import styles from "../page.module.css";

export default function GoogleSolutionsSection() {
  const items = [
    "GOOGLE ADS STRATEGY",
    "KEYWORD RESEARCH",
    "SEARCH ADS MANAGEMENT",
    "PERFORMANCE MAX CAMPAIGNS",
    "BID & BUDGET OPTIMIZATION",
    "CONVERSION TRACKING",
    "REPORTING & INSIGHTS",
    "CAMPAIGN SETUP"
  ];

  return (
    <section className={styles.solutionsContainer}>
      <div className={styles.solutionsLeftColumn}>
        <h3 className={styles.solutionsTitle}>
          THE BEST SOLUTIONS <br />
          FOR YOUR BUSINESS
        </h3>
      </div>
      
      <div className={styles.solutionsRightColumn}>
        <div className={styles.solutionsList}>
          {items.map((item, i) => (
            <div key={`solution-item-${i}`} className={styles.solutionItem}>
              <span className={styles.solutionBullet}></span>
              <span className={styles.solutionText}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
