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

export default function CryoCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      if (!mounted || !containerRef.current) return;

      // 1. Hero animations
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

      const heroText = containerRef.current.querySelector("." + styles.heroTextContainer);
      if (heroText) {
        gsap.fromTo(
          heroText,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.8,
          }
        );
      }

      // 2. Scroll triggers
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

      const videoItems = containerRef.current.querySelectorAll("." + styles.videoWrapper);
      if (videoItems.length > 0) {
        gsap.fromTo(
          videoItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.videosSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const challengeSec = containerRef.current.querySelector("." + styles.challengeSection);
      if (challengeSec) {
        gsap.fromTo(
          challengeSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: challengeSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const galleryItems = containerRef.current.querySelectorAll("." + styles.galleryWrapper);
      if (galleryItems.length > 0) {
        gsap.fromTo(
          galleryItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.gallerySection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const strategyIntro = containerRef.current.querySelector("." + styles.strategyIntroContent);
      if (strategyIntro) {
        gsap.fromTo(
          strategyIntro,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.strategyIntroSection,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const positioningContent = containerRef.current.querySelector("." + styles.positioningContent);
      const positioningImg = containerRef.current.querySelector("." + styles.positioningImageWrapper);
      if (positioningContent) {
        gsap.fromTo(
          positioningContent.querySelector("." + styles.positioningLeft),
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.positioningSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
      if (positioningImg) {
        gsap.fromTo(
          positioningImg,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.positioningSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const socialContent = containerRef.current.querySelector("." + styles.socialContent);
      const socialImg = containerRef.current.querySelector("." + styles.socialImageWrapper);
      if (socialContent) {
        gsap.fromTo(
          socialContent.querySelector("." + styles.socialHeading),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.socialSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
      if (socialImg) {
        gsap.fromTo(
          socialImg,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.socialSection,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const gifWrapper = containerRef.current.querySelector("." + styles.gifWrapper);
      if (gifWrapper) {
        gsap.fromTo(
          gifWrapper,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.gridSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const contentProdSec = containerRef.current.querySelector("." + styles.contentProdSection);
      if (contentProdSec) {
        gsap.fromTo(
          contentProdSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentProdSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef, dependencies: [mounted] }
  );

  if (!mounted) return null;

  return (
    <div className={styles.container} ref={containerRef}>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/cryo/e10ae3452971f405189d915fb9572403e5e692cf.webp"
            alt="CRYO - Premium Wellness Chamber"
            fill
            className={styles.heroImage}
            priority
          />
          {/* Overlay Text */}
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>
              BUILDING A PREMIUM WELLNESS<br />
              BRAND THROUGH STRATEGIC<br />
              MARKETING & PERFORMANCE
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Metadata Section */}
      <section className={styles.infoSection}>
        <div className={styles.infoSectionInner}>
          <ul className={styles.metaList}>
            <li className={styles.metaItem}>Strategy</li>
            <li className={styles.metaItem}>Social</li>
            <li className={styles.metaItem}>Performance</li>
            <li className={styles.metaItem}>Content</li>
          </ul>

          <div className={styles.descriptionWrapper}>
            <p className={styles.descriptionParagraph}>
              CRYO UAE partnered with us to strengthen its position as one of the UAE's leading wellness and recovery destinations. Our objective extended beyond increasing brand awareness—we built a complete marketing ecosystem focused on attracting qualified audiences, driving appointment bookings, expanding into new markets, and supporting business growth across Dubai and Abu Dhabi.
            </p>
            <p className={styles.descriptionParagraph}>
              From launching the Dubai Hills branch to scaling customer acquisition through performance marketing, influencer collaborations, and high-quality content production, we developed an integrated strategy that consistently converted attention into appointments.
            </p>
          </div>
        </div>
      </section>

      {/* 2b. Videos Showcase Section */}
      <section className={styles.videosSection}>
        <div className={styles.videosGrid}>
          <div className={styles.videoWrapper}>
            <video
              className={styles.videoElement}
              src="/cryo/Cryo Body - AUH.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className={styles.videoWrapper}>
            <video
              className={styles.videoElement}
              src="/cryo/CRYO _Stretching Post Size.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

      {/* 3. Challenge Section */}
      <section className={styles.challengeSection}>
        <div className={styles.challengeContent}>
          <div className={styles.challengeLeft}>
            <span className={styles.challengeLabel}>THE CHALLENGE</span>
            <h2 className={styles.challengeHeading}>
              THE WELLNESS<br />
              INDUSTRY IS<br />
              HIGHLY<br />
              COMPETITIVE.
            </h2>
          </div>

          <div className={styles.challengeRight}>
            <p className={styles.challengeLead}>
              The wellness industry is highly competitive, with consumers seeking trusted brands that deliver measurable results. CRYO UAE required a marketing strategy that would:
            </p>
            <ul className={styles.challengeList}>
              <li>Increase brand visibility across the UAE.</li>
              <li>Position the brand as a premium recovery and wellness destination.</li>
              <li>Generate qualified appointment bookings rather than vanity metrics.</li>
              <li>Support the launch of the Dubai Hills location.</li>
              <li>Drive consistent footfall across Dubai and Abu Dhabi branches.</li>
              <li>Create a scalable customer acquisition funnel for long-term growth.</li>
            </ul>
          </div>
        </div>

        <div className={styles.challengeImageWrapper}>
          <Image
            src="/cryo/7a1803bf0bcb85f8fdd778ba75add82a69dea8a2.png"
            alt="CRYO Chamber Structure Detail"
            width={1920}
            height={500}
            className={styles.challengeImage}
          />
        </div>
      </section>

      {/* 3b. Gallery Showcase Section */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryWrapper}>
            <Image
              src="/cryo/ce95b50ff49df25a6960f3daf047e62dd8e6eda5.jpg"
              alt="CRYO Treatment Image"
              fill
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryWrapper}>
            <video
              className={styles.galleryVideo}
              src="/cryo/cryp stp 2.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

      {/* 3c. Strategy Intro Section */}
      <section className={styles.strategyIntroSection}>
        <div className={styles.strategyIntroContent}>
          <span className={styles.strategyIntroLabel}>OUR STRATEGY</span>
          <h3 className={styles.strategyIntroText}>
            Rather than treating each marketing channel independently, we built a full-funnel growth strategy connecting brand awareness directly to conversions.
          </h3>
        </div>
      </section>

      {/* 3d. Brand Positioning Section */}
      <section className={styles.positioningSection}>
        <div className={styles.positioningContent}>
          <div className={styles.positioningLeft}>
            <span className={styles.positioningLabel}>BRAND POSITIONING</span>
            <h2 className={styles.positioningHeading}>
              WE REFINED CRYO UAE'S DIGITAL PRESENCE TO REINFORCE ITS PREMIUM POSITIONING WITHIN THE WELLNESS, LONGEVITY, RECOVERY, AND PERFORMANCE SPACE.
            </h2>
            <span className={styles.positioningSubheading}>This included:</span>
            <ul className={styles.positioningList}>
              <li><span>i)</span> Consistent visual identity across all platforms.</li>
              <li><span>ii)</span> Messaging tailored to both wellness-conscious consumers and high-performance audiences.</li>
              <li><span>iii)</span> Clear communication of treatment benefits.</li>
              <li><span>iv)</span> Location-specific campaigns for Dubai and Abu Dhabi.</li>
            </ul>
          </div>

          <div className={styles.positioningRight}>
            <div className={styles.positioningImageWrapper}>
              <Image
                src="/cryo/5484aa6b7c4a9cfcf825183a2b709390f296f947.webp"
                alt="CRYO Brand Positioning Diagram"
                width={800}
                height={600}
                className={styles.positioningImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3e. Social Media Section */}
      <section className={styles.socialSection}>
        <div className={styles.socialContent}>
          <span className={styles.socialLabel}>SOCIAL MEDIA MANAGEMENT</span>
          <h3 className={styles.socialHeading}>
            We managed CRYO UAE's social media presence with a content-first strategy designed to educate, engage, and convert.
          </h3>
          <div className={styles.socialImageWrapper}>
            <Image
              src="/cryo/fed81af42ec791efbea80a0aebc2d09c035d610b.png"
              alt="CRYO Social Media Grid Mockup"
              width={1200}
              height={900}
              className={styles.socialImage}
            />
          </div>
        </div>
      </section>

      {/* 3f. Social Grid Gif Section */}
      <section className={styles.gridSection}>
        <div className={styles.gridContent}>
          <div className={styles.gifWrapper}>
            <Image
              src="/cryo/4f52c421d61d1c36a217758e982f7cf301624b48.gif"
              alt="CRYO Social Feed Animation Grid"
              width={1200}
              height={800}
              className={styles.gridGif}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* 3g. Content Production Section */}
      <section className={styles.contentProdSection}>
        <div className={styles.contentProdContent}>
          <div className={styles.contentProdLeft}>
            <span className={styles.contentProdLabel}>CONTENT PRODUCTION</span>
            <h2 className={styles.contentProdHeading}>
              CONTENT BECAME<br />
              ONE OF THE BRAND'S<br />
              STRONGEST GROWTH<br />
              ASSETS.
            </h2>
          </div>

          <div className={styles.contentProdRight}>
            <p className={styles.contentProdLead}>
              We planned and produced premium photo and video content across multiple campaigns, ensuring every asset could be repurposed across paid advertising, social media, website content, influencer campaigns, and promotional launches.
            </p>
            <span className={styles.contentProdSubheading}>Our production focused on showcasing:</span>
            <ul className={styles.contentProdList}>
              <li>Real treatment experiences</li>
              <li>Clinic environment</li>
              <li>Practitioner expertise</li>
              <li>Lifestyle integration</li>
              <li>Premium customer experience</li>
              <li>Recovery and wellness journeys</li>
            </ul>
            <p className={styles.contentProdOutro}>
              This consistent content engine significantly increased engagement while improving paid advertising performance.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Next Section */}
      <section className={styles.nextSection}>
        <div className={styles.nextHeader}>
          <span className={styles.nextTitleLink}>OUR SERVICES</span>
          <span className={styles.nextTitleLink}>SEE THE WORK</span>
        </div>
        <div className={styles.nextImageWrapper}>
          <Image
            src="/voss/mapei.webp"
            alt="Next Case Study Display"
            width={1200}
            height={714}
            className={styles.nextImage}
          />
        </div>
      </section>
    </div>
  );
}
