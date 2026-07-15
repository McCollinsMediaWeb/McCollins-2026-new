"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import Image from "next/image";
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
        {/* <div className={styles.whatWeOfferSubheader}>
          <span className={styles.whatWeOfferLabel}>OUR SERVICES</span>
          <a href="mailto:info@mccollinsmedia.com" className={styles.whatWeOfferEmail}>info@mccollinsmedia.com</a>
        </div> */}
      </div>

      <div className={styles.offerCardsContainer}>
        {/* Card 1: Black Strategy with background image */}
        <div className={`${styles.offerCard} ${styles.cardBlack} ${styles.strategyCard}`}>
          <Image
            src="/social-media-marketing/1.png"
            alt="Strategy Planning"
            fill
            className={styles.cardImageBg}
          />
          <h3 className={styles.cardTitle}>
            <span className={styles.titleStrong}>STRATEGY</span>{" "}
            <span className={styles.titleItalic}>Planning</span>
          </h3>
          <p className={styles.cardDesc} style={{ textTransform: 'uppercase' }}>
            We create platform-specific social media strategies that align with your brand goals, audience behaviour, content pillars, campaign calendar and growth objectives.
          </p>
        </div>

        {/* Card 2: Grey Viral Reels Short-Form Content */}
        <div className={`${styles.offerCard} ${styles.cardGrey} ${styles.viralReelsCard}`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleStrong}>VIRAL REELS SHORT-<br />FORM</span>{" "}
            <span className={styles.titleItalic}>Content</span>
          </h3>
          <p className={styles.cardDesc}>
            WE DEVELOP REELS, TIKTOKS AND SHORT-FORM VIDEOS BUILT AROUND HOOKS, TRENDS, STORYTELLING AND PLATFORM-NATIVE FORMATS TO IMPROVE REACH AND ENGAGEMENT.
          </p>
        </div>

        {/* Card 3: Grey Community Building */}
        <div className={`${styles.offerCard} ${styles.cardGrey} ${styles.communityCard}`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleStrong}>COMMUNITY</span>{" "}
            <span className={styles.titleItalic}>Building</span>
          </h3>
          <p className={styles.cardDesc}>
            WE HELP BRANDS BUILD ACTIVE COMMUNITIES THROUGH COMMENTS, DMS, STORY INTERACTIONS, POLLS, UGC PROMPTS, COMPETITIONS AND AUDIENCE ENGAGEMENT IDEAS.
          </p>
        </div>

        {/* Card 4: Blue Social Media Management (Spans 2 rows) */}
        <div className={`${styles.offerCard} ${styles.cardBlue} ${styles.socialMediaCard}`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleStrong}>SOCIAL MEDIA</span>{" "}
            <span className={styles.titleItalic}>Management</span>
          </h3>
          <p className={styles.cardDesc}>
            WE MANAGE YOUR BRAND PRESENCE ACROSS INSTAGRAM, TIKTOK, FACEBOOK, LINKEDIN AND SNAPCHAT WITH CONSISTENT CONTENT, PUBLISHING, ENGAGEMENT AND REPORTING.
          </p>
          <div className={styles.dotsPattern}>
            {Array.from({ length: 25 }).map((_, i) => (
              <span key={i} className={styles.dot} />
            ))}
          </div>
        </div>

        {/* Card 5: Grey Campaign Buzz */}
        <div className={`${styles.offerCard} ${styles.cardGrey} ${styles.campaignBuzzCard}`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleStrong}>CAMPAIGN BUZZ</span>
          </h3>
          <p className={styles.cardDesc}>
            WE CREATE CAMPAIGN IDEAS FOR LAUNCHES, SEASONAL MOMENTS, RAMADAN, UAE NATIONAL DAY, MENU LAUNCHES, MALL ACTIVATIONS, COMPETITIONS AND COMMUNITY-LED MOMENTS.
          </p>
        </div>

        {/* Card 6: Black Influencer Outreach */}
        <div className={`${styles.offerCard} ${styles.cardBlack} ${styles.influencerCard}`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleStrong}>INFLUENCER</span>{" "}
            <span className={styles.titleItalic}>Outreach</span>
          </h3>
          <p className={styles.cardDesc}>
            WE IDENTIFY AND COORDINATE WITH CREATORS, BLOGGERS AND INFLUENCERS WHO CAN HELP AMPLIFY BRAND STORIES, PRODUCT LAUNCHES, CAMPAIGNS AND ACTIVATIONS.
          </p>
        </div>

        {/* Card 7: Black Performance Marketing with background image */}
        <div className={`${styles.offerCard} ${styles.cardBlack} ${styles.performanceCard}`}>
          <Image
            src="/social-media-marketing/2.png"
            alt="Performance Marketing"
            fill
            className={styles.cardImageBg}
          />
          <h3 className={styles.cardTitle}>
            <span className={styles.titleStrong}>PERFORMANCE</span><br />
            <span className={styles.titleItalic}>Marketing</span>
          </h3>
        </div>

        {/* Card 8: Black Analytics Reporting */}
        <div className={`${styles.offerCard} ${styles.cardBlack} ${styles.analyticsCard}`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleStrong}>ANALYTICS</span>{" "}
            <span className={styles.titleItalic}>Reporting</span>
          </h3>
          <p className={styles.cardDesc}>
            WE MONITOR PERFORMANCE ACROSS REACH, ENGAGEMENT, FOLLOWER GROWTH, CONTENT PERFORMANCE AND AUDIENCE BEHAVIOUR, THEN PROVIDE CLEAR RECOMMENDATIONS FOR IMPROVEMENT.
          </p>
        </div>
      </div>
    </section>
  );
}
