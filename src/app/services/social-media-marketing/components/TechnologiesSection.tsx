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

export default function TechnologiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".tech-title-anim", {
      scrollTrigger: {
        trigger: ".tech-title-anim",
        start: "top 85%",
      },
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".tech-logo-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.2)"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.techSection} ref={containerRef}>
      <h2 className={`${styles.techTitle} tech-title-anim`}>
        TECHNOLOGIES WE <span>Work With</span>
      </h2>
      
      <div className={styles.techLogos}>
        <div className="tech-logo-anim">
          <Image src="/web-development-page/913aa4514d5b9ede463cca8fe16946e2925b7529.png" alt="Shopify" width={100} height={60} className={styles.techLogo} />
        </div>
        <div className="tech-logo-anim">
          <Image src="/web-development-page/8427bc285afc731e1a149c9b67260ac4ecb62605.png" alt="React" width={100} height={60} className={styles.techLogo} />
        </div>
        <div className="tech-logo-anim">
          <Image src="/web-development-page/e426f4bf1eb0a59fc34b801c982f5e96dfc1a789.png" alt="WordPress" width={100} height={60} className={styles.techLogo} />
        </div>
        <div className="tech-logo-anim">
          <Image src="/web-development-page/012f3491769ef92e37f35204a5b558277a1a2dfa.png" alt="React Native" width={100} height={60} className={styles.techLogo} />
        </div>
        <div className="tech-logo-anim">
          <Image src="/web-development-page/b23bb3e49a49303bb618dc460dc8db4d925805bc.png" alt="Next.js" width={100} height={60} className={styles.techLogo} />
        </div>
      </div>
    </section>
  );
}
