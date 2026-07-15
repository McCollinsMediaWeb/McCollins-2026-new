"use client";

import React from "react";
import styles from "../page.module.css";

export default function PerformanceStatsSection() {
  const stats = [
    {
      id: "01",
      value: "+53%",
      label: "YoY SALES GROWTH"
    },
    {
      id: "02",
      value: "4X",
      label: "CHANNELS ORCHESTRATED"
    },
    {
      id: "03",
      value: "6.8x",
      label: "BLENDED ROAS"
    },
    {
      id: "04",
      value: "-34%",
      label: "CPA COMPRESSION"
    }
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        <div className={styles.statsLeftColumn}>
          <div className={styles.statsCardsWrapper}>
            {stats.map((stat, i) => (
              <div key={`stat-card-${i}`} className={styles.statCard}>
                <div className={styles.statPill}>{stat.id}</div>
                <div className={styles.statTextWrapper}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.statsRightColumn}>
          {/* Right column remains empty to display the 3D background shapes */}
        </div>
      </div>
    </section>
  );
}
