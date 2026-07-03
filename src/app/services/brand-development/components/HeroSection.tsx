"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title animation
    gsap.from(".hero-title-word", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2
    });

    // Content fade up
    gsap.from(".hero-content-reveal", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.6
    });

    // Image parallax
    gsap.to(".hero-image", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <section className={styles.heroSection} ref={containerRef}>
      
      <div className={styles.heroHeader}>
        <h1 className={styles.heroTitle}>
          <div style={{ overflow: "hidden", display: "inline-block", marginRight: "2vw", padding: "0 0.2em", flexShrink: 0 }}>
            <span className={`${styles.playfairText} hero-title-word`} style={{ display: "inline-block" }}>Brand</span>
          </div>
          <div style={{ overflow: "hidden", display: "inline-block", padding: "0 0.1em", flexShrink: 0 }}>
            <span className={`${styles.heroTitleStrong} hero-title-word`} style={{ display: "inline-block" }}>DEVELOPMENT</span>
          </div>
        </h1>
        <div className={styles.heroSubtitleContainer}>
          <div className={`${styles.heroSubtitle} hero-content-reveal`}>
            Crafting cohesive brand identities that resonate across<br/>cultures and command a global presence.
          </div>
        </div>
      </div>

      <div className={styles.heroContent}>
        <div className={`${styles.heroImageWrapper} hero-content-reveal`}>
          <Image 
            src="/brand-development/Mask-group.jpg" 
            alt="Brand Strategy Chess" 
            fill
            className={`${styles.heroImage} hero-image`}
            priority
          />
        </div>
        
        <div className={`${styles.heroRightContent} hero-content-reveal`}>
          <div className={styles.contactHeader}>
            <h2 className={styles.contactTitle}>CONTACT US TO GET<br/>STARTED</h2>
            <button className={styles.letsTalkBtn}>
              <span className={styles.blueDot}></span> LET&apos;S TALK
            </button>
          </div>
          
          <div className={styles.includesSection}>
            <h3 className={styles.includesTitle}>Includes:</h3>
            <div className={styles.tagsContainer}>
              <span className={styles.tag}>BRAND STRATEGY & IDENTITY</span>
              <span className={styles.tag}>SOCIAL MEDIA</span>
              <span className={styles.tag}>PERFORMANCE MARKETING</span>
              <span className={styles.tag}>HOSPITALITY / RESTAURENT</span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
