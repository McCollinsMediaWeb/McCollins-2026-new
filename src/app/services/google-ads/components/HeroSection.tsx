"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title reveal
    gsap.from(".hero-title-word", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.2
    });

    // Subtitle fade in
    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.8,
      ease: "power2.out"
    });

    // Image gentle slide up
    gsap.from(".hero-img-container", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out"
    });

    // Right content elements slide and fade in
    gsap.from(".hero-right-anim", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.9,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.heroSection} ref={containerRef}>
      <div className={styles.myGrid}>
        <div>
          <div className={styles.heroHeader}>
            <h1 className={styles.heroTitle}>
              <div style={{ overflow: "", display: "inline-block", marginRight: "0.25em", flexShrink: 0 }}>
                <span className={`${styles.heroTitlePlayfair} hero-title-word`} style={{ display: "inline-block" }}>Google</span>
              </div>
              <div style={{ overflow: "", display: "inline-block", flexShrink: 0 }}>
                <span className={`${styles.heroTitleStrong} hero-title-word`} style={{ display: "inline-block" }}>ADS</span>
              </div>
            </h1>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p className={`${styles.heroSubtitle} hero-subtitle`}>
            McCollins Media manages high-performance Google Ads campaigns in Dubai and across global markets, helping brands capture search intent, generate qualified leads, increase website traffic and drive measurable conversions.
          </p>
        </div>
      </div>
      {/* <div className={styles.heroHeader}>
        <h1 className={styles.heroTitle}>
          <div style={{ overflow: "", display: "inline-block", marginRight: "0.25em", flexShrink: 0 }}>
            <span className={`${styles.heroTitlePlayfair} hero-title-word`} style={{ display: "inline-block" }}>Google</span>
          </div>
          <div style={{ overflow: "", display: "inline-block", flexShrink: 0 }}>
            <span className={`${styles.heroTitleStrong} hero-title-word`} style={{ display: "inline-block" }}>ADS</span>
          </div>
        </h1>
      </div> */}
      {/* 
      <div className={styles.heroSubtitleContainer}>
        <p className={`${styles.heroSubtitle} hero-subtitle`}>
          McCollins Media manages high-performance Google Ads campaigns in Dubai and across global markets, helping brands capture search intent, generate qualified leads, increase website traffic and drive measurable conversions.
        </p>
      </div> */}

      <div className={styles.heroContent}>
        <div className={`${styles.heroImageWrapper} hero-img-container`}>
          <Image
            src="/google-ads-page/main-banner.webp"
            alt="Camera operator filming outdoors at sunset"
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.heroRightContent}>
          <div className={`${styles.contactContainer} hero-right-anim`}>
            <div className={styles.contactRow}>CONTACT US TO GET</div>
            <div className={styles.contactBtnRow}>
              <span>STARTED</span>
              <Link href="/contact" className="cta-button">
                <span className="dot-indicator"></span>
                <span className="cta-text">
                  <span className="cta-text-inner" data-text="LET'S TALK">LET'S TALK</span>
                </span>
              </Link>
            </div>
          </div>

          <div className={`${styles.projectsContainer} hero-right-anim`}>
            <h3 className={styles.projectsTitle}>Includes:</h3>
            <div className={styles.tagsList}>
              <span className={styles.projectTag}>GOOGLE SEARCH ADS</span>
              <span className={styles.projectTag}>PERFORMANCE MAX</span>
              <span className={styles.projectTag}>YOUTUBE ADS</span>
              <span className={styles.projectTag}>DEMAND GEN CAMPAIGNS</span>

              <span className={styles.projectTag}>DISPLAY & REMARKETING</span>
              <span className={styles.projectTag}>SHOPPING ADS</span>
              <span className={styles.projectTag}>LEAD GENERATION</span>
              <span className={styles.projectTag}>CONVERSION TRACKING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
