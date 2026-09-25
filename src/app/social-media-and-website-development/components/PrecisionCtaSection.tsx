"use client";

import React, { useRef } from "react";
import Link from "next/link";
import styles from "../page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PrecisionCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".cta-headline-anim", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      }).from(
        ".cta-content-anim",
        {
          y: 25,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.ctaSection} ref={sectionRef}>
      <div className={styles.ctaContainer}>
        {/* Headline Band */}
        <div className={`${styles.ctaHeadlineBand} cta-headline-anim`}>
          <h2 className={styles.ctaHeadline}>
            Precision from the{" "}
            <span className={styles.ctaHeadlineItalic}>
              first click.
            </span>
          </h2>
        </div>

        {/* Action Content Grid */}
        <div className={styles.ctaContentGrid}>
          <div className={styles.ctaLeft}>
            <span className={`${styles.sectionKicker} cta-content-anim`}>START A CONVERSATION</span>
            <a href="mailto:info@mccollinsmedia.com" className={`${styles.ctaEmailLink} cta-content-anim`}>
              info@mccollinsmedia.com
            </a>
            <p className={`${styles.sectionDescription} cta-content-anim`} style={{ maxWidth: "540px" }}>
              Our senior technical architects and creative directors in Dubai are ready to blueprint your digital platform.
            </p>
          </div>

          <div className={`${styles.ctaActionBtns} cta-content-anim`}>
            <a href="#strategy-form" className={styles.ctaPrimaryBtn}>
              <span>Request a Strategy Call</span>
              <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondaryBtn}
            >
              <span>WhatsApp Direct</span>
              <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
