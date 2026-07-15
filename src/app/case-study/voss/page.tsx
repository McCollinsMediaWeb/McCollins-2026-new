"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function MercedesBenzCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      if (!mounted || !containerRef.current) return;

      // 1. Hero Image Animation (Fade in + scale down to base)
      const heroImg = containerRef.current.querySelector("." + styles.heroImage);
      if (heroImg) {
        gsap.to(heroImg, {
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "power4.out",
          delay: 0.3,
        });
      }

      // 1b. Hero Text Animation (Slide + fade in)
      const heroText = containerRef.current.querySelector("." + styles.heroTextContainer);
      if (heroText) {
        gsap.fromTo(
          heroText,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.8,
          }
        );
      }

      // 2. Metadata elements reveal
      const metaItems = containerRef.current.querySelectorAll("." + styles.metaItem);
      const descParagraphs = containerRef.current.querySelectorAll("." + styles.descriptionParagraph);

      if (metaItems.length > 0) {
        gsap.fromTo(
          metaItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.infoSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (descParagraphs.length > 0) {
        gsap.fromTo(
          descParagraphs,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.infoSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 2b. Stats section reveal
      const statsSec = containerRef.current.querySelector("." + styles.statsSection);
      if (statsSec) {
        gsap.fromTo(
          statsSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Video block reveal
      const videoSec = containerRef.current.querySelector("." + styles.videoSection);
      if (videoSec) {
        gsap.fromTo(
          videoSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: videoSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 4. Gallery Cards stagger reveal
      const galleryCards = containerRef.current.querySelectorAll("." + styles.galleryCard);
      if (galleryCards.length > 0) {
        galleryCards.forEach((card) => {
          const img = card.querySelector("." + styles.galleryImage);
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });

          tl.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
            }
          );

          if (img) {
            tl.fromTo(
              img,
              { scale: 1.05 },
              {
                scale: 1,
                duration: 1.5,
                ease: "power3.out",
              },
              "-=1.0"
            );
          }
        });
      }
    },
    { scope: containerRef, dependencies: [mounted] }
  );

  if (!mounted) return null;

  return (
    <div className={styles.container} ref={containerRef}>

      {/* 1. Unified Hero Section: Chrome Star & Silhouette Composite with Title Banner */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          {/* <img
            src="/pioneer/main-banner.png"
            alt="Mercedes-Benz Elevating the Event Experience"
            className={styles.heroImage}
          /> */}
          {/* Text Overlay for Event Experience Title */}
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>
              DESIGNING MOBILE-FIRST<br />
              LUXURY <span className={styles.italicExperience}>Commerce</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Metadata Section (Event Strategy & Copy) */}
      <section className={styles.infoSection}>
        <div className={styles.infoSectionInner}>
          {/* Left column: stacked list of event elements */}
          <ul className={styles.metaList}>
            <li className={styles.metaItem}>Shopify Dev</li>
            <li className={styles.metaItem}>Luxury UX</li>
            <li className={styles.metaItem}>Apple Pay</li>
            <li className={styles.metaItem}>Google Pay</li>
            <li className={styles.metaItem}>Crypto</li>
            <li className={styles.metaItem}>Headless</li>
            <li className={styles.metaItem}>CRO</li>
            <li className={styles.metaItem}>Site Maintenance</li>
          </ul>

          {/* Right column: two paragraphs of copy */}
          <div className={styles.descriptionWrapper}>
            <p className={styles.descriptionParagraph}>
              A mobile-first Shopify experience for a French luxury brand, designed to make product discovery faster, cleaner, and more refined.
            </p>
            <p className={styles.descriptionParagraph}>
              McCollins Media created a premium commerce experience focused on elegance, usability, and seamless shopping across mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* 2b. Mockup Showcase Section */}
      <section className={styles.mockupSection}>
        <div className={styles.mockupContainer}>
          <Image
            src="/voss/34ddbb13bfc03b0d68fad8b4b610eafb82e2627b.jpg"
            alt="VOSS Mobile Mockups"
            width={1920}
            height={1080}
            className={styles.mockupImage}
          />
        </div>
      </section>

      {/* 3. Hourglass Stats Section */}
      <section className={styles.hourglassSection}>
        <div className={styles.hourglassInner}>
          <div className={styles.hourglassTopRow}>
            <span>THE HERO</span>
            <span>VOSS WATER</span>
          </div>

          {/* Left Cards */}
          <div className={`${styles.hourglassCard} ${styles.card01}`}>
            <div className={styles.cardNum}>01</div>
            <div className={styles.cardText}>
              <span className={styles.cardVal}>100%</span>
              <span className={styles.cardLabel}>BESPOKE SHOPIFY BUILD</span>
            </div>
          </div>

          <div className={`${styles.hourglassCard} ${styles.card02}`}>
            <div className={styles.cardNum}>02</div>
            <div className={styles.cardText}>
              <span className={styles.cardVal}>4+</span>
              <span className={styles.cardLabel}>PAYMENT RAILS INTEGRATED</span>
            </div>
          </div>

          {/* Mobile Hourglass Image (hidden on desktop) */}
          <div className={styles.hourglassMobileImageWrapper}>
            <Image
              src="/voss/229ab75419549db79d025cb5b234066de02b19de.png"
              alt="Hourglass"
              width={420}
              height={520}
              className={styles.hourglassImage}
            />
          </div>

          {/* Right Cards */}
          <div className={`${styles.hourglassCard} ${styles.card03}`}>
            <div className={styles.cardNum}>03</div>
            <div className={styles.cardText}>
              <span className={styles.cardVal}>&lt;1.4S</span>
              <span className={styles.cardLabel}>TIME-TO-INTERACTIVE</span>
            </div>
          </div>

          <div className={`${styles.hourglassCard} ${styles.card04}`}>
            <div className={styles.cardNum}>04</div>
            <div className={styles.cardText}>
              <span className={styles.cardVal}>96</span>
              <span className={styles.cardLabel}>LIGHTHOUSE SCORE</span>
            </div>
          </div>

          {/* SVG Connector Lines (desktop only) */}
          <svg className={styles.hourglassSvg} viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
                <circle cx="5" cy="5" r="3" fill="#8c9eb2" />
              </marker>
            </defs>
            {/* Curve to Card 01 */}
            <path d="M 435 520 C 380 520, 380 195, 340 195" stroke="#8c9eb2" strokeWidth="1" strokeLinecap="round" markerStart="url(#dot)" />
            <path d="M 340 195 L 346 191 M 340 195 L 346 199" stroke="#8c9eb2" strokeWidth="1" strokeLinecap="round" />

            {/* Curve to Card 02 */}
            <path d="M 435 520 C 380 520, 380 375, 340 375" stroke="#8c9eb2" strokeWidth="1" strokeLinecap="round" markerStart="url(#dot)" />
            <path d="M 340 375 L 346 371 M 340 375 L 346 379" stroke="#8c9eb2" strokeWidth="1" strokeLinecap="round" />

            {/* Curve to Card 03 */}
            <path d="M 565 520 C 620 520, 620 195, 660 195" stroke="#8c9eb2" strokeWidth="1" strokeLinecap="round" markerStart="url(#dot)" />
            <path d="M 660 195 L 654 191 M 660 195 L 654 199" stroke="#8c9eb2" strokeWidth="1" strokeLinecap="round" />

            {/* Curve to Card 04 */}
            <path d="M 565 520 C 620 520, 620 375, 660 375" stroke="#8c9eb2" strokeWidth="1" strokeLinecap="round" markerStart="url(#dot)" />
            <path d="M 660 375 L 654 371 M 660 375 L 654 379" stroke="#8c9eb2" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      </section>

      <section className={styles.strategySection}>
        <div className={styles.strategyOverlay}>

          {/* Top Header */}
          <div className={styles.strategyTop}>
            <span>THE STRATEGIC APPROACH</span>
            <span>VOSS DUBAI</span>
          </div>

          {/* Three Columns */}
          <div className={styles.strategyGrid}>

            {/* Challenge */}
            <div className={styles.strategyItem}>

              <div className={styles.strategyTitle}>
                <h2>
                  <span className={styles.serif}>The</span>{" "}
                  <span className={styles.bold}>CHALLENGE</span>
                </h2>
              </div>

              <div className={styles.strategyCard}>
                Heritage luxury water brand with a generic digital storefront.
                Over-articulated interface, friction at checkout, no payment optionality beyond conventional card rails. Brand world deserved a quieter, more deliberate digital expression.
              </div>

            </div>

            {/* Strategic Approach */}
            <div className={styles.strategyItem}>

              <div className={styles.strategyTitle}>
                <h2>
                  <span className={styles.bold}>THE STRATEGIC</span>
                  <br />
                  <span className={styles.blueSerif}>Approach</span>
                </h2>
              </div>

              <div className={styles.strategyCard}>
                Editorial commerce design restraint as the system. Performance-first engineering for sub-1.5s mobile TTI. Multi-rail transaction layer: Apple Pay, Google Pay, card, crypto. Headless-ready foundation for the next horizon.
              </div>

            </div>

            {/* Impact */}
            <div className={styles.strategyItem}>

              <div className={styles.strategyTitle}>
                <h2>
                  <span className={styles.serif}>The</span>{" "}
                  <span className={styles.bold}>IMPACT</span>
                </h2>
              </div>

              <div className={styles.strategyCard}>
                Mobile conversion lifted materially. Checkout abandonment collapsed. Near-perfect Lighthouse. A storefront that disappears  leaving brand, bottle, transaction.
              </div>

            </div>

          </div>

          <div className={styles.strategyFooter}>
            CAPABILITIES — Shopify Dev · Luxury UX ·<br /> Apple Pay · Google Pay · Crypto · Headless ·<br /> CRO · Site Maintenance
          </div>

        </div>
      </section>

      {/* 5. Fujifilm Transition Banner Section */}
      <section className={styles.nextSection}>
        <div className={styles.nextHeader}>
          <span className={styles.nextTitleLink}>OUR SERVICES</span>
          <span className={styles.nextTitleLink}>SEE THE WORK</span>
        </div>
        <div className={styles.nextImageWrapper}>
          <Image
            src="/voss/mapei.png"
            alt="Fujifilm Case Study Display"
            width={1200}
            height={714}
            className={styles.nextImage}
          />
        </div>
      </section>

    </div>
  );
}
