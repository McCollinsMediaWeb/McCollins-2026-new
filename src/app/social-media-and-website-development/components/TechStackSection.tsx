"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TECH_ROW_1 = [
  {
    category: "ECOMMERCE ENGINE",
    version: "v2024",
    name: "SHOPIFY PLUS",
    desc: "Omnichannel regional commerce, multi-currency AED/SAR checkout, customized checkout extensions.",
    metricLabel: "Conversion Uplift",
    metricValue: "+34.8% AVG",
  },
  {
    category: "ENTERPRISE DXP",
    version: "COMPOSABLE",
    name: "SITECORE",
    desc: "Complex multi-region digital experience platforms, hyper-personalization, and sovereign data isolation.",
    metricLabel: "Sovereign Compliance",
    metricValue: "100% REGIONAL",
  },
  {
    category: "ENTERPRISE CMS",
    version: "HEADLESS WP",
    name: "WORDPRESS VIP",
    desc: "Hardened, decoupling-ready content operations tailored for editorial teams with custom REST & GraphQL endpoints.",
    metricLabel: "Editorial Speed",
    metricValue: "ZERO-DEV EDIT",
  },
  {
    category: "FRONTEND CORE",
    version: "APP ROUTER",
    name: "NEXT.JS & REACT",
    desc: "Server Components, Edge SSR, incremental static regeneration, and millisecond routing across the Middle East.",
    metricLabel: "PageSpeed Index",
    metricValue: "98/100 BENCHMARK",
  },
];

const TECH_ROW_2 = [
  {
    category: "ENTERPRISE CMS",
    version: "PROGRESS",
    name: "SITEFINITY",
    desc: "Multi-site governance, role-based workflows, and enterprise intranet deployments for institutional clients.",
    metricLabel: "Governance",
    metricValue: "ROLE RBAC ISO",
  },
  {
    category: "DESIGN TO CODE",
    version: "UTILITY ENGINE",
    name: "TAILWIND CSS",
    desc: "Ultra-compact CSS bundles, custom design tokens, dark mode parity, and zero runtime performance overhead.",
    metricLabel: "Bundle Overhead",
    metricValue: "< 14KB GZIPPED",
  },
  {
    category: "DATA LAYER",
    version: "HEADLESS",
    name: "GRAPHQL API",
    desc: "Unified content federation aggregating CRM, ERP, and headless catalogs with zero payload waste.",
    metricLabel: "Network Roundtrips",
    metricValue: "SINGLE CALL",
  },
  {
    category: "CLOUD EDGE",
    version: "REGIONAL CDN",
    name: "AWS & CLOUDFLARE",
    desc: "Edge nodes in Dubai, Abu Dhabi, Riyadh, and Jeddah delivering content with < 20ms latency.",
    metricLabel: "GCC Edge Latency",
    metricValue: "< 18MS DIRECT",
  },
];

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftTween = useRef<gsap.core.Tween | null>(null);
  const rightTween = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      // Entrance reveal
      gsap.from(".tech-header-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".tech-row-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Continuous Horizontal Auto-Scroll Left
      leftTween.current = gsap.to(".tech-track-left", {
        xPercent: -50,
        ease: "none",
        duration: 35,
        repeat: -1,
      });

      // Continuous Horizontal Auto-Scroll Right
      rightTween.current = gsap.fromTo(
        ".tech-track-right",
        { xPercent: -50 },
        {
          xPercent: 0,
          ease: "none",
          duration: 35,
          repeat: -1,
        }
      );
    },
    { scope: sectionRef }
  );

  const handleMouseEnter = () => {
    leftTween.current?.pause();
    rightTween.current?.pause();
  };

  const handleMouseLeave = () => {
    leftTween.current?.play();
    rightTween.current?.play();
  };

  const renderCard = (item: (typeof TECH_ROW_1)[number], key: string) => (
    <div key={key} className={styles.techCard}>
      <div className={styles.techCardTop}>
        <div className={styles.techCardHeader}>
          <span className={styles.techCategory}>{item.category}</span>
          <span className={styles.techVersionTag}>{item.version}</span>
        </div>
        <h3 className={styles.techName}>{item.name}</h3>
        <p className={styles.techDesc}>{item.desc}</p>
      </div>

      <div className={styles.techMetricBand}>
        <span className={styles.techMetricLabel}>{item.metricLabel}</span>
        <span className={styles.techMetricValue}>{item.metricValue}</span>
      </div>
    </div>
  );

  return (
    <section className={styles.techSection} ref={sectionRef}>
      <div className={styles.techContainer}>
        {/* Header Band */}
        <div className={styles.techHeaderBand}>
          <div>
            <span className={`${styles.sectionKicker} tech-header-anim`}>ENTERPRISE STACK</span>
            <h2 className={`${styles.sectionTitle} tech-header-anim`} style={{ marginTop: "8px" }}>
              TECHNOLOGIES WE{" "}
              <span className={styles.serifItalic} style={{ color: "#93a8ff", textTransform: "lowercase" }}>
                work with.
              </span>
            </h2>
          </div>
          <p className={`${styles.sectionDescription} tech-header-anim`} style={{ maxWidth: "420px" }}>
            Selected for extreme speed, developer velocity, airtight regional compliance, and long-term maintainability without vendor lock-in.
          </p>
        </div>
      </div>

      {/* Auto-scrolling Left & Right Dual Tracks */}
      <div
        className={styles.techRowsContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Row 1: Auto scroll Left */}
        <div className={`${styles.techRow} tech-row-anim`}>
          <div className={`${styles.techTrack} tech-track-left`}>
            <div className={styles.techList}>
              {TECH_ROW_1.map((item, i) => renderCard(item, `row1-orig-${i}`))}
            </div>
            <div className={styles.techList} aria-hidden="true">
              {TECH_ROW_1.map((item, i) => renderCard(item, `row1-dup-${i}`))}
            </div>
          </div>
        </div>

        {/* Row 2: Auto scroll Right */}
        <div className={`${styles.techRow} tech-row-anim`}>
          <div className={`${styles.techTrack} tech-track-right`}>
            <div className={styles.techList}>
              {TECH_ROW_2.map((item, i) => renderCard(item, `row2-orig-${i}`))}
            </div>
            <div className={styles.techList} aria-hidden="true">
              {TECH_ROW_2.map((item, i) => renderCard(item, `row2-dup-${i}`))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
