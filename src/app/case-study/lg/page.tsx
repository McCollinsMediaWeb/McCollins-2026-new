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
              REIMAGINING THE <br />
              WEBSITE <span className={styles.italicExperience}>Experience</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Metadata Section (Event Strategy & Copy) */}
      <section className={styles.infoSection}>
        <div className={styles.infoSectionInner}>
          {/* Left column: stacked list of event elements */}
          <ul className={styles.metaList}>
            <li className={styles.metaItem}>Web Design & Development</li>
            <li className={styles.metaItem}>Technical SEO</li>
            <li className={styles.metaItem}>GEO</li>
            <li className={styles.metaItem}>Schema</li>
            <li className={styles.metaItem}>Core Web Vitals</li>
            <li className={styles.metaItem}>Content</li>
            <li className={styles.metaItem}>Maintenance</li>
            <li className={styles.metaItem}>Analytics</li>
            <li className={styles.metaItem}>Visualization</li>
          </ul>

          {/* Right column: two paragraphs of copy */}
          <div className={styles.descriptionWrapper}>
            <p className={styles.descriptionParagraph}>
              Engineering organic discoverability — a regional digital infrastructure built for the long compound.
            </p>
            <p className={styles.descriptionParagraph}>
              McCollins Media partnered with Pioneer Audio to create a refined digital experience for the Middle East market. The website was designed to strengthen brand presence, improve product discovery, and deliver a cleaner, more credible online journey for customers across the region
            </p>
          </div>
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
              src="/pioneer/7f99a1690f1ca452a8ff1a8e871b8143509ac5b5.png"
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

      {/* 3. VOSS VIDEO Section */}
      <section className={styles.videoSection}>
        <div className={styles.videoSectionInner}>
          {/* <div className={styles.videoBlock}>
            <h2 className={styles.videoText}>VOSS VIDEO</h2>
          </div> */}
          <Image
            src="/pioneer/04b71f64138645a5bc9d7c84a4d13f243aae7034.jpg"
            alt="Fujifilm Case Study Display"
            width={1200}
            height={714}
            className={styles.nextImage}
          />
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
                Globally trusted audio brand with a regional website operating as a
                static brochure. Organic traffic leaking to .com properties.
                Architecture not engineered to surface in new generation of AI answer
                engines.
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
                Regional flagship rebuilt. Technical SEO across schema, internal
                linking logic, Core Web Vitals, GEO programme, entity-rich answer
                content, AI optimisation, maintenance and analytics.
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
                Organic traffic increased, AI citations improved, Core Web Vitals
                passed, Lighthouse score improved and production uptime maintained.
              </div>

            </div>

          </div>

          <div className={styles.strategyFooter}>
            CAPABILITIES — WEB DEV · TECHNICAL SEO · GEO ·<br /> SCHEMA · CORE WEB VITALS ·
            CONTENT ·<br /> MAINTENANCE · ANALYTICS
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
            src="/pioneer/d3fc37894018a631c1400f7ae570d140d0ec2f5e.png"
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
