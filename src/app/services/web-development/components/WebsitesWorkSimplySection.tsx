"use client";

import React, { useRef, useState } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WebsitesWorkSimplySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useGSAP(() => {
    gsap.from(".work-title-anim", {
      scrollTrigger: {
        trigger: ".work-title-anim",
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".work-card-anim", {
      scrollTrigger: {
        trigger: ".work-gallery-anim",
        start: "top 75%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  const handleScroll = () => {
    if (!galleryRef.current) return;
    const scrollLeft = galleryRef.current.scrollLeft;
    const cards = galleryRef.current.children;
    if (cards.length === 0) return;

    const style = window.getComputedStyle(galleryRef.current);
    const paddingLeft = parseFloat(style.paddingLeft) || 0;

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const targetScroll = card.offsetLeft - paddingLeft;
      const distance = Math.abs(targetScroll - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    const newIndex = closestIndex + 1;
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!galleryRef.current) return;
    const cards = galleryRef.current.children;
    if (index >= 0 && index < cards.length) {
      const card = cards[index] as HTMLElement;
      const style = window.getComputedStyle(galleryRef.current);
      const paddingLeft = parseFloat(style.paddingLeft) || 0;

      galleryRef.current.scrollTo({
        left: card.offsetLeft - paddingLeft,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    scrollToIndex(activeIndex - 2);
  };

  const handleNext = () => {
    scrollToIndex(activeIndex);
  };

  return (
    <section className={styles.workSimplySection} ref={containerRef}>
      <div className={styles.workSimplyHeader}>
        <div className={styles.workHeaderContent}>
          <h2 className={`${styles.workSimplyTitle} work-title-anim`}>
            <span className={styles.titleItalic}>Websites</span><br />
            <span className={styles.workSimplyTitleStrong}>THAT WORK<br />SIMPLY.</span>
          </h2>

          <div className={`${styles.workNavigation} work-title-anim`}>
            <div className={styles.pageIndicator}>
              {String(activeIndex).padStart(2, "0")} / 05
            </div>
            <div className={styles.navArrows}>
              <button 
                className={`${styles.navArrow} ${activeIndex === 1 ? styles.disabled : ""}`} 
                onClick={handlePrev}
                disabled={activeIndex === 1}
              >
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className={`${styles.navArrow} ${activeIndex === 5 ? styles.disabled : ""}`} 
                onClick={handleNext}
                disabled={activeIndex === 5}
              >
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6H39M39 6L34 1M39 6L34 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={`${styles.workSimplyGallery} work-gallery-anim`}
        ref={galleryRef}
        onScroll={handleScroll}
      >
        <div className={`${styles.workCard} ${styles.workCardBlack} work-card-anim`}>
          <h3 className={styles.workCardTitle}>
            CORPORATE WEBSITE<br />
            <span className={styles.titleItalic}>Development</span>
          </h3>
          <div className={styles.workCardTextContainer}>
            <p className={styles.workCardText}>
              We engineer tailored corporate websites that elevate your brand identity through seamless user experiences and precision digital design.
            </p>
          </div>
        </div>

        <div className={`${styles.workCard} ${styles.workCardGrey} work-card-anim`}>
          <h3 className={styles.workCardTitle}>
            E-COMMERCE<br />
            <span className={styles.titleItalic}>Development</span>
          </h3>
          <div className={styles.workCardTextContainer}>
            <p className={styles.workCardText}>
              Robust and scalable e-commerce solutions built to maximize conversions and drive sustained online revenue growth.
            </p>
          </div>
        </div>

        <div className={`${styles.workCard} ${styles.workCardBlue} work-card-anim`}>
          <h3 className={styles.workCardTitle}>
            LEAD GENERATION FUNNEL<br />
            <span className={styles.titleItalic}>Development</span>
          </h3>
          <div className={styles.workCardTextContainer}>
            <p className={styles.workCardText}>
              We make strategic lead funnels designed to
              maximize acquisition efficiency and convert
              high-value prospects into loyal customers.
            </p>
          </div>
        </div>

        <div className={`${styles.workCard} ${styles.workCardBlack} work-card-anim`}>
          <h3 className={styles.workCardTitle}>
            TAILORED WEBSITES FOR<br />
            <span className={styles.titleItalic}>YOUR UNIQUE Needs</span>
          </h3>
          <div className={styles.workCardTextContainer}>
            <p className={styles.workCardText}>
              Tired of One-Size-Fits-All Websites? Generic website templates can’t effectively showcase what sets your business apart. Don’t settle for mediocrity when you can have a website that’s as unique as your brand.
            </p>
          </div>
        </div>

        <div className={`${styles.workCard} ${styles.workCardGreen} work-card-anim`}>
          <h3 className={styles.workCardTitle}>
            MOBILE FIRST WEBSITES<br />
            <span className={styles.titleItalic}>Development</span>
          </h3>
          <div className={styles.workCardTextContainer}>
            <p className={styles.workCardText}>
              Our mobile-first website development services prioritize the mobile user experience. We ensure your website is designed and optimized for smartphones and tablets, with a focus on speed, functionality, and user-friendliness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
