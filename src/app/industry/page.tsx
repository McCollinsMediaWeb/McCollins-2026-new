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

export default function IndustryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    // Fade-in/scale-up hero image
    const heroImage = containerRef.current.querySelector("." + styles.heroImageWrapper);
    const pageTitle = containerRef.current.querySelector("." + styles.pageTitle);
    const pageSubtitle = containerRef.current.querySelector("." + styles.pageSubtitle);

    const tl = gsap.timeline();

    if (heroImage) {
      tl.from(heroImage, {
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 1.4,
        ease: "power3.out",
      });
    }

    if (pageTitle) {
      tl.from(pageTitle, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
      }, "-=0.8");
    }

    if (pageSubtitle) {
      tl.from(pageSubtitle, {
        opacity: 0,
        y: 20,
        duration: 1.0,
        ease: "power3.out",
      }, "-=0.8");
    }

    // Scroll Reveals for Industry Rows - Desktop only
    let mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      const container = containerRef.current;
      if (!container) return;
      const rows = container.querySelectorAll("." + styles.industryRow);
      
      rows.forEach((row) => {
        const image = row.querySelector("." + styles.imageCol);
        const contentElements = row.querySelectorAll(
          "." + styles.rowTitle + ", ." + styles.rowSubtitle + ", ." + styles.rowDesc + ", ." + styles.pointsList
        );
        
        const rowTl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
        
        if (image) {
          rowTl.from(image, {
            y: 50,
            opacity: 0,
            scale: 0.96,
            duration: 1.2,
            ease: "power3.out",
          });
        }
        
        if (contentElements.length > 0) {
          rowTl.from(contentElements, {
            y: 30,
            opacity: 0,
            duration: 1.0,
            stagger: 0.15,
            ease: "power3.out",
          }, "-=0.8");
        }
      });
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
            alt="Proven Success Across These Key Structures"
            fill
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <h1 className={styles.pageTitle}>
          PROVEN SUCCESS ACROSS<br />
          THESE KEY STRUCTURES
        </h1>
        <p className={styles.pageSubtitle}>
          Transforming industry-specific challenges into global<br />
          success stories through specialized strategic mastery.
        </p>
      </section>

      {/* Industry Rows Section */}
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
                <span className={styles.blueArrow}>↗</span> PRECISION LEAD ACQUISITION
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> IMMERSIVE DIGITAL SHOWCASING
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> GLOBAL MARKET PENETRATION
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> DATA-DRIVEN SALES VELOCITY
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
                <span className={styles.blueArrow}>↗</span> BESPOKE BRAND STORYTELLING
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> EXCLUSIVE AUDIENCE ARCHITECTURE
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
                <span className={styles.blueArrow}>↗</span> HIGH-IMPACT SENSORY STORYTELLING
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> STRATEGIC MARKET PENETRATION
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> OMNICHANNEL CONSUMER ENGAGEMENT
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
                <span className={styles.blueArrow}>↗</span> HYPER-LOCALIZED TECH NARRATIVES
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> REGIONAL MARKET PENETRATION
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> PRECISION PERFORMANCE ENGINEERING
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> STRATEGIC ECOSYSTEM INTEGRATION
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
                <span className={styles.blueArrow}>↗</span> AGILE MARKET ENTRY
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> VENTURE-FOCUSED SCALABILITY
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> HIGH-VELOCITY USER ACQUISITION
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> STRATEGIC BRAND MATURATION
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
                <span className={styles.blueArrow}>↗</span> ACCOUNT-BASED PRECISION
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> STRATEGIC LEAD NURTURING
              </li>
              <li>
                <span className={styles.blueArrow}>↗</span> AUTHORITY-DRIVEN THOUGHT LEADERSHIP
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
