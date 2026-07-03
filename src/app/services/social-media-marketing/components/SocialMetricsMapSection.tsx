"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SocialMetricsMapSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from("." + styles.metricsRow, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  const metricsData = [
    {
      id: "awareness",
      journey: "Awareness",
      objective: "Create awareness",
      strategy: "Expose target audience to brand content",
      activity: "Post promotions (boosts)",
      kpi: "Impressions, reach",
      impact: "SOV, TOMA",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      id: "consideration",
      journey: "Consideration",
      objective: "Generate demand",
      strategy: "Generate engagement of target audience with brand content",
      activity: "Post, responses",
      kpi: "#of engagements, types of engagements",
      impact: "Visitors/traffic (online or offline)",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path>
        </svg>
      )
    },
    {
      id: "decision",
      journey: "Decision",
      objective: "Drive Conversion",
      strategy: "Drive target audience to brand offers",
      activity: "Post, promotions",
      kpi: "Link clicks",
      impact: "Conversions (purchases, lead submissions, app download, etc.)",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      )
    },
    {
      id: "adoption",
      journey: "Adoption",
      objective: "Delight customers",
      strategy: "Drive with engagement with brand product/services",
      activity: "Responses (i.e., Social customer care)",
      kpi: "(positive) earned mentions, customer care metrics (responses time & qty)",
      impact: "Sentiment and satisfaction",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      id: "advocacy",
      journey: "Advocacy",
      objective: "Inspire evangelism",
      strategy: "Activate customers influencers",
      activity: "Post outreachs to influencers, reshares",
      kpi: "Earned impressions, earned reach, social UGC",
      impact: "Referrals, influencer activity, positive word of mouth, NPS",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.metricsSection} ref={containerRef}>
      <h2 className={styles.metricsTitle}>
        <span className={styles.metricsTitleItalic}>SOCIAL</span> <span className={styles.metricsTitleStrong}>METRICS MAP</span>
      </h2>
      
      <div className={styles.metricsTable}>
        {/* Header Row */}
        <div className={`${styles.metricsRow} ${styles.metricsHeaderRow}`}>
          <div className={styles.colJourneyHeader}>BUYERS JOURNEY</div>
          
          <div className={styles.metricsHeaderGroup}>
            <div className={styles.colMiddleHeader}>OBJECTIVE</div>
            <div className={styles.colMiddleHeader}>SOCIAL MEDIA STRATEGY</div>
            <div className={styles.colMiddleHeader}>SOCIAL ACTIVITY</div>
            <div className={styles.colMiddleHeader}>SOCIAL KPI&apos;S</div>
          </div>
          
          <div className={styles.colImpactHeader}>BUSINESS IMPACT</div>
        </div>

        {/* Data Rows */}
        {metricsData.map((row, idx) => (
          <div key={idx} className={`${styles.metricsRow} ${styles.metricsDataRow}`}>
            <div className={styles.colJourneyData}>
              <div className={styles.journeyLabel}>
                <div className={styles.journeyIcon}>{row.icon}</div>
                <span>{row.journey}</span>
              </div>
            </div>
            
            <div className={styles.colMiddleData}>{row.objective}</div>
            <div className={styles.colMiddleData}>{row.strategy}</div>
            <div className={styles.colMiddleData}>{row.activity}</div>
            <div className={styles.colMiddleData}>{row.kpi}</div>
            
            <div className={styles.colImpactData}>{row.impact}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
