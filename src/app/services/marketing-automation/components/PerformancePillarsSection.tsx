"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PerformancePillarsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade in and slide up each pillar row contents when scrolled into view
    const rows = gsap.utils.toArray<HTMLElement>(".pillar-row-container");

    rows.forEach((row) => {
      const img = row.querySelector(".pillar-img-anim");
      const text = row.querySelector(".pillar-text-anim");

      if (img) {
        gsap.from(img, {
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      }

      if (text) {
        gsap.from(text, {
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 1.2,
          delay: 0.15,
          ease: "power3.out"
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section className={styles.pillarsSection} ref={containerRef}>
      <div className={styles.pillarsInner}>
        <h2 className={styles.pillarsTitle}>CORE PERFORMANCE PILLARS</h2>

        {/* Row 1: Image 1 (Left), Text (Right) */}
        <div className={`${styles.pillarRow} pillar-row-container`}>
          <div className={`${styles.pillarImageWrapper} pillar-img-anim`}>
            <Image
              src="/marketing-automations-page/1.webp"
              alt="Personalization and lead segmentation dashboard mockup"
              fill
              className={styles.pillarImage}
            />
          </div>
          <div className={`${styles.pillarContent} pillar-text-anim`}>
            <h3 className={styles.pillarHeading}>
              INTELLIGENT LEAD <span className={styles.pillarHeadingItalic}>Nurturing</span>
            </h3>
            <p className={styles.pillarText}>
              We design multi-stage, behavior-triggered workflows that deliver personalized content at the exact moment of intent, accelerating the transition from lead to loyal customer.
            </p>
          </div>
        </div>

        {/* Row 2: Image 2 (Left), Text (Right) */}
        <div className={`${styles.pillarRow} pillar-row-container`}>
          <div className={`${styles.pillarImageWrapper} pillar-img-anim`}>
            <Image
              src="/marketing-automations-page/2.webp"
              alt="Omni-channel synchronization diagram"
              fill
              className={styles.pillarImage}
            />
          </div>
          <div className={`${styles.pillarContent} pillar-text-anim`}>
            <h3 className={styles.pillarHeading}>
              <span className={styles.pillarHeadingItalic}>Omnichannel</span> SYNCHRONIZATION
            </h3>
            <p className={styles.pillarText}>
              Architecting a unified communication layer across email, SMS and web to ensure a seamless and consistent brand narrative throughout the entire user journey.
            </p>
          </div>
        </div>

        {/* Row 3: Image 3 (Left), Text (Right) */}
        <div className={`${styles.pillarRow} pillar-row-container`}>
          <div className={`${styles.pillarImageWrapper} pillar-img-anim`}>
            <Image
              src="/marketing-automations-page/3.webp"
              alt="CRM and data integration visual representation"
              fill
              className={styles.pillarImage}
            />
          </div>
          <div className={`${styles.pillarContent} pillar-text-anim`}>
            <h3 className={styles.pillarHeading}>
              CRM & DATA <span className={styles.pillarHeadingItalic}>Integration</span>
            </h3>
            <p className={styles.pillarText}>
              Engineering seamless data pipelines between your
              digital platforms and CRM, providing a 360-degree
              view of consumer behavior and actionable business
              intelligence.
            </p>
          </div>
        </div>

        {/* Row 4: Image 4 (Left), Text (Right) */}
        <div className={`${styles.pillarRow} pillar-row-container`}>
          <div className={`${styles.pillarImageWrapper} pillar-img-anim`}>
            <Image
              src="/marketing-automations-page/4.webp"
              alt="Predictive audience segmentation analytics chart"
              fill
              className={styles.pillarImage}
            />
          </div>
          <div className={`${styles.pillarContent} pillar-text-anim`}>
            <h3 className={styles.pillarHeading}>
              <span className={styles.pillarHeadingItalic}>Predictive</span> AUDIENCE SEGMENTATION
            </h3>
            <p className={styles.pillarText}>
              Utilizing data driven triggers to automatically categorize users based on their engagement levels, ensuring high relevance messaging and maximum conversion efficiency.
            </p>
          </div>
        </div>

        {/* Row 5: Image 5 (Left), Text (Right) */}
        <div className={`${styles.pillarRow} pillar-row-container`}>
          <div className={`${styles.pillarImageWrapper} pillar-img-anim`}>
            <Image
              src="/marketing-automations-page/5.webp"
              alt="Automated lifecycle customer onboarding journey dashboard"
              fill
              className={styles.pillarImage}
            />
          </div>
          <div className={`${styles.pillarContent} pillar-text-anim`}>
            <h3 className={styles.pillarHeading}>
              AUTOMATED LIFECYCLE <span className={styles.pillarHeadingItalic}>Management</span>
            </h3>
            <p className={styles.pillarText}>
              From onboarding to re-engagement, we build persistent automation frameworks that maximize customer lifetime value (CLV) and reduce operational overhead.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
