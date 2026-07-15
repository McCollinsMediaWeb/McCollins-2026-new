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

export default function ZilliCaseStudy() {
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
            src="/pioneer/main-banner.webp"
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
            <li className={styles.metaItem}>Luxury E-Commerce Design</li>
            <li className={styles.metaItem}>Shopify Development</li>
            <li className={styles.metaItem}>Mobile-First UX</li>
            <li className={styles.metaItem}>Technical SEO</li>
            <li className={styles.metaItem}>GEO Readiness</li>
            <li className={styles.metaItem}>Schema Implementation</li>
            <li className={styles.metaItem}>Performance Optimization</li>
            <li className={styles.metaItem}>Content Architecture</li>
            <li className={styles.metaItem}>Analytics Setup</li>
            <li className={styles.metaItem}>Website Maintenance</li>
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

      <section className={styles.gifSection} ref={containerRef}>
        <div className={`${styles.gifBox} gif-box-anim`}>
          GIF
        </div>
      </section>

      {/* 2b. Stats Graphic Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsWrapper}>

          {/* Left Cards */}
          <div className={styles.statsColumn}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>01</div>

              <div>
                <h3 className={styles.delightText}>+212%</h3>
                <p>ORGANIC SESSIONS YOY</p>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>02</div>

              <div>
                <h3 className={styles.delightText}>Top 3</h3>
                <p>SERP CATEGORY TERMS</p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className={styles.centerGraphic}>
            <Image
              src="/pioneer/7f99a1690f1ca452a8ff1a8e871b8143509ac5b5.webp"
              alt="Layers"
              width={500}
              height={600}
              className={styles.layersImage}
            />
          </div>

          {/* Right Cards */}
          <div className={styles.statsColumn}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>03</div>

              <div>
                <h3 className={styles.delightText}>99.9%</h3>
                <p>PRODUCTION UPTIME</p>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>04</div>

              <div>
                <h3 className={styles.delightText}>94</h3>
                <p>LIGHTHOUSE</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.strategySection}>
        <div className={styles.strategyOverlay}>

          {/* Top Header */}
          <div className={styles.strategyTop}>
            <span>THE STRATEGIC APPROACH</span>
            <span>PIONEER MEA</span>
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
                French maison entering Dubai digital market with a mobile-led, moment-shopping customer. Existing presence desktop-anchored. Product photography deserved larger stage. Checkout was friction layer, not gesture.

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
                Mobile-first UX engineered for portrait orientation and thumb-reach. Apple Pay, Google Pay, Shop Pay for single-tap conversion. Editorial product pages treating photography as primary sales asset. Performance engineering for sub-1.6s TTI.
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
                Mobile conversion lifted materially. Checkout abandonment collapsed via express rails. Session depth up. A storefront engineered for the screen the customer actually shops on.

              </div>

            </div>

          </div>

          <div className={styles.strategyFooter}>
            CAPABILITIES — Shopify · Mobile-First ·<br /> Luxury UX · Apple Pay · Google Pay ·<br /> Shop Pay · Editorial PDPs · CRO
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
            src="/zilli/fujifilm.webp"
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
