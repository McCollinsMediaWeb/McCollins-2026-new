"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CASE_STUDIES = [
  {
    title: "PIONEER GULF",
    desc: "Social Campaign & Video Production · Electronics",
    image: "/works/pioneer-new.png",
    link: "/case-study/pioneer",
  },
  {
    title: "VOSS WATER",
    desc: "Influencer & Viral Reels Strategy · F&B",
    image: "/works/53e7fd625b0b794ee51a59918952d03afce9746d.jpg",
    link: "/case-study/voss",
  },
  {
    title: "MAPEI GCC",
    desc: "B2B Social & LinkedIn Growth · Construction",
    image: "/works/de029bcf0b4f13aabbc47e1305b70c7793a2d545.webp",
    link: "/case-study/mapei",
  },
];

export default function SelectedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".work-header-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }).from(
        ".work-card-anim",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.workSection} ref={sectionRef}>
      <div className={styles.workContainer}>
        {/* Showcase Header */}
        <div className={styles.workHeaderBand}>
          <div>
            <span className={`${styles.workKicker} work-header-anim`}>SELECTED WORK</span>
            <h2 className={`${styles.workTitle} work-header-anim`}>
              BRANDS WE HAVE{" "}
              <span className={styles.workTitleItalic}>
                scaled.
              </span>
            </h2>
          </div>

          <Link href="/works" className={`${styles.seeAllWorkLink} work-header-anim`}>
            <span>See All Work</span>
            <svg className={styles.seeAllWorkSvg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* 3-Column Visual Case Studies */}
        <div className={styles.workGrid}>
          {CASE_STUDIES.map((cs) => (
            <Link key={cs.title} href={cs.link} className={`${styles.workCard} work-card-anim`} style={{ textDecoration: "none" }}>
              <div className={styles.workImageWrapper}>
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.workImage}
                  unoptimized
                />
                <div className={styles.workOverlay} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div className={styles.workMetaRow}>
                  <h3 className={styles.workClientName}>{cs.title}</h3>
                  {/* <span className={styles.workYearTag}>{cs.subtitle}</span> */}
                </div>
                <p className={styles.workDescription}>{cs.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
