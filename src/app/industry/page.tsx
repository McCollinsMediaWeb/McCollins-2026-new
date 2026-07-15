"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BlueArrow = () => (
  <span className={styles.blueArrow}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  </span>
);

export default function IndustryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    // Fade-in/scale-up hero image
    const heroImage = containerRef.current.querySelector("." + styles.heroImage);
    if (heroImage) {
      gsap.fromTo(
        heroImage,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out" }
      );
    }

    // Scroll trigger reveals for each industry row
    const rows = containerRef.current.querySelectorAll("." + styles.industryRow);
    rows.forEach((row) => {
      const imgCol = row.querySelector("." + styles.imageCol);
      const contentCol = row.querySelector("." + styles.contentCol);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
        },
      });

      if (imgCol) {
        tl.from(
          imgCol,
          {
            x: -50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          0
        );
      }

      if (contentCol) {
        const children = contentCol.children;
        tl.from(
          children,
          {
            y: 45,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
          0.1
        );
      }
    });
  }, { scope: containerRef, dependencies: [mounted] });

  if (!mounted) return null;

  return (
    <div className={styles.industryContainer} ref={containerRef}>
      {/* Hero Image Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/industry-page/main-banner.png"
            alt="Industries Hero"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* Intro Content Section */}
      <section className={styles.contentSection}>
        <h1 className={styles.pageTitle}>INDUSTRIES</h1>
        <p className={styles.pageSubtitle}>
          We don't believe in one-size-fits-all marketing. We partner with ambitious brands in high-impact sectors, tailoring our approach to dominate specific industry dynamics and achieve exponential growth.
        </p>
      </section>

      {/* Rows Section */}
      <section className={styles.rowsSection}>
        {/* Real Estate Row */}
        <div className={styles.industryRow}>
          <div className={styles.imageCol}>
            <div className={`${styles.imageWrapper} hover-target`}>
              <Image
                src="/industry-page/real-estate.jpg"
                alt="Real Estate"
                fill
                className={styles.rowImage}
              />
            </div>
          </div>
          <div className={styles.contentCol}>
            <h2 className={styles.rowTitle}>REAL ESTATE</h2>
            <h3 className={styles.rowSubtitle}>
              ARCHITECTING DIGITAL DOMINANCE FOR<br />
              GLOBAL REAL ESTATE.
            </h3>
            <p className={styles.rowDesc}>
              Architecting a dominant digital presence for the world's most ambitious property developments and brokerage firms. We bridge the gap between premier real estate assets and global investors through data-backed lead generation and immersive brand storytelling.
            </p>
            <ul className={styles.pointsList}>
              <li>
                <BlueArrow /> PRECISION LEAD ACQUISITION
              </li>
              <li>
                <BlueArrow /> IMMERSIVE DIGITAL SHOWCASING
              </li>
              <li>
                <BlueArrow /> GLOBAL MARKET PENETRATION
              </li>
              <li>
                <BlueArrow /> DATA-DRIVEN SALES VELOCITY
              </li>
            </ul>
          </div>
        </div>

        {/* Luxury Row */}
        <div className={styles.industryRow}>
          <div className={styles.imageCol}>
            <div className={`${styles.imageWrapper} hover-target`}>
              <Image
                src="/industry-page/luxury.png"
                alt="Luxury"
                fill
                className={styles.rowImage}
              />
            </div>
          </div>
          <div className={styles.contentCol}>
            <h2 className={styles.rowTitle}>LUXURY</h2>
            <h3 className={styles.rowSubtitle}>
              PREMIUM LUXURY MARKETING SOLUTIONS<br />
              CURATED FOR YOUR BRAND
            </h3>
            <p className={styles.rowDesc}>
              There's a reason why luxury brands don't advertise like the other brands in the world. Unlike those brands, they cater to a niche audience that only buys from them. Marketing for luxurious brands is that, luxury. They want to inspire passion and proudness in people. Through their interaction with you, they want you to physically manifest the luxury shown by them.
            </p>
            <p className={styles.rowDesc}>
              After having worked with luxury brands like Mercedes Benz, YSL, and Lootah Perfumes, McCollins has had the pleasure of working with some of the finest luxury brands.
            </p>
            <ul className={styles.pointsList}>
              <li>
                <BlueArrow /> BESPOKE BRAND STORYTELLING
              </li>
              <li>
                <BlueArrow /> EXCLUSIVE AUDIENCE ARCHITECTURE
              </li>
            </ul>
          </div>
        </div>

        {/* Food & Beverage Row */}
        <div className={styles.industryRow}>
          <div className={styles.imageCol}>
            <div className={`${styles.imageWrapper} hover-target`}>
              <Image
                src="/industry-page/food-and-beverages.jpg"
                alt="Food & Beverage"
                fill
                className={styles.rowImage}
              />
            </div>
          </div>
          <div className={styles.contentCol}>
            <h2 className={styles.rowTitle}>FOOD & BEVERAGE</h2>
            <h3 className={styles.rowSubtitle}>
              ACCELERATING F&B MARKET SHARE BY BRIDGING THE<br />
              GAP BETWEEN LOCAL FLAVOR AND GLOBAL DIGITAL SCALE.
            </h3>
            <p className={styles.rowDesc}>
              The food and beverage industry has been booming in recent years. While the target market for this industry changes from brand to brand, the strategies used are more or less the same.
            </p>
            <ul className={styles.pointsList}>
              <li>
                <BlueArrow /> HIGH-IMPACT SENSORY STORYTELLING
              </li>
              <li>
                <BlueArrow /> STRATEGIC MARKET PENETRATION
              </li>
              <li>
                <BlueArrow /> OMNICHANNEL CONSUMER ENGAGEMENT
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Row */}
        <div className={styles.industryRow}>
          <div className={styles.imageCol}>
            <div className={`${styles.imageWrapper} hover-target`}>
              <Image
                src="/industry-page/technology.png"
                alt="Technology"
                fill
                className={styles.rowImage}
              />
            </div>
          </div>
          <div className={styles.contentCol}>
            <h2 className={styles.rowTitle}>TECHNOLOGY</h2>
            <h3 className={styles.rowSubtitle}>
              TECHNOLOGY MARKETING SOLUTIONS CATERING<br />
              TO THE MIDDLE EAST
            </h3>
            <p className={styles.rowDesc}>
              Driving the next wave of digital transformation by bridging the gap between global technical innovation and the Middle East's unique market dynamics. We empower high-growth tech brands to navigate the region's ambitious digital landscape with precision-engineered strategies and localized expertise.
            </p>
            <ul className={styles.pointsList}>
              <li>
                <BlueArrow /> HYPER-LOCALIZED TECH NARRATIVES
              </li>
              <li>
                <BlueArrow /> REGIONAL MARKET PENETRATION
              </li>
              <li>
                <BlueArrow /> PRECISION PERFORMANCE ENGINEERING
              </li>
              <li>
                <BlueArrow /> STRATEGIC ECOSYSTEM INTEGRATION
              </li>
            </ul>
          </div>
        </div>

        {/* Startups Row */}
        <div className={styles.industryRow}>
          <div className={styles.imageCol}>
            <div className={`${styles.imageWrapper} hover-target`}>
              <Image
                src="/industry-page/startups.jpg"
                alt="Startups"
                fill
                className={styles.rowImage}
              />
            </div>
          </div>
          <div className={styles.contentCol}>
            <h2 className={styles.rowTitle}>STARTUPS</h2>
            <h3 className={styles.rowSubtitle}>
              ACCELERATING VISION INTO GLOBAL DOMINANCE.
            </h3>
            <p className={styles.rowDesc}>
              Empowering disruptive startups to bridge the gap between initial innovation and sustainable global dominance. We provide the strategic foundation and high-velocity execution necessary to navigate the complexities of market entry and venture-backed scaling.
            </p>
            <ul className={styles.pointsList}>
              <li>
                <BlueArrow /> AGILE MARKET ENTRY
              </li>
              <li>
                <BlueArrow /> VENTURE-FOCUSED SCALABILITY
              </li>
              <li>
                <BlueArrow /> HIGH-VELOCITY USER ACQUISITION
              </li>
              <li>
                <BlueArrow /> STRATEGIC BRAND MATURATION
              </li>
            </ul>
          </div>
        </div>

        {/* B2B Row */}
        <div className={styles.industryRow}>
          <div className={styles.imageCol}>
            <div className={`${styles.imageWrapper} hover-target`}>
              <Image
                src="/industry-page/b2b.png"
                alt="B2B"
                fill
                className={styles.rowImage}
              />
            </div>
          </div>
          <div className={styles.contentCol}>
            <h2 className={styles.rowTitle}>B2B</h2>
            <h3 className={styles.rowSubtitle}>
              ACCELERATING VISION INTO GLOBAL DOMINANCE.
            </h3>
            <p className={styles.rowDesc}>
              Architecting high-impact B2B strategies that transform complex sales cycles into streamlined engines for revenue and market authority. We bridge the gap between technical expertise and human connection, ensuring your brand resonates with decision-makers on a global scale.
            </p>
            <ul className={styles.pointsList}>
              <li>
                <BlueArrow /> ACCOUNT-BASED PRECISION
              </li>
              <li>
                <BlueArrow /> STRATEGIC LEAD NURTURING
              </li>
              <li>
                <BlueArrow /> AUTHORITY-DRIVEN THOUGHT LEADERSHIP
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
