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
            src="/pioneer/main-banner.webp"
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
            <li className={styles.metaItem}>Event Strategy</li>
            <li className={styles.metaItem}>On-Ground Branding</li>
            <li className={styles.metaItem}>Visual Storytelling</li>
            <li className={styles.metaItem}>Event Production</li>
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

      {/* 3. VOSS VIDEO Section */}
      <section className={styles.videoSection}>
        <div className={styles.videoSectionInner}>
          <div className={styles.videoBlock}>
            <h2 className={styles.videoText}>IMG/VIDEO</h2>
          </div>
        </div>
      </section>

      {/* 3.b. LG Event Design Image Grid Section */}
      <section className={styles.imageGridSection}>
        <div className={styles.imageGridInner}>
          {/* Left Column */}
          <div className={styles.imageGridCol}>
            <p className={styles.imageColTopText}>
              McCollins Media shaped the event with purpose, people, and presence.
              A moment of care, organised into a story of impact.
            </p>
            <div className={styles.gridImageWrapper}>
              <Image
                src="/lg/1.webp"
                alt="LG Event crowd view"
                width={600}
                height={450}
                className={styles.gridImage}
              />
            </div>
            <p className={styles.imageColBottomTextLeft}>
              From planning to people<br />
              management, every detail was built
            </p>
          </div>

          {/* Right Column */}
          <div className={styles.imageGridCol}>
            <p className={styles.imageColTopText}>
              Community impact begins with people coming together.
              Designed with purpose and delivered with care,
              the initiative transformed participation into meaningful action.
            </p>
            <div className={styles.gridImageWrapper}>
              <Image
                src="/lg/2.webp"
                alt="LG Event group pose"
                width={600}
                height={450}
                className={styles.gridImage}
              />
            </div>
            <p className={styles.imageColBottomTextRight}>
              Thoughtfully organised and authentically experienced,
              the gathering reflected the power of collective action,
              turning a simple event into a meaningful memory.
            </p>
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
            src="/lg/pioneer.webp"
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
