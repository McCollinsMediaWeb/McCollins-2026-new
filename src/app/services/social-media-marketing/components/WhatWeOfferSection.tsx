"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function WhatWeOfferSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title animation
    gsap.from("." + styles.whatWeOfferTitle, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Subheader animation
    gsap.from("." + styles.whatWeOfferSubheader, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    // Cards animation
    gsap.from("." + styles.offerCard, {
      scrollTrigger: {
        trigger: "." + styles.offerCardsContainer,
        start: "top 75%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.whatWeOfferSection} ref={containerRef}>
      <div className={styles.whatWeOfferHeader}>
        <h2 className={styles.whatWeOfferTitle}>
          <span className={styles.whatWeOfferTitleStrong}>WHAT WE</span> <span className={styles.whatWeOfferTitleItalic}>Offer</span>
        </h2>
        <div className={styles.whatWeOfferSubheader}>
          <span className={styles.whatWeOfferLabel}>OUR SERVICES</span>
          <a href="mailto:info@mccollinsmedia.com" className={styles.whatWeOfferEmail}>info@mccollinsmedia.com</a>
        </div>
      </div>
      
      <div className={styles.offerCardsContainer}>
        {/* Card 1: Black Strategy */}
        <div className={`${styles.offerCard} ${styles.offerCardBlack}`}>
          <h3 className={styles.offerCardTitle}>
            <span className={styles.offerCardTitleStrong}>STRATEGY</span><br/>
            <span className={styles.offerCardTitleItalic}>Planning</span>
          </h3>
        </div>
        
        {/* Card 2: Blue Social Media */}
        <div className={`${styles.offerCard} ${styles.offerCardBlue} ${styles.offerCardPattern}`}>
          <h3 className={styles.offerCardTitle}>
            <span className={styles.offerCardTitleStrong}>SOCIAL MEDIA</span><br/>
            <span className={styles.offerCardTitleItalic}>Management</span>
          </h3>
        </div>
        
        {/* Card 3: Light Grey with Star */}
        <div className={`${styles.offerCard} ${styles.offerCardLightGrey} ${styles.offerCardCenter}`}>
          <svg width="100" height="100" viewBox="0 0 24 24" fill="#4b4f58" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        
        {/* Card 4: Solid Grey */}
        <div className={`${styles.offerCard} ${styles.offerCardMidGrey}`}>
        </div>
        
        {/* Card 5: Black Community Management */}
        <div className={`${styles.offerCard} ${styles.offerCardBlack}`}>
          <h3 className={styles.offerCardTitle}>
            <span className={styles.offerCardTitleStrong}>COMMUNITY</span><br/>
            <span className={styles.offerCardTitleItalic}>Management</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
