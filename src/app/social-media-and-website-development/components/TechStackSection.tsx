"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TECH_ITEMS = [
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

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".tech-header-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }).from(
        ".tech-card-anim",
        {
          y: 35,
          opacity: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
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

        {/* 8 Tech Cards */}
        <div className={styles.techGrid}>
          {TECH_ITEMS.map((item) => (
            <div key={item.name} className={`${styles.techCard} tech-card-anim`}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
