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

export default function TrustedBrandsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".trusted-title-anim", {
      scrollTrigger: {
        trigger: ".trusted-title-anim",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".trusted-card-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.trustedBrandsSection} ref={containerRef}>
      {/* <h2 className={`${styles.trustedTitle} trusted-title-anim`}>
        GOOGLE ADS MANAGEMENT:<br />
        DRIVE MORE <span>Conversions</span>
      </h2> */}

      <div className={styles.cardsSectionHeader}>
        <div>OUR SERVICES</div>
        <div>info@mccollinsmedia.com</div>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={`${styles.card} ${styles.cardBlack} brand-card`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleItalic}>Campaign</span> Planning
          </h3>
          <p className={styles.cardText}>
            Defining the campaign goals, target audience, and budget.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardGradient} brand-card`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleItalic}>Keyword</span> RESEARCH
          </h3>
          <p className={styles.cardText}>
            Identifying the keywords that people use to search for the products or services being advertised.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardWhite} brand-card`}>
          <h3 className={styles.cardTitle}>
            CAMPAIGN <span className={styles.titleItalic}>Setup</span>
          </h3>
          <p className={styles.cardText}>
            Setting up the campaign structure, ad groups and targeting options.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardGradient} brand-card`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleItalic}>Ad</span> CREATION
          </h3>
          <p className={styles.cardText}>
            Creating compelling and relevant ads that resonate with the target audience.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardBlack} brand-card`}>
          <h3 className={styles.cardTitle}>
            BID <span className={styles.titleItalic}>Management</span>
          </h3>
          <p className={styles.cardText}>
            Setting the right bid amounts for each ad and keyword to optimize campaign performance.
          </p>
        </div>
      </div>
    </section>
  );
}
