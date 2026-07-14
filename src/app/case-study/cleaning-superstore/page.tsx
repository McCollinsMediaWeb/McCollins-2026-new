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
              ELEVATING THE <br />
              EVENT <span className={styles.italicExperience}>Experience</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Metadata Section (Event Strategy & Copy) */}
      <section className={styles.infoSection}>
        <div className={styles.infoSectionInner}>
          {/* Left column: stacked list of event elements */}
          <ul className={styles.metaList}>
            <li className={styles.metaItem}>Ecom</li>
            <li className={styles.metaItem}>META</li>
            <li className={styles.metaItem}>Google</li>
            <li className={styles.metaItem}>TikTok</li>
            <li className={styles.metaItem}>Snapchat</li>
            <li className={styles.metaItem}>Email</li>
            <li className={styles.metaItem}>Automation</li>
            <li className={styles.metaItem}>WhatsApp</li>
            <li className={styles.metaItem}>CRO</li>
          </ul>

          {/* Right column: two paragraphs of copy */}
          <div className={styles.descriptionWrapper}>
            <p className={styles.descriptionParagraph}>
              Designing a premium live brand experience that translated Mercedes-Benz’s legacy of performance, precision, and luxury into a powerful event moment.
            </p>
            <p className={styles.descriptionParagraph}>
              McCollins Media supported Mercedes-Benz with creative direction, event branding, visual storytelling, and content execution, crafting every touchpoint to feel refined, engaging, and unmistakably premium.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.gifSection} ref={containerRef}>
        <div className={`${styles.gifBox} gif-box-anim`}>
          IMG/VIDEO
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.gallerySectionInner}>
          {/* Left Card: Lasers SLS */}
          <div className={styles.galleryCard}>
            <Image
              src="/css/1.jpg"
              alt="Mercedes-Benz AMG presentation with green lasers"
              fill
              className={styles.galleryImage}
            />
          </div>

          {/* Right Card: Red SLS */}
          <div className={styles.galleryCard}>
            <Image
              src="/css/2.png"
              alt="Mercedes-Benz SLS AMG red presentation"
              fill
              className={styles.galleryImage}
            />
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
                <h3 className={styles.delightText}>1500+</h3>
                <p>MONTHLY ONLINE ORDERS</p>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>02</div>

              <div>
                <h3 className={styles.delightText}>#1</h3>
                <p>UAE CATEGORY LEADER</p>
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
                <h3 className={styles.delightText}>4+</h3>
                <p>PAID CHANNELS</p>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>04</div>

              <div>
                <h3 className={styles.delightText}>7x</h3>
                <p>BLENDED ROADS</p>
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
            <span>CLEANING<br />SUPERSTORE</span>
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
                Brand built from inception during COVID. No identity, no audience, no behavioural precedent for selling chemicals/machinery online at scale. Effectively a new e-commerce vertical from zero.
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
                Brand & storefront. Quad-channel paid stack across META, Google, TikTok, Snapchat. Email & marketing automation as structural revenue. WhatsApp deployed as conversational commerce surface. Lifecycle calibrated to consumables.
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
                1,500+ monthly online orders. Largest UAE cleaning superstore. ROAS held as operation scaled. Email and WhatsApp engineered as material structural revenue lines. CPO compressed materially.
              </div>

            </div>

          </div>

          <div className={styles.strategyFooter}>
            CAPABILITIES — Brand · E-com · META ·<br /> Google · TikTok · Snapchat · Email ·<br /> Automation · WhatsApp · CRO
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
            src="/css/lg.png"
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
