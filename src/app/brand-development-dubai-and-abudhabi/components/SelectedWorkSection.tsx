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
    image: "/brand-development-dubai-and-abudhabi/pioneer-image.png",
    link: "/case-study/pioneer",
  },
  {
    title: "VOSS",
    subtitle: "Brand Development · F&B",
    image: "/brand-development-dubai-and-abudhabi/voss-image.png",
    link: "/case-study/voss",
  },
  {
    title: "Mapei",
    subtitle: "Brand Positioning · Construction",
    image: "/brand-development-dubai-and-abudhabi/mapei-image.png",
    link: "/case-study/mapei",
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
  }, { scope: containerRef });

  return (
    <section className={styles.selectedWorkSection} ref={containerRef}>
      <div className={styles.selectedWorkContainer}>
        {/* Header */}
        <div className={styles.selectedWorkHeader}>
          <div>
            <span className={styles.selectedWorkKicker}>SELECTED WORK</span>
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
      </div>
    </section>
  );
}
