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
        
        {/* Row 1: Wide Image (Left), Text (Right) */}
        <div className={`${styles.pillarRow} pillar-row-container`}>
          <div className={`${styles.pillarImageWrapper} ${styles.wideRatio} pillar-img-anim`}>
            <Image 
              src="/marketing-automations-page/3daf20cee2d0f7d88375096deec38929914b0445.jpg" 
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
              Turn leads into customers with personalized, automated email sequences that trigger based on user behavior and actions.
            </p>
          </div>
        </div>

        {/* Row 2: Text (Left), Narrow Image (Right) */}
        <div className={`${styles.pillarRow} ${styles.reversed} pillar-row-container`}>
          <div className={`${styles.pillarContent} pillar-text-anim`}>
            <h3 className={styles.pillarHeading}>
              <span className={styles.pillarHeadingItalic}>Omni-Channel</span> SYNCHRONIZATION
            </h3>
            <p className={styles.pillarText}>
              Connect your email, SMS, and social media channels to deliver a consistent message across all customer touchpoints.
            </p>
          </div>
          <div className={`${styles.pillarImageWrapper} ${styles.narrowRatio} pillar-img-anim`}>
            <Image 
              src="/marketing-automations-page/6a1429b34e99099b00547cf8035864ed49c31a7a.jpg" 
              alt="Drag and drop email campaign template design interface"
              fill
              className={styles.pillarImage}
            />
          </div>
        </div>

        {/* Row 3: Wide Image (Left), Text (Right) */}
        <div className={`${styles.pillarRow} pillar-row-container`}>
          <div className={`${styles.pillarImageWrapper} ${styles.wideRatio} pillar-img-anim`}>
            <Image 
              src="/marketing-automations-page/c5370e40fe6ce21b4e8703196922c83282c35b04.jpg" 
              alt="Connected integrations network diagram showing Salesforce, HubSpot, Mailchimp, and Slack"
              fill
              className={styles.pillarImage}
            />
          </div>
          <div className={`${styles.pillarContent} pillar-text-anim`}>
            <h3 className={styles.pillarHeading}>
              CRM & DATA INTEGRATION
            </h3>
            <p className={styles.pillarText}>
              Sync your marketing automation platform with your CRM to ensure your sales team has the data they need to close deals.
            </p>
          </div>
        </div>

        {/* Row 4: Text (Left), Narrow Image (Right) */}
        <div className={`${styles.pillarRow} ${styles.reversed} pillar-row-container`}>
          <div className={`${styles.pillarContent} pillar-text-anim`}>
            <h3 className={styles.pillarHeading}>
              <span className={styles.pillarHeadingItalic}>Predictive</span> AUDIENCE SEGMENTATION
            </h3>
            <p className={styles.pillarText}>
              Segment your audience based on behavior, demographics, and interests to deliver highly relevant messages.
            </p>
          </div>
          <div className={`${styles.pillarImageWrapper} ${styles.narrowRatio} pillar-img-anim`}>
            <Image 
              src="/marketing-automations-page/6b07da2e6c35e6bf5d48e5046709ca3bc56ddeed.jpg" 
              alt="Customer Data Platform (CDP) lead scoring dashboard panel"
              fill
              className={styles.pillarImage}
            />
          </div>
        </div>

        {/* Row 5: Wide Image (Left), Text (Right) */}
        <div className={`${styles.pillarRow} pillar-row-container`}>
          <div className={`${styles.pillarImageWrapper} ${styles.wideRatio} pillar-img-anim`}>
            <Image 
              src="/marketing-automations-page/2222b3097fe891a75513694864ca093849a19fb5.jpg" 
              alt="Customer journey map funnel diagram displaying steps from Awareness to Advocacy"
              fill
              className={styles.pillarImage}
            />
          </div>
          <div className={`${styles.pillarContent} pillar-text-anim`}>
            <h3 className={styles.pillarHeading}>
              AUTOMATED LIFECYCLE <span className={styles.pillarHeadingItalic}>Management</span>
            </h3>
            <p className={styles.pillarText}>
              Nurture customer relationships throughout the entire lifecycle, from onboarding to retention and advocacy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
