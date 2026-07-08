"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES_LIST = [
  "CAMPAIGN PLANNING",
  "BID MANAGEMENT",
  "KEYWORD RESEARCH",
  "PERFORMANCE MONITORING",
  "CAMPAIGN SETUP",
  "OPTIMIZATION",
  "AD CREATION",
  "ACHIEVING TARGET AUDIENCE",
];

const BRAND_ROW_1 = [
  { src: "/performance-marketing-page/Toshiba_logo 1.png", alt: "Toshiba", invert: false },
  { src: "/performance-marketing-page/Pioneer_logo 1.png", alt: "Pioneer", invert: false },
  { src: "/performance-marketing-page/1726e9065728cdac15b352e2f12806ac7e8d8152.png", alt: "Costa Coffee", invert: true },
  { src: "/performance-marketing-page/e5266d84baf6f6351e834f2df16d2e91f184472b.png", alt: "MMI", invert: true },
  { src: "/performance-marketing-page/01da977058fbe7ae668e70fdba2d1606a7f04808.png", alt: "Oak Berry", invert: true },
  { src: "/performance-marketing-page/d64d76068b1af6fc7bc1b261cc55458b42b14a9b.png", alt: "Dubai Airport Freezone", invert: true },
  { src: "/performance-marketing-page/a61ab15224c5345cf2133348806665ebaa85d9f4.png", alt: "Fujifilm", invert: true },
];

const BRAND_ROW_2 = [
  { src: "/performance-marketing-page/ab2fb4ef7f195c0861ca0c73d1425ad805364866.png", alt: "Trader Vic's", invert: true },
  { src: "/performance-marketing-page/a003524f707123fcfa5b46fe4892f55447ab3575.png", alt: "Wagamama", invert: true },
  { src: "/performance-marketing-page/ee3784823b578a329d9b5666d1d528a22cad4adc.png", alt: "RTA", invert: true },
  { src: "/performance-marketing-page/82aaeb05ae962192874265855710ff4beae7b941.png", alt: "Energizer", invert: true },
  { src: "/performance-marketing-page/fb79051faf0e0e74e58f986b0209d37e040f223b.png", alt: "Damac", invert: true },
];

export default function SolutionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title Animation
    gsap.from(".solutions-title-word", {
      scrollTrigger: {
        trigger: ".solutions-title-trigger",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });

    // List Items Stagger
    gsap.from(".solution-item-anim", {
      scrollTrigger: {
        trigger: ".solutions-list-trigger",
        start: "top 80%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power2.out",
    });

    // Image Animation
    gsap.from(".solutions-img-anim", {
      scrollTrigger: {
        trigger: ".solutions-img-anim",
        start: "top 80%",
      },
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Brand logos stagger reveal
    gsap.from(".solutions-brand-anim", {
      scrollTrigger: {
        trigger: ".solutions-brands-trigger",
        start: "top 85%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <section className={styles.solutionsSection} ref={containerRef}>
      {/* Top solutions block */}
      <div className={styles.solutionsContent}>
        <div className={styles.solutionsLeft}>
          <div className="solutions-title-trigger">
            <h2 className={styles.solutionsTitle}>
              <span className={`${styles.solutionsTitleBold} solutions-title-word`}>
                THE BEST SOLUTIONS
              </span>
              <br />
              <span className={`${styles.solutionsTitleBold} solutions-title-word`}>
                FOR YOUR{" "}
              </span>
              <span className={`${styles.playfairText} ${styles.solutionsTitleItalic} solutions-title-word`}>
                Business
              </span>
            </h2>
          </div>

          <div className={`${styles.solutionsList} solutions-list-trigger`}>
            {SERVICES_LIST.map((service, index) => (
              <div key={index} className={`${styles.solutionItem} solution-item-anim`}>
                <div className={styles.solutionsIcon}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M18 6H10M18 6V14"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                  </svg>
                </div>
                <span className={styles.solutionText}>{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.solutionsRight} solutions-img-anim`}>
          <div className={styles.solutionsImageWrapper}>
            <Image
              src="/performance-marketing-page/6f33462c8da5995adbf2682d35b3dc80db6dcc73.jpg"
              alt="Performance Marketing Workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.solutionsImage}
              priority
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className={styles.dividerLine} />

      {/* Brand Logos section */}
      <div className={`${styles.solutionsBrandsSection} solutions-brands-trigger`}>
        <div className={styles.brandsRowStatic}>
          {BRAND_ROW_1.map((brand, i) => (
            <div key={`brand-1-${i}`} className={`${styles.brandLogoWrapperStatic} solutions-brand-anim`}>
              <div className={styles.brandLogoInner}>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  sizes="120px"
                  className={brand.invert ? styles.brandLogoInverted : styles.brandLogoNormal}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.brandsRowStatic}>
          {BRAND_ROW_2.map((brand, i) => (
            <div key={`brand-2-${i}`} className={`${styles.brandLogoWrapperStatic} solutions-brand-anim`}>
              <div className={styles.brandLogoInner}>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  sizes="120px"
                  className={brand.invert ? styles.brandLogoInverted : styles.brandLogoNormal}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider at the bottom */}
      <div className={styles.dividerLine} />
    </section>
  );
}
