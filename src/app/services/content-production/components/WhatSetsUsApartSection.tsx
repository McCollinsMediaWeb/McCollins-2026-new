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

export default function WhatSetsUsApartSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade in and slide up each sets row content when scrolled into view
    const rows = gsap.utils.toArray<HTMLElement>(".sets-row-container");

    rows.forEach((row) => {
      const img = row.querySelector(".sets-img-anim");
      const text = row.querySelector(".sets-text-anim");

      if (img) {
        gsap.from(img, {
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      }

      if (text) {
        gsap.from(text, {
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 1.2,
          delay: 0.15,
          ease: "power3.out"
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section className={styles.setsSection} ref={containerRef}>
      <div className={styles.setsInner}>
        <h2 className={styles.setsTitle}>
          WHAT SETS US <span className={styles.setsTitleItalic}>Apart</span>
        </h2>

        {/* Row 1 */}
        <div className={`${styles.setsRow} sets-row-container`}>
          <div className={`${styles.setsImageWrapper} sets-img-anim`}>
            <Image
              src="/content-productions-page/1.webp"
              alt="Exceptional Creativity"
              fill
              className={styles.setsImage}
            />
          </div>
          <div className={`${styles.setsContent} sets-text-anim`}>
            <h3 className={styles.setsHeading}>
              EXCEPTIONAL <span className={styles.setsHeadingItalic}>Creativity</span>
            </h3>
            <p className={styles.setsText}>
              We engineer avant-grade visual concepts that bridge the gap between disruptive artistry and strategic brand intent to command absolute market authority.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className={`${styles.setsRow} ${styles.reversed} sets-row-container`}>
          <div className={`${styles.setsContent} sets-text-anim`}>
            <h3 className={styles.setsHeading}>
              PROFESSIONALISM &amp;<br />
              RELIABILITY
            </h3>
            <p className={styles.setsText}>
              Our reputation is built on the architecture of trust, combining seamless project management with a relentless commitment to deadline-driven excellence and premium output.
            </p>
          </div>
          <div className={`${styles.setsImageWrapper} sets-img-anim`}>
            <Image
              src="/content-productions-page/2.webp"
              alt="Professionalism & Reliability"
              fill
              className={styles.setsImage}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className={`${styles.setsRow} sets-row-container`}>
          <div className={`${styles.setsImageWrapper} sets-img-anim`}>
            <Image
              src="/content-productions-page/3.webp"
              alt="State-of-the-Art Equipment"
              fill
              className={styles.setsImage}
            />
          </div>
          <div className={`${styles.setsContent} sets-text-anim`}>
            <h3 className={styles.setsHeading}>
              STATE-OF-THE-ART<br />
              EQUIPMENT
            </h3>
            <p className={styles.setsText}>
              Precision-engineered content powered by a world-class inventory of the latest cinematic technology and specialized production hardware.
            </p>
          </div>
        </div>

        {/* Row 4 */}
        <div className={`${styles.setsRow} ${styles.reversed} sets-row-container`}>
          <div className={`${styles.setsContent} sets-text-anim`}>
            <h3 className={styles.setsHeading}>
              FULL-SERVICE <span className={styles.setsHeadingItalic}>Solution</span>
            </h3>
            <p className={styles.setsText}>
              We provide a comprehensive production ecosystem, architecting every phase from conceptual blueprinting to high-fidelity post-production to ensure a seamless, turnkey brand experience.
            </p>
          </div>
          <div className={`${styles.setsImageWrapper} sets-img-anim`}>
            <Image
              src="/content-productions-page/4.webp"
              alt="Full-Service Solution"
              fill
              className={styles.setsImage}
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className={`${styles.setsRow} sets-row-container`}>
          <div className={`${styles.setsImageWrapper} sets-img-anim`}>
            <Image
              src="/content-productions-page/5.webp"
              alt="State-of-the-Art Equipment"
              fill
              className={styles.setsImage}
            />
          </div>
          <div className={`${styles.setsContent} sets-text-anim`}>
            <h3 className={styles.setsHeading}>
              TAILORED <span className={styles.setsHeadingItalic}>Approach</span>
            </h3>
            <p className={styles.setsText}>
              Our process is a meticulous study of your brand's
              unique DNA, resulting in a precision-engineered
              production roadmap tailored for maximum market
              resonance.
            </p>
          </div>
        </div>

        {/* Row 6 */}
        <div className={`${styles.setsRow} ${styles.reversed} sets-row-container`}>
          <div className={`${styles.setsContent} sets-text-anim`}>
            <h3 className={styles.setsHeading}>
              <span className={styles.setsHeadingItalic}>Client</span> Satisfaction
            </h3>
            <p className={styles.setsText}>
              Precision-engineered results and uncompromised
              service standards designed to ensure total brand
              partner confidence and long-term success.
            </p>
          </div>
          <div className={`${styles.setsImageWrapper} sets-img-anim`}>
            <Image
              src="/content-productions-page/6.webp"
              alt="Full-Service Solution"
              fill
              className={styles.setsImage}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
