"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MetricRow {
  buyerJourney: string;
  strategicObjective: string;
  socialActivity: string;
  coreKpis: string;
  commercialReturn: string;
}

const METRICS_DATA: MetricRow[] = [
  {
    buyerJourney: "AWARENESS",
    strategicObjective: "Create Brand Exposure",
    socialActivity: "Post viral short-form reels, high-reach trends, strategic boosts",
    coreKpis: "Impressions, Total Reach, SOV",
    commercialReturn: "Brand Recall, Top-of-Mind Dominance",
  },
  {
    buyerJourney: "CONSIDERATION",
    strategicObjective: "Generate Demand & Intent",
    socialActivity: "Interactive stories, deep-dive educational carousels, DM replies",
    coreKpis: "Engagement Rate, Saves, Shares",
    commercialReturn: "High-Intent Traffic & Profile Visits",
  },
  {
    buyerJourney: "DECISION",
    strategicObjective: "Drive Revenue Conversion",
    socialActivity: "Shoppable links, targeted lead generation ads, limited-time offers",
    coreKpis: "Link Clicks, CTR, Lead Form Fills",
    commercialReturn: "Direct Online Sales & Qualified Inquiries",
  },
  {
    buyerJourney: "ADOPTION",
    strategicObjective: "Delight & Retain Customers",
    socialActivity: "Rapid customer care, onboarding tutorials, interactive polling",
    coreKpis: "Response Time (<15m), Sentiment Index",
    commercialReturn: "Reduced Churn, Lifetime Value Uplift",
  },
  {
    buyerJourney: "ADVOCACY",
    strategicObjective: "Inspire Brand Evangelism",
    socialActivity: "User-generated content prompts, creator co-creation, VIP community rewards",
    coreKpis: "Earned UGC Mentions, Reshares",
    commercialReturn: "Organic Referrals & Zero-CAC Virality",
  },
];

export default function SocialMetricsMapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".metrics-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }).from(
        ".metrics-row-anim",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.metricsSection} ref={sectionRef}>
      <div className={styles.metricsContainer}>
        {/* Header Block */}
        <div className={styles.metricsHeader}>
          <div className={styles.metricsHeaderLeft}>
            <div className={`${styles.metricsKicker} metrics-anim`}>
              STRATEGIC IMPACT
            </div>
            <h2 className={`${styles.metricsTitle} metrics-anim`}>
              THE SOCIAL METRICS MAP.
            </h2>
            <p className={`${styles.metricsDescription} metrics-anim`}>
              Connecting tactical day-to-day social execution directly to verifiable enterprise commercial ROI.
            </p>
          </div>

          <div className={`${styles.frameworkBadge} metrics-anim`}>
            FRAMEWORK // 2026 MODEL
          </div>
        </div>

        {/* Matrix Table Wrapper */}
        <div className={`${styles.metricsTableWrapper} metrics-anim`}>
          <div className={styles.metricsTable}>
            {/* Table Header */}
            <div className={styles.metricsTableHeader}>
              <div className={styles.thCell}>BUYER&apos;S JOURNEY</div>
              <div className={styles.thCell}>STRATEGIC OBJECTIVE</div>
              <div className={styles.thCell}>SOCIAL ACTIVITY</div>
              <div className={styles.thCell}>CORE SOCIAL KPIS</div>
              <div className={styles.thCell}>COMMERCIAL RETURN</div>
            </div>

            {/* Table Body Rows */}
            <div className={styles.metricsTableBody}>
              {METRICS_DATA.map((row, idx) => (
                <div
                  key={row.buyerJourney || idx}
                  className={`${styles.metricsTableRow} metrics-row-anim`}
                >
                  <div className={`${styles.tdCell} ${styles.tdJourney}`}>
                    {row.buyerJourney}
                  </div>
                  <div className={`${styles.tdCell} ${styles.tdObjective}`}>
                    {row.strategicObjective}
                  </div>
                  <div className={`${styles.tdCell} ${styles.tdActivity}`}>
                    {row.socialActivity}
                  </div>
                  <div className={`${styles.tdCell} ${styles.tdKpis}`}>
                    {row.coreKpis}
                  </div>
                  <div className={`${styles.tdCell} ${styles.tdReturn}`}>
                    {row.commercialReturn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
