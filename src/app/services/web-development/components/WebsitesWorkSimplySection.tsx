"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WebsitesWorkSimplySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".work-title-anim", {
      scrollTrigger: {
        trigger: ".work-title-anim",
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".work-card-anim", {
      scrollTrigger: {
        trigger: ".work-gallery-anim",
        start: "top 75%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.workSimplySection} ref={containerRef}>
      <div className={styles.workSimplyHeader}>
        <div className={styles.workHeaderContent}>
          <h2 className={`${styles.workSimplyTitle} work-title-anim`}>
            <span className={styles.titleItalic}>Websites</span><br/>
            <span className={styles.workSimplyTitleStrong}>THAT WORK<br/>SIMPLY.</span>
          </h2>
          
          <div className={`${styles.workNavigation} work-title-anim`}>
            <div className={styles.pageIndicator}>01 / 05</div>
            <div className={styles.navArrows}>
              <button className={styles.navArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="black" strokeWidth="1" strokeLinecap="square"/>
                </svg>
              </button>
              <button className={styles.navArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="1" strokeLinecap="square"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`${styles.workSimplyGallery} work-gallery-anim`}>
        <div className={`${styles.workCard} ${styles.workCardBlack} work-card-anim`}>
          <h3 className={styles.workCardTitle}>
            CORPORATE WEBSITE<br/>
            <span className={styles.titleItalic}>Development</span>
          </h3>
          <div className={styles.workCardTextContainer}>
            <p className={styles.workCardText}>
              We engineer tailored corporate websites that elevate your brand identity through seamless user experiences and precision digital design.
            </p>
          </div>
        </div>
        
        <div className={`${styles.workCard} ${styles.workCardGrey} work-card-anim`}>
          <h3 className={styles.workCardTitle}>
            E-COMMERCE<br/>
            <span className={styles.titleItalic}>Development</span>
          </h3>
          <div className={styles.workCardTextContainer}>
            <p className={styles.workCardText}>
              Robust and scalable e-commerce solutions built to maximize conversions and drive sustained online revenue growth.
            </p>
          </div>
        </div>

        <div className={`${styles.workCard} ${styles.workCardBlack} work-card-anim`}>
          <h3 className={styles.workCardTitle}>
            WEB PORTAL<br/>
            <span className={styles.titleItalic}>Development</span>
          </h3>
          <div className={styles.workCardTextContainer}>
            <p className={styles.workCardText}>
              Custom secure portals that streamline operations and enhance engagement for your partners, employees, and clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
