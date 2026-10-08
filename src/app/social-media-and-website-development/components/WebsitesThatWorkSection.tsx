"use client";

import React from "react";
import styles from "../page.module.css";

interface MethodologyCardItem {
  category: string;
  tag: string;
  titlePlain: string;
  titleItalic: string;
  titleItalicSecond?: string;
  breakBeforeItalic?: boolean;
  desc: string;
  footerLabel: string;
  spanClass: string;
}

const METHODOLOGY_ITEMS: MethodologyCardItem[] = [
  {
    category: "01 // ARCHITECTURE",
    tag: "ENTERPRISE",
    titlePlain: "CORPORATE WEBSITE",
    titleItalic: "development",
    desc: "We engineer tailored corporate websites that elevate your brand identity through seamless user experiences and precision digital design.",
    footerLabel: "BESPOKE CORPORATE FLAGSHIP",
    spanClass: styles.methodologySpan3,
  },
  {
    category: "02 // TRANSACTIONS",
    tag: "HIGH CONVERSION",
    titlePlain: "E-COMMERCE",
    titleItalic: "development",
    desc: "Robust and scalable e-commerce solutions built to maximize conversions and drive sustained online revenue growth across the Middle East and globally.",
    footerLabel: "HEADLESS & SHOPIFY PLUS",
    spanClass: styles.methodologySpan3,
  },
  {
    category: "03 // ACQUISITION",
    tag: "PIPELINE",
    titlePlain: "LEAD GENERATION FUNNEL",
    titleItalic: "development",
    breakBeforeItalic: true,
    desc: "We make strategic lead funnels designed to maximize acquisition efficiency and convert high-value prospects into loyal customers.",
    footerLabel: "CONVERSION ARCHITECTURE",
    spanClass: styles.methodologySpan2,
  },
  {
    category: "04 // BESPOKE",
    tag: "CUSTOM UI",
    titlePlain: "TAILORED WEBSITES",
    titleItalic: "for",
    titleItalicSecond: "unique needs",
    desc: "Tired of One-Size-Fits-All Websites? Generic website templates can't effectively showcase what sets your business apart. Don't settle for mediocrity when you can have a website that's as unique as your brand.",
    footerLabel: "ZERO TEMPLATES GUARANTEE",
    spanClass: styles.methodologySpan2,
  },
  {
    category: "05 // RESPONSIVE",
    tag: "PWA & SPEED",
    titlePlain: "MOBILE FIRST WEBSITES",
    titleItalic: "development",
    breakBeforeItalic: true,
    desc: "Our mobile-first website development services prioritize the mobile user experience. We ensure your website is designed and optimized for smartphones and tablets, with a focus on speed, functionality, and user-friendliness.",
    footerLabel: "OPTIMIZED FOR ALL SCREENS",
    spanClass: styles.methodologySpan2,
  },
];

export default function WebsitesThatWorkSection() {
  return (
    <section className={styles.methodologySection}>
      <div className={styles.methodologyContainer}>
        {/* Top pill badge */}
        <div>
          <span className={styles.methodologyBadge}>
            <span className={styles.methodologyBadgeDot} />
            SERVICES &amp; METHODOLOGY
          </span>
        </div>

        {/* Header row */}
        <div className={styles.methodologyHeaderRow}>
          <h2 className={styles.methodologyTitle}>
            WEBSITES THAT WORK{" "}
            <span
              className={styles.serifItalic}
              style={{ color: "#93a8ff", textTransform: "lowercase", fontWeight: 400 }}
            >
              simply.
            </span>
          </h2>
          <div className={styles.methodologyCounter}>
            <span className={styles.methodologyCounterHighlight}>01</span> / 05 PILLARS
          </div>
        </div>

        {/* 5-Card Grid */}
        <div className={styles.methodologyGrid}>
          {METHODOLOGY_ITEMS.map((item, index) => (
            <div key={index} className={`${styles.methodologyCard} ${item.spanClass}`}>
              <div className={styles.methodologyCardTop}>
                <div className={styles.methodologyCardHeader}>
                  <span className={styles.methodologyCardCategory}>{item.category}</span>
                  <span className={styles.methodologyCardTag}>{item.tag}</span>
                </div>

                <h3 className={styles.methodologyCardTitle}>
                  {item.titlePlain}{" "}
                  {item.breakBeforeItalic && <br />}
                  <span
                    className={styles.serifItalic}
                    style={{ color: "#a1a1a4", textTransform: "lowercase", fontWeight: 400 }}
                  >
                    {item.titleItalic}
                  </span>
                  {item.titleItalicSecond && (
                    <>
                      <br />
                      <span
                        className={styles.serifItalic}
                        style={{ color: "#a1a1a4", textTransform: "lowercase", fontWeight: 400 }}
                      >
                        {item.titleItalicSecond}
                      </span>
                    </>
                  )}
                </h3>

                <p className={styles.methodologyCardDesc}>{item.desc}</p>
              </div>

              <div>
                <div className={styles.methodologyCardDivider} />
                <div className={styles.methodologyCardFooter}>
                  <span className={styles.methodologyCardFooterLabel}>{item.footerLabel}</span>
                  <span className={styles.methodologyCardArrow}>&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
