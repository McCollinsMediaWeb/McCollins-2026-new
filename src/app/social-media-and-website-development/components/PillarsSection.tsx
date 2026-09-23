"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLARS = [
  {
    index: "01 // ARCHITECTURE",
    tag: "ENTERPRISE",
    title: "CORPORATE WEBSITE",
    titleItalic: "development",
    desc: "We engineer tailored corporate websites that elevate your brand identity through seamless user experiences and precision digital design.",
    cta: "BESPOKE CORPORATE FLAGSHIP",
    colSpan: 6,
  },
  {
    index: "02 // TRANSACTIONS",
    tag: "HIGH CONVERSION",
    title: "E-COMMERCE",
    titleItalic: "development",
    desc: "Robust and scalable e-commerce solutions built to maximize conversions and drive sustained online revenue growth across the Middle East and globally.",
    cta: "HEADLESS & SHOPIFY PLUS",
    colSpan: 6,
  },
  {
    index: "03 // ACQUISITION",
    tag: "PIPELINE",
    title: "LEAD GENERATION FUNNEL",
    titleItalic: "development",
    desc: "We make strategic lead funnels designed to maximize acquisition efficiency and convert high-value prospects into loyal customers.",
    cta: "CONVERSION ARCHITECTURE",
    colSpan: 4,
  },
  {
    index: "04 // BESPOKE",
    tag: "CUSTOM UI",
    title: "TAILORED WEBSITES",
    titleItalic: "for unique needs",
    desc: "Tired of One-Size-Fits-All Websites? Generic website templates can’t effectively showcase what sets your business apart. Don’t settle for mediocrity when you can have a website that’s as unique as your brand.",
    cta: "ZERO TEMPLATES GUARANTEE",
    colSpan: 4,
  },
  {
    index: "05 // RESPONSIVE",
    tag: "PWA & SPEED",
    title: "MOBILE FIRST WEBSITES",
    titleItalic: "development",
    desc: "Our mobile-first website development services prioritize the mobile user experience. We ensure your website is designed and optimized for smartphones and tablets, with a focus on speed, functionality, and user-friendliness.",
    cta: "OPTIMIZED FOR ALL SCREENS",
    colSpan: 4,
  },
];

export default function PillarsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".pillars-header-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }).from(
        ".pillar-card-anim",
        {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.pillarsSection} ref={sectionRef}>
      <div className={styles.pillarsContainer}>
        {/* Header Band */}
        <div className={styles.pillarsHeaderBand}>
          <div>
            <div className={`${styles.kickerPill} pillars-header-anim`} style={{ marginBottom: "12px" }}>
              <span className={styles.pulseDot} />
              <span className={styles.kickerText}>SERVICES &amp; METHODOLOGY</span>
            </div>
            <h2 className={`${styles.sectionTitle} pillars-header-anim`}>
              WEBSITES THAT WORK{" "}
              <span className={styles.serifItalic} style={{ color: "#93a8ff", textTransform: "lowercase" }}>
                simply.
              </span>
            </h2>
          </div>

          <div className={`${styles.pillarsCounter} pillars-header-anim`}>
            <span className={styles.pillarsCounterActive}>01</span>
            <span>/</span>
            <span>05 PILLARS</span>
          </div>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className={styles.pillarsGrid}>
          {PILLARS.map((p) => (
            <div
              key={p.index}
              className={`${styles.pillarCard} ${
                p.colSpan === 6 ? styles.pillarCardCol6 : styles.pillarCardCol4
              } pillar-card-anim`}
            >
              <div className={styles.pillarTop}>
                <div className={styles.pillarBadgeRow}>
                  <span className={styles.pillarIndex}>{p.index}</span>
                  <span className={styles.pillarTag}>{p.tag}</span>
                </div>
                <h3 className={styles.pillarTitle}>
                  {p.title}{" "}
                  <span className={styles.pillarTitleItalic}>
                    {p.titleItalic}
                  </span>
                </h3>
                <p className={styles.pillarText}>{p.desc}</p>
              </div>

              <div className={styles.pillarFooter}>
                <span>{p.cta}</span>
                <svg className={styles.pillarFooterSvg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
