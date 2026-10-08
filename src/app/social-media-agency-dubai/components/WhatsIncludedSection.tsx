"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CAPABILITIES = [
  {
    index: "01 // Architecture",
    title: "Strategy Planning",
    desc: "Platform-specific social architectures aligning enterprise business goals, regional consumer habits, cultural content pillars, and relentless follower growth loops.",
    action: "Audience Matrix",
  },
  {
    index: "02 // Motion",
    title: "Viral Reels & Short-Form",
    desc: "Reels, TikToks, and snackable video built around 3-second retention hooks, regional sound trends, rapid visual storytelling, and platform-native formats that break algorithms.",
    action: "Full Video Lab",
  },
  {
    index: "03 // Engagement",
    title: "Community Management",
    desc: "Active community building through lightning-fast bilingual responses, inbound direct messages, interactive story quizzes, UGC prompts, and strategic comment moderation.",
    action: "7-Day Coverage",
  },
  {
    index: "04 // Delivery",
    title: "Platform Management",
    desc: "Flawless calendar orchestration across Instagram, TikTok, Facebook, LinkedIn, and Snapchat with high-cadence scheduling, grid aesthetics, and tone governance.",
    action: "Multi-Platform Cadence",
  },
  {
    index: "05 // Moments",
    title: "Campaign Buzz",
    desc: "High-impact viral stunts and seasonal moments tailored for Ramadan, UAE National Day, Saudi Founding Day, flagship store launches, and city-wide activations.",
    action: "GCC Cultural Calendar",
  },
  {
    index: "06 // Creators",
    title: "Influencer Outreach",
    desc: "Bespoke creator shortlisting, rate negotiation, gifting campaigns, and creative oversight to guarantee genuine brand advocacy rather than hollow placement.",
    action: "Vetted GCC Creators",
  },
  {
    index: "07 // Scale",
    title: "Performance Marketing",
    desc: "Hyper-targeted paid amplification, custom lookalike audience clusters, and conversion-optimized ad funnels turning organic momentum into commercial revenue.",
    action: "ROAS Optimization",
  },
  {
    index: "08 // Intel",
    title: "Analytics & Reporting",
    desc: "Executive dashboards tracking reach velocity, audience retention curves, sentiment share, and commercial attribution with clear month-over-month directives.",
    action: "Executive Briefings",
  },
];

const SCOPE_PILLS = [
  "Instagram Management",
  "TikTok Content",
  "Snapchat Creative",
  "LinkedIn B2B",
  "Viral Reels",
  "Community Growth",
];

export default function WhatsIncludedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isInteractingRef = useRef(false);

  // Sync active dot on horizontal scroll
  const handleScroll = () => {
    if (!gridRef.current) return;
    const container = gridRef.current;
    const scrollLeft = container.scrollLeft;
    const item = container.firstElementChild as HTMLElement | null;
    const itemWidth = item ? item.offsetWidth + 14 : 280;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(index, 0), CAPABILITIES.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!gridRef.current) return;
    const container = gridRef.current;
    const card = container.children[index] as HTMLElement | undefined;
    if (card) {
      const paddingLeft = parseFloat(getComputedStyle(container).paddingLeft) || 0;
      const targetLeft = card.offsetLeft - paddingLeft;
      container.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  // Gentle auto-scroll every 3.6s on mobile when user isn't interacting
  useEffect(() => {
    const timer = setInterval(() => {
      if (
        typeof window !== "undefined" &&
        window.innerWidth <= 768 &&
        gridRef.current &&
        !isInteractingRef.current
      ) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % CAPABILITIES.length;
          const container = gridRef.current;
          if (container && container.children[next]) {
            const card = container.children[next] as HTMLElement;
            const paddingLeft = parseFloat(getComputedStyle(container).paddingLeft) || 0;
            const targetLeft = card.offsetLeft - paddingLeft;
            container.scrollTo({
              left: targetLeft,
              behavior: "smooth",
            });
          }
          return next;
        });
      }
    }, 3600);

    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".cap-editorial-anim", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      }).from(
        ".bento-cell-anim",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.5"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.capabilitiesSection} ref={sectionRef}>
      <div className={styles.capabilitiesContainer}>
        <div className={styles.capabilitiesGrid}>
          {/* Left Editorial Column */}
          <div className={styles.capabilitiesEditorial}>
            <div className={styles.capabilitiesHeader}>
              <div className={`${styles.sectionKicker} cap-editorial-anim`}>WHAT&apos;S INCLUDED</div>
              <h2 className={`${styles.sectionTitle} cap-editorial-anim`}>
                Everything a brand needs
                <span className={styles.sectionTitleItalic}>
                  to dominate feeds and scale.
                </span>
              </h2>
              <p className={`${styles.sectionDescription} cap-editorial-anim`}>
                We eliminate disjointed marketing silos. Every retainer operates as an integrated creative engine, marrying cultural storytelling with algorithmic precision across all leading platforms.
              </p>
            </div>

            {/* Tech Ecosystem Coverage Pills */}
            <div className={`${styles.scopeWrapper} cap-editorial-anim`}>
              <div className={styles.scopeLabel}>Ecosystem Coverage</div>
              <div className={styles.scopePills}>
                {SCOPE_PILLS.map((pill) => (
                  <span key={pill} className={styles.scopePill}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Bento Grid / Mobile Horizontal Swipe Carousel */}
          <div className={styles.bentoContainer}>
            <div
              ref={gridRef}
              className={styles.bentoGrid}
              onScroll={handleScroll}
              onTouchStart={() => {
                isInteractingRef.current = true;
              }}
              onTouchEnd={() => {
                setTimeout(() => {
                  isInteractingRef.current = false;
                }, 3000);
              }}
              onMouseEnter={() => {
                isInteractingRef.current = true;
              }}
              onMouseLeave={() => {
                isInteractingRef.current = false;
              }}
            >
              {CAPABILITIES.map((cap) => (
                <div key={cap.index} className={`${styles.bentoCell} bento-cell-anim`}>
                  <div className={styles.bentoCellContent}>
                    <span className={styles.bentoIndex}>{cap.index}</span>
                    <h3 className={styles.bentoTitle}>{cap.title}</h3>
                    <p className={styles.bentoDesc}>{cap.desc}</p>
                  </div>
                  <div className={styles.bentoFooter}>
                    <span>{cap.action}</span>
                    <svg className={styles.bentoArrowSvg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Swipe Indicators & Navigation */}
            <div className={styles.mobileCarouselNav}>
              <span className={styles.mobileSwipeHint}>
                <span>Swipe to explore</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className={styles.mobileDots}>
                {CAPABILITIES.map((_, i) => (
                  <span
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`${styles.mobileDot} ${activeIndex === i ? styles.mobileDotActive : ""}`}
                    onClick={() => scrollToIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
