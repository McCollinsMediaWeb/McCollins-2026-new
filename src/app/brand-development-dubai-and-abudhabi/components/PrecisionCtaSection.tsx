"use client";

import React, { useRef } from "react";
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

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("strategy-form");
    if (target) {
      const lenis = (window as unknown as { lenis?: { scrollTo: (el: HTMLElement, opts?: object) => void } }).lenis;
      if (lenis) {
        lenis.scrollTo(target, { offset: -100, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState(null, "", "#strategy-form");
    }
  };

  return (
    <section className={styles.precisionSection} ref={containerRef}>
      <div className={styles.precisionContainer}>
        {/* <h2 className={`${styles.precisionTitle} precision-anim`}>
          Precision from the first click.
        </h2> */}
        <h2 className={`${styles.precisionTitle} precision-anim`}>
          Enquire Now.
        </h2>
        <p className={`${styles.precisionSubtitle} precision-anim`}>
          Book a free strategy call and see how we&apos;d approach your brand.
        </p>
        <div className="precision-anim">
          <a
            href="#strategy-form"
            onClick={handleScrollToForm}
            className={styles.precisionBtn}
          >
            BOOK A STRATEGY CALL
          </a>
        </div>
      </div>
    </section>
  );
}
