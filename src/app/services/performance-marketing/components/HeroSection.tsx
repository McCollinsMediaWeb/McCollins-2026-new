"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title reveal
    gsap.from(".hero-title-word", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
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

    // Right content stagger
    gsap.from(".hero-right-item", {
      x: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      delay: 1,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.heroSection} ref={containerRef}>
      <div className={styles.heroHeader}>
        <h1 className={styles.heroTitle}>
          <div style={{ overflow: "hidden", display: "inline-block", marginRight: "2vw", padding: "0.2em", flexShrink: 0 }}>
            <span className={`${styles.heroTitleStrong} hero-title-word`} style={{ display: "inline-block" }}>PERFORMANCE</span>
          </div>
          <div style={{ overflow: "hidden", display: "inline-block", padding: "0.2em", flexShrink: 0 }}>
            <span className={`${styles.playfairText} hero-title-word`} style={{ display: "inline-block", fontStyle: "italic" }}>Marketing</span>
          </div>
        </h1>
        <div className={styles.heroSubtitleContainer}>
          <p className={`${styles.heroSubtitle} hero-subtitle`}>
            Data-led paid media campaigns designed to generate qualified leads, drive conversions and scale business growth across Meta, Google, TikTok, Snapchat, Baidu, Yandex and other high-intent digital platforms.
          </p>
        </div>
      </div>

      <div className={styles.heroContent}>
        <div className={`${styles.heroImageWrapper} hero-img-container`}>
          <Image
            src="/performance-marketing-page/main-banner.webp"
            alt="Hand holding modern smartphone with app design"
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={`${styles.heroRightContent} hero-right-item`}>
          <div className={styles.contactHeader}>
            <h2 className={styles.contactTitle}>CONTACT US TO GET<br />STARTED</h2>
            <button className={styles.letsTalkBtn}>
              <span className={styles.blueDot}></span> LET&apos;S TALK
            </button>
          </div>

          <div className={styles.includesSection}>
            <h3 className={styles.includesTitle}>Includes:</h3>
            <div className={styles.tagsContainer}>
              <span className={styles.tag}>META ADS</span>
              <span className={styles.tag}>SOCIAL MEDIA</span>
              <span className={styles.tag}>TIKTOK ADS</span>
              <span className={styles.tag}>SNAPCHAT ADS</span>
              <span className={styles.tag}>BAIDU ADS</span>
              <span className={styles.tag}>LEAD GENERATION</span>
              <span className={styles.tag}>CONVERSION CAMPAIGNS</span>
              <span className={styles.tag}>YANDEX ADS</span>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
