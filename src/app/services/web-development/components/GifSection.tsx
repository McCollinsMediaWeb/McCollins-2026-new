"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GifSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".gif-box-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.gifSection} ref={containerRef}>
      <div className={`${styles.gifBox} gif-box-anim`} style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src="/web-development-page/web-dev-gif.gif"
          alt="Web Development Process"
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>
    </section>
  );
}
