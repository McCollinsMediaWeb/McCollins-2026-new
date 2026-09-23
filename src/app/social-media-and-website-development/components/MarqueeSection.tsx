"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".marquee-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.marqueeSection} ref={sectionRef}>
      <div className={styles.marqueeContainer}>
        <p className={`${styles.marqueeTitle} marquee-anim`}>
          TRUSTED BY ENTERPRISE BRANDS ACROSS MENA
        </p>
        <div className={styles.marqueeTrackWrapper}>
          <div className={styles.marqueeTrack}>
            <span className={`${styles.brandLogoText} marquee-anim`}>FUJIFILM</span>
            <span className={`${styles.brandLogoText} ${styles.brandLogoToshiba} marquee-anim`}>TOSHIBA</span>
            <span className={`${styles.brandLogoText} ${styles.brandLogoPioneer} marquee-anim`}>PIONEER</span>
            <span className={`${styles.brandLogoText} ${styles.brandLogoVoss} marquee-anim`}>VOSS</span>
            <span className={`${styles.brandLogoText} ${styles.brandLogoMapei} marquee-anim`}>MAPEI</span>
            <span className={`${styles.brandLogoText} ${styles.brandLogoWagamama} marquee-anim`}>wagamama</span>
            <span className={`${styles.brandLogoText} ${styles.brandLogoMac} marquee-anim`}>M·A·C</span>
          </div>
        </div>
      </div>
    </section>
  );
}
