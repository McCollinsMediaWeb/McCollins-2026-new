"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CAPABILITIES = [
  {
    index: "01 // ARCHITECTURE",
    title: "CUSTOM WEB DEV",
    desc: "Tailored web solutions engineered to stand out, elevate brand value, and integrate seamlessly with enterprise backend ecosystems and multi-cloud databases.",
    action: "TECH SPEC",
  },
  {
    index: "02 // PERFORMANCE",
    title: "TECHNOLOGY FIRST",
    desc: "Modern Jamstack, headless architectures, React, Next.js, and customizable modern website features built for instant edge-delivery and zero perceptual lag.",
    action: "FRAMEWORKS",
  },
  {
    index: "03 // COMMERCE",
    title: "E-COMMERCE DEVELOPMENT",
    desc: "High-converting, frictionless Shopify Plus and headless commerce architectures built to maximize checkout completion, average order value, and lifetime retention.",
    action: "COMMERCE LAB",
  },
  {
    index: "04 // ENTERPRISE",
    title: "CORPORATE WEBSITES",
    desc: "Digital flagships engineered for conglomerates, sovereign holdings, government entities, and luxury brands that command institutional authority and global credibility.",
    action: "VIEW STANDARDS",
  },
  {
    index: "05 // GROWTH",
    title: "LEAD GENERATION FUNNELS",
    desc: "High-intent conversion funnels, landing page matrices, and interactive calculators designed to turn high-value paid media into qualified enterprise pipeline.",
    action: "CONVERSION PROTOCOL",
  },
  {
    index: "06 // RELIABILITY",
    title: "ANNUAL MAINTENANCE & SLA",
    desc: "24/7 proactive security patching, performance monitoring, cloud hosting orchestration (AWS / Azure), and continuous feature sprints directly from Dubai.",
    action: "SLA DETAILS",
  },
  {
    index: "07 // VISIBILITY",
    title: "TECHNICAL SEO & SPEED",
    desc: "Core Web Vitals excellence, deep structured JSON-LD schemas, crawl budget optimization, and bilingual English-Arabic search engine index dominance.",
    action: "SPEED AUDIT",
  },
  {
    index: "08 // SECURITY",
    title: "SAFE, COMPLIANT & SECURE",
    desc: "Bank-grade SSL, GDPR / UAE Federal Data Protection Law compliance, ISO security audits, WAF protection, and zero-trust GitOps deployment pipelines.",
    action: "SECURITY BRIEFS",
  },
];

const SCOPE_PILLS = [
  "NEXT.JS / REACT",
  "SHOPIFY PLUS",
  "HEADLESS CMS",
  "TAILORED UI/UX",
  "MOBILE-FIRST PWA",
  "ENTERPRISE SECURITY",
];

export default function WhatsIncludedSection() {
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

      tl.from(".cap-editorial-anim", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      }).from(
        ".bento-cell-anim",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.5"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.capabilitiesSection} ref={sectionRef}>
      <div className={styles.capabilitiesContainer}>
        <div className={styles.capabilitiesGrid}>
          {/* Left Editorial Column */}
          <div className={styles.capabilitiesEditorial}>
            <div className={styles.capabilitiesHeader}>
              <div className={`${styles.sectionKicker} cap-editorial-anim`}>WHAT&apos;S INCLUDED</div>
              <h2 className={`${styles.sectionTitle} cap-editorial-anim`}>
                EVERYTHING AN ENTERPRISE NEEDS
                <span className={styles.sectionTitleItalic}>
                  to launch, perform and scale.
                </span>
              </h2>
              <p className={`${styles.sectionDescription} cap-editorial-anim`}>
                We eliminate fragile templates and slow legacy builds. Every web build operates as an engineered digital flagship, combining human-centric UI/UX design with scalable, high-velocity frontend and cloud infrastructure.
              </p>
            </div>

            {/* Tech Ecosystem Coverage Pills */}
            <div className={`${styles.scopeWrapper} cap-editorial-anim`}>
              <div className={styles.scopeLabel}>ENGINEERING SCOPE</div>
              <div className={styles.scopePills}>
                {SCOPE_PILLS.map((pill) => (
                  <span key={pill} className={styles.scopePill}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right 2x4 Bento Grid Matrix */}
          <div className={styles.bentoGrid}>
            {CAPABILITIES.map((cap) => (
              <div key={cap.index} className={`${styles.bentoCell} bento-cell-anim`}>
                <div className={styles.bentoCellContent}>
                  <span className={styles.bentoIndex}>{cap.index}</span>
                  <h3 className={styles.bentoTitle}>{cap.title}</h3>
                  <p className={styles.bentoDesc}>{cap.desc}</p>
                </div>
                <div className={styles.bentoFooter}>
                  <span>{cap.action}</span>
                  <svg className={styles.bentoArrowSvg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
