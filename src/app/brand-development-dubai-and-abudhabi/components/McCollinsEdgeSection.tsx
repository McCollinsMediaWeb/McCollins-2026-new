"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function McCollinsEdgeSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".edge-anim-left", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });

    gsap.from(".edge-anim-right", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section className={styles.edgeSection} ref={containerRef}>
      <div className={styles.edgeContainer}>
        {/* Mobile Header Title (shown only on mobile <= 992px) */}
        <div className={styles.edgeHeaderMobile}>
          <span className={styles.edgeKicker}>THE MCCOLLINS EDGE</span>
          <h2 className={styles.edgeTitle}>
            BUILT FOR THE ARAB MARKET.<br />
            NOT TRANSLATED FOR IT.
          </h2>
        </div>

        {/* 3D Region Glass Map Image (appears below title on mobile) */}
        <div className={`${styles.edgeLeft} edge-anim-left`}>
          <Image
            src="/brand-development-dubai-and-abudhabi/arab-market-image-2.jpg"
            alt="Built for the Arab Market"
            width={720}
            height={480}
            className={styles.edgeImage}
          />
        </div>

        {/* Desktop Header & Subtitle / List */}
        <div className={`${styles.edgeRight} edge-anim-right`}>
          <div className={styles.edgeHeaderDesktop}>
            <span className={styles.edgeKicker}>THE MCCOLLINS EDGE</span>
            <h2 className={styles.edgeTitle}>
              BUILT FOR THE ARAB MARKET.<br />
              NOT TRANSLATED FOR IT.
            </h2>
          </div>
          <p className={styles.edgeSubtitle}>
            We understand the cultural cues, generational dynamics and bilingual nuance that make a brand feel trusted here - from heritage-conscious audiences to Gen Z digital natives across the GCC.
          </p>
          <ul className={styles.edgeList}>
            <li>
              <span className={styles.blueDot}>•</span>
              <span>Cultural intelligence in every color, symbol and typographic choice.</span>
            </li>
            <li>
              <span className={styles.blueDot}>•</span>
              <span>Messaging calibrated across generations, from Baby Boomers to Gen Z.</span>
            </li>
            <li>
              <span className={styles.blueDot}>•</span>
              <span>15+ years translating business objectives into regional brand narratives.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
