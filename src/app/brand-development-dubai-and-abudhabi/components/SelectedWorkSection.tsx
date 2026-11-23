"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WORKS = [
  {
    title: "Pioneer",
    subtitle: "Brand Identity · Electronics",
    image: "/works/pioneer-new.png",
    link: "/case-study/pioneer",
  },
  {
    title: "VOSS",
    subtitle: "Brand Development · F&B",
    image: "/works/53e7fd625b0b794ee51a59918952d03afce9746d.jpg",
    link: "/case-study/voss",
  },
  {
    title: "Mapei",
    subtitle: "Brand Positioning · Construction",
    image: "/works/de029bcf0b4f13aabbc47e1305b70c7793a2d545.webp",
    link: "/case-study/mapei",
  },
  // {
  //   title: "Cleaning Superstore",
  //   subtitle: "Brand Development · Retail",
  //   image: "/brand-development-dubai-and-abudhabi/cleaning-superstore.jpg",
  //   link: "/case-study/cleaning-superstore",
  // },

  {
    title: "Dubai International Hotel",
    subtitle: "Brand Development · Hotel",
    image: "/dxb/144c3fd5e33f3f0eebecf10c48732aa24231bead.webp",
    link: "/case-study/dxb-hotel",
  },
];

const AWARDS = [
  {
    year: "2012",
    title: "BEST SOCIAL MEDIA Campaign - Government",
    awardedBy: "Awarded by: Internet Awards Middle East",
    description:
      "Won for the Madinati Campaign which created awareness about how you could be a good citizen by suggesting areas of improvement to the Public Transport system of Dubai.",
    image: "/about-us-page/award-1.webp",
  },
  {
    year: "2013",
    title: "SME Stars of Business Award",
    awardedBy: "Awarded by: ADCB SME",
    description:
      "Our Director, Meghna Kothari, was conferred SME Admirable Woman Entrepreneur of the Year Award for strategic innovation and business achievements.",
    image: "/about-us-page/award-2.webp",
  },
  {
    year: "2013",
    title: "BEST SOCIAL MEDIA Strategy - Government",
    awardedBy: "Awarded by: The Marketing Awards",
    description:
      "Won for remarkable efficiency in using social media networks to serve government communication and interaction, as well as to its interaction with its customers and keenness to real-time response.",
    image: "/about-us-page/award-3.webp",
  },
];

export default function SelectedWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".work-card-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
    });

    gsap.from(".award-card-anim", {
      scrollTrigger: {
        trigger: ".awards-trigger",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section className={styles.selectedWorkSection} ref={containerRef}>
      <div className={styles.selectedWorkContainer}>
        {/* Header */}
        <div className={styles.selectedWorkHeader}>
          <div>
            <span className={styles.selectedWorkKicker}>BRANDING CASE STUDIES</span>
            <h2 className={styles.selectedWorkTitle}>
              BRANDS WE&apos;VE BUILT AND <span className={styles.selectedWorkItalic}>Rebuilt.</span>
            </h2>
          </div>
          <Link href="/works" className={styles.seeAllWorkLink}>
            SEE ALL WORK &rarr;
          </Link>
        </div>

        {/* Grid */}
        <div className={styles.selectedWorkGrid}>
          {WORKS.map((work, idx) => (
            <Link key={idx} href={work.link} className={`${styles.workCard} work-card-anim`}>
              <div className={styles.workImageWrapper}>
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1200px) 50vw, 1720px"
                  className={styles.workImage}
                />
              </div>
              <div className={styles.workMeta}>
                <h3 className={styles.workTitle}>{work.title}</h3>
                <p className={styles.workSubtitle}>{work.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Agency Recognition / Awards Section */}
        <div className={styles.awardsSection}>
          <div className={styles.awardsHeader}>
            <span className={styles.selectedWorkKicker}>AGENCY RECOGNITION</span>
            <h3 className={styles.awardsMainTitle}>
              AWARDS &amp; <span className={styles.selectedWorkItalic}>Recognition.</span>
            </h3>
          </div>

          {/* <div className={styles.awardsInfoRow}>
            <div className={styles.awardsInfoLeft}>
              RECOGNITION THAT<br />REFLECTS THE WORK
            </div>
            <div className={styles.awardsInfoRight}>
              1) BEST SOCIAL MEDIA CAMPAIGN - GOVERNMENT<br />
              2) SME STARS OF BUSINESS AWARD<br />
              3) BEST SOCIAL MEDIA STRATEGY - GOVERNMENT
            </div>
          </div> */}

          <div className={`${styles.awardsGrid} awards-trigger`}>
            {AWARDS.map((award, index) => (
              <div key={index} className={`${styles.awardCard} award-card-anim`}>
                <div className={styles.awardImageWrapper}>
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.awardImage}
                  />
                  {/* <span className={styles.awardYearBadge}>{award.year}</span> */}
                </div>
                <h4 className={styles.awardTitle}>{award.title}</h4>
                <div className={styles.awardDetails}>
                  <div className={styles.awardAwardedBy}>{award.awardedBy}</div>
                  <p className={styles.awardDescription}>{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
