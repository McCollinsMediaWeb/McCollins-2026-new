"use client";

import React from "react";
import styles from "../page.module.css";

export default function AboutServicesSection() {
  return (
    <section className={styles.aboutServicesSection}>
      <div className={styles.aboutServicesContainer}>
        <span className={styles.aboutServicesLabel}>ABOUT OUR SERVICES</span>
        <div className={styles.aboutServicesDivider}></div>
        <p className={styles.aboutServicesText}>
          As a social media marketing agency in Dubai, McCollins Media helps brands manage and grow their presence across Instagram, TikTok, Facebook, LinkedIn and Snapchat. Our social media services include strategy, content calendars, reels, community management, influencer outreach, bilingual content creation, campaign planning and monthly reporting designed to improve visibility, engagement and brand growth.
        </p>
      </div>
    </section>
  );
}
