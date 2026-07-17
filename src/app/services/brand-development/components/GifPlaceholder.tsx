"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GifPlaceholder() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".gif-box", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.gifSection} ref={containerRef}>
      <div className={`${styles.gifBox} gif-box`} style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src="/brand-development/new-brand-gif.gif"
          alt="Brand Development Process"
          fill
          unoptimized
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.divider}></div>
    </section>
  );
}
