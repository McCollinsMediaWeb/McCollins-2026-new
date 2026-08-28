"use client";

import React, { useRef } from "react";
import Link from "next/link";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PrecisionCtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".precision-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section className={styles.precisionSection} ref={containerRef}>
      <div className={styles.precisionContainer}>
        <h2 className={`${styles.precisionTitle} precision-anim`}>
          Precision from the first click.
        </h2>
        <p className={`${styles.precisionSubtitle} precision-anim`}>
          Book a free strategy call and see how we&apos;d approach your brand.
        </p>
        <div className="precision-anim">
          <Link href="#strategy-form" className={styles.precisionBtn}>
            BOOK A STRATEGY CALL
          </Link>
        </div>
      </div>
    </section>
  );
}
