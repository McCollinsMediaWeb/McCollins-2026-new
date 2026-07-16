"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BlueArrow = () => (
  <span className={styles.blueArrow}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  </span>
);

export default function ArabMarketsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".arab-title-reveal", {
      scrollTrigger: {
        trigger: ".arab-title-reveal",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".arab-block-reveal", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out"
    });

    gsap.from(".arab-img-reveal", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      scale: 1.05,
      y: 40,
      opacity: 0,
      duration: 1.4,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.arabMarketsSection} ref={containerRef}>
      <h2 className={`${styles.arabTitle} arab-title-reveal`}>
        <strong>Understanding the</strong> <br />
        <strong>ARAB</strong> <span>Markets</span>
      </h2>

      <div className={styles.arabGridContainer}>
        {/* Row 1 */}
        <div className={styles.arabRow}>
          {/* Row 1 - Left Column: Text Blocks */}
          <div className={styles.arabRowColText}>
            <div className={`${styles.arabTextBlock} arab-block-reveal`}>
              <h3 className={styles.arabBlockTitle}>
                <BlueArrow /> <span className={styles.titleItalic}>Cultural</span>{" "}INTELLIGENCE
              </h3>
              <p className={styles.arabBlockText}>
                We understand the subtle cues - colors, symbols, language, and typography - that carry deep meaning within Arab societies. Our designs avoid generic global templates and instead draw from cultural codes that inspire trust and familiarity.
              </p>
            </div>

            <div className={`${styles.arabTextBlock} arab-block-reveal`}>
              <h3 className={styles.arabBlockTitle}>
                <BlueArrow /> GENERATIONAL{" "}<span className={styles.titleItalic}>Dynamics</span>
              </h3>
              <p className={styles.arabBlockText}>
                The Arab consumer is both rooted in tradition and ambitious for the future. From heritage-conscious Baby Boomers to Gen Z digital natives, our strategies are calibrated to speak fluently across generations.
              </p>
            </div>
          </div>

          {/* Row 1 - Right Column: Map Image */}
          <div className={`${styles.arabImageWrapper} ${styles.arabMapImageWrapper} arab-img-reveal`}>
            <Image
              src="/brand-development/e86a321fecf44762b57483e73504022703c4c986.webp"
              alt="Arab Region Map"
              width={800}
              height={500}
              className={styles.arabImage}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className={styles.arabRow}>
          {/* Row 2 - Left Column: Supermarket Image */}
          <div className={`${styles.arabImageWrapper} ${styles.arabSupermarketImageWrapper} arab-img-reveal`}>
            <Image
              src="/brand-development/2.webp"
              alt="Arab Man Supermarket"
              width={800}
              height={500}
              className={styles.arabImage}
              style={{ objectPosition: "center top" }}
            />
          </div>

          {/* Row 2 - Right Column: Text Blocks */}
          <div className={styles.arabRowColText}>
            <div className={`${styles.arabTextBlock} arab-block-reveal`}>
              <h3 className={styles.arabBlockTitle}>
                <BlueArrow /> <span className={styles.titleItalic}>Market</span> ASPIRATIONS
              </h3>
              <p className={styles.arabBlockText}>
                Across the GCC and wider Middle East, luxury, innovation, and lifestyle drive consumer decisions. We position brands to align with these aspirations - ensuring they are not just seen, but desired.
              </p>
            </div>

            <div className={`${styles.arabTextBlock} arab-block-reveal`}>
              <h3 className={styles.arabBlockTitle}>
                <BlueArrow /> <span className={styles.titleItalic}>Language</span> &amp; COMMUNICATION
              </h3>
              <p className={styles.arabBlockText}>
                Arabic is not just a language, but an identity marker. We craft bilingual and culturally adaptive messaging systems that preserve brand prestige while ensuring clarity and resonance.
              </p>
            </div>

            <div className={`${styles.arabTextBlock} arab-block-reveal`}>
              <h3 className={styles.arabBlockTitle}>
                <BlueArrow /> <span className={styles.titleItalic}>The</span> MCCOLLINS EDGE
              </h3>
              <p className={styles.arabBlockText}>
                With over 15 years of regional expertise, we have helped global and local brands thrive by translating business objectives into culturally powerful brand narratives. We don&apos;t just enter the Arab market - we make brands belong to it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
