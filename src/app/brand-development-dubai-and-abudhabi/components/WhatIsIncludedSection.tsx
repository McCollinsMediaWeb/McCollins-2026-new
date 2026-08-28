"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INCLUDED_POINTS = [
  {
    title: "BRAND STRATEGY",
    desc: "The foundation that defines what your brand stands for and how it wins.",
  },
  {
    title: "LOGO DESIGN",
    desc: "A distinctive mark built to work across every touchpoint and scale.",
  },
  {
    title: "VISUAL IDENTITY",
    desc: "Color, typography, imagery and guidelines that give your brand instant strength.",
  },
  {
    title: "BRAND POSITIONING",
    desc: "A clear market position and message that resonates with your audience.",
  },
  {
    title: "BRAND GUIDELINES",
    desc: "A complete playbook so your team applies the brand consistently.",
  },
  {
    title: "TAGLINES & NAMING",
    desc: "Names and lines that carry the brand's voice in a single phrase.",
  },
  {
    title: "LOOK & FEEL",
    desc: "A cohesive visual language across digital, print and physical spaces.",
  },
];

export default function WhatIsIncludedSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // GSAP ScrollTrigger pinning ONLY for desktop viewports
    mm.add("(min-width: 992px)", () => {
      if (containerRef.current && leftRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 120px",
          end: "bottom 550px",
          pin: leftRef.current,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      }
    });

    // Reveal cells as user scrolls down
    gsap.from(".included-cell-anim", {
      scrollTrigger: {
        trigger: ".included-table-trigger",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section className={styles.includedSection} ref={containerRef}>
      <div className={styles.includedContainer}>
        {/* Left Side: Pinned Sticky Title */}
        <div className={styles.includedLeft} ref={leftRef}>
          <span className={styles.includedKicker}>WHAT&apos;S INCLUDED</span>
          <h2 className={styles.includedTitle}>
            <span className={styles.includedTitleRow}>EVERYTHING A</span>
            <span className={styles.includedTitleRow}>BRAND NEEDS</span>
            <span className={styles.includedTitleItalic}>to launch and scale.</span>
          </h2>
        </div>

        {/* Right Side: 7 Points Table Grid */}
        <div className={`${styles.includedRight} included-table-trigger`}>
          <div className={styles.includedTable}>
            {INCLUDED_POINTS.map((point, i) => (
              <div key={i} className={`${styles.includedTableCell} included-cell-anim`}>
                <h3 className={styles.cellTitle}>{point.title}</h3>
                <p className={styles.cellDesc}>{point.desc}</p>
              </div>
            ))}
            {/* 8th cell to complete 2x4 grid table structure */}
            <div className={`${styles.includedTableCell} included-cell-anim`} aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
