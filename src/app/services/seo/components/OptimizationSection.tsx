"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface OptimizationItem {
  title: string;
  desc: string;
}

const OPTIMIZATION_ITEMS: OptimizationItem[] = [
  {
    title: "ON-PAGE OPTIMIZATION",
    desc: "Optimizing the content, meta tags, and other elements on the website to make it more relevant and accessible to search engines.",
  },
  {
    title: "OFF-PAGE OPTIMIZATION",
    desc: "Building high-quality backlinks from other websites to improve the website's authority and relevance.",
  },
  {
    title: "KEYWORD RESEARCH",
    desc: "Identifying the most relevant and high-traffic keywords for the business and optimizing the website's content to target those keywords.",
  },
  {
    title: "CONTENT CREATION",
    desc: "Creating high-quality, relevant, and engaging content that appeals to the target audience and helps drive traffic to the website.",
  },
  {
    title: "ANALYTICS AND REPORTING",
    desc: "Monitoring the website's performance, tracking the progress of the SEO campaign, and providing regular reports to the client.",
  },
];

export default function OptimizationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title lines reveal
    gsap.from(".opt-title-line > span", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: "100%",
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
    });

    // List items divider lines expand from left (scaleX: 0)
    gsap.from(".opt-item-border", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.2,
      stagger: 0.1,
      ease: "power3.out",
    });

    // List items content fade/slide up
    gsap.from(".opt-item-content", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.2,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <section className={styles.optimizationSection} ref={containerRef}>
      {/* Left Column: Title */}
      <h2 className={styles.optTitle}>
        <span className="opt-title-line" style={{ display: "block", overflow: "hidden" }}>
          <span style={{ display: "block" }}>BE EXACTLY WHERE</span>
        </span>
        <span className="opt-title-line" style={{ display: "block", overflow: "hidden" }}>
          <span style={{ display: "block" }}>YOUR CUSTOMERS</span>
        </span>
        <span className="opt-title-line" style={{ display: "block", overflow: "hidden" }}>
          <span style={{ display: "block" }}>
            ARE <span className={styles.optTitlePlayfair}>Looking</span>
          </span>
        </span>
      </h2>

      {/* Right Column: List */}
      <div className={styles.optList}>
        {OPTIMIZATION_ITEMS.map((item, index) => (
          <div key={index} className={styles.optItem}>
            {/* Top border line for each item */}
            <div className={`${styles.optItemBorderTop} opt-item-border`} />
            
            {/* Main content wrapper */}
            <div className="opt-item-content">
              <h3 className={styles.optItemHeader}>
                <span className={styles.optItemBullet}>•</span>
                {item.title}
              </h3>
              <p className={styles.optItemDesc}>{item.desc}</p>
            </div>

            {/* Bottom border line only for the last item */}
            {index === OPTIMIZATION_ITEMS.length - 1 && (
              <div className={`${styles.optItemBorderBottom} opt-item-border`} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
