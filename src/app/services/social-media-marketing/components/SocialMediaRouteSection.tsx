"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SocialMediaRouteSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Left title animation
    gsap.from("." + styles.routeTitle, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Arrow animation
    gsap.from("." + styles.routeArrow, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      scaleX: 0,
      transformOrigin: "left center",
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out"
    });

    // List items stagger
    gsap.from("." + styles.routeListItem, {
      scrollTrigger: {
        trigger: "." + styles.routeList,
        start: "top 80%",
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.routeSection} ref={containerRef}>
      <div className={styles.routeLeft}>
        <h2 className={styles.routeTitle}>
          <span className={styles.routeTitleItalic}>Social Media</span><br/>
          <span className={styles.routeTitleStrong}>ROUTE</span>
        </h2>
        <div className={styles.routeArrow}>
          <div className={styles.arrowLine}></div>
          <div className={styles.arrowHead}></div>
        </div>
      </div>
      
      <div className={styles.routeRight}>
        <ul className={styles.routeList}>
          <li className={styles.routeListItem}>
            <span className={styles.bullet}>•</span>
            <p className={styles.routeText}>
              <span className={styles.routeTextItalic}>Content Management</span> <span className={styles.routeTextRegular}>in AR/EN</span>
            </p>
          </li>
          <li className={styles.routeListItem}>
            <span className={styles.bullet}>•</span>
            <p className={styles.routeText}>
              <span className={styles.routeTextItalic}>Comment</span> <span className={styles.routeTextStrong}>MODERATION</span>
            </p>
          </li>
          <li className={styles.routeListItem}>
            <span className={styles.bullet}>•</span>
            <p className={styles.routeText}>
              <span className={styles.routeTextItalic}>Digital</span> <span className={styles.routeTextStrong}>Ads</span>
            </p>
          </li>
          <li className={styles.routeListItem}>
            <span className={styles.bullet}>•</span>
            <p className={styles.routeText}>
              <span className={styles.routeTextItalic}>Buzz Generation</span> <span className={styles.routeTextRegular}>- RAMADAN, UAE NATIONAL DAY, MENU LAUNCH, COMPETITIONS</span>
            </p>
          </li>
          <li className={styles.routeListItem}>
            <span className={styles.bullet}>•</span>
            <p className={styles.routeText}>
              <span className={styles.routeTextItalic}>Blogger</span> <span className={styles.routeTextStrong}>OUTREACH PROGRAM</span>
            </p>
          </li>
          <li className={styles.routeListItem}>
            <span className={styles.bullet}>•</span>
            <p className={styles.routeText}>
              <span className={styles.routeTextItalic}>Social Media</span> <span className={styles.routeTextStrong}>MONITORING AND ANALYSIS</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
