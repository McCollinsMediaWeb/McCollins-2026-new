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
    title: "SEO STRATEGY",
    desc: "Building a search roadmap based on your business goals, target audience, competitors, website performance and growth opportunities.",
  },
  {
    title: "KEYWORD RESEARCH",
    desc: "Identifying high-value keywords, search terms and content opportunities that your customers use when looking for products, services or solutions.",
  },
  {
    title: "ON-PAGE OPTIMIZATION",
    desc: "Optimizing website pages, headings, meta titles, descriptions, internal links and content structure to improve relevance and search visibility.",
  },
  {
    title: "TECHNICAL SEO",
    desc: "Improving site speed, crawlability, indexing, mobile performance, structured data and technical health so search engines can understand your website better.",
  },
  {
    title: "CONTENT OPTIMIZATION",
    desc: "Creating and improving website content, blogs, landing pages and service pages to attract relevant traffic and support stronger organic rankings.",
  },
  {
    title: "GEO OPTIMIZATION",
    desc: "Optimizing your brand content for AI-powered search and generative discovery, helping your business appear in answers across platforms such as Google AI results, ChatGPT, Gemini and Perplexity.",
  },
  {
    title: "AUTHORITY BUILDING",
    desc: "Strengthening your brand's online credibility through content signals, backlinks, local listings, digital mentions and reputation-building activity.",
  },
  {
    title: "ANALYTICS & REPORTING",
    desc: "Tracking rankings, traffic, visibility, engagement, conversions and content performance with clear reports and monthly optimization recommendations.",
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

    // Scroll pin animation for left-side title on desktop viewports
    if (window.innerWidth > 991) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 120px",
        end: "bottom 320px",
        pin: containerRef.current?.querySelector("." + styles.optTitle),
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    }
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
            ARE <span className={styles.optTitlePlayfair}>Searching</span>
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
