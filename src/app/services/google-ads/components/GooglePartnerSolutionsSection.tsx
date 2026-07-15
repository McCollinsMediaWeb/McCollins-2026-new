"use client";

import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function GooglePartnerSolutionsSection() {
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
    <section className={styles.googlePartnerSection}>
      {/* Top Part: Title & Google Partner Badge */}
      <div className={styles.partnerContainer}>
        <h2 className={styles.partnerTitle}>
          GOOGLE ADS MANAGEMENT: <br />
          BUILT FOR <span className={styles.partnerTitleItalic}>Conversions</span>
        </h2>

        <div className={styles.partnerLogoWrapper}>
          <Image
            src="/google-ads-page/google.webp"
            alt="Google Partner"
            width={250}
            height={180}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Bottom Part: Left Title & Right List Grid */}
      <div className={styles.solutionsContainer}>
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
      </div>
    </section>
  );
}
