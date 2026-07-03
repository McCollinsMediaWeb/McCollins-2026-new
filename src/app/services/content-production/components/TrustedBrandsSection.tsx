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

export default function TrustedBrandsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".trusted-title-anim", {
      scrollTrigger: {
        trigger: ".trusted-title-anim",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".trusted-card-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.trustedBrandsSection} ref={containerRef}>
      <h2 className={`${styles.trustedTitle} trusted-title-anim`}>
        TRUSTED BY LARGEST BRANDS<br/>
        FOR WEBSITE <span>Development</span>
      </h2>
      
      <div className={styles.cardsSectionHeader}>
        <div>Website/App Design</div>
        <div>info@mccollinsmedia.com</div>
      </div>
      
      <div className={styles.trustedGallery}>
        {/* Card 1 (Cut off on left) */}
        <div className={`${styles.trustedCard} ${styles.cardBlack} trusted-card-anim`}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>
              <span className={styles.titleItalic}>Custom</span><br/>WEB DEV
            </h3>
            <p className={styles.cardText}>
              Tailored and developed solutions that will ensure that you stand out and build your brand.
            </p>
          </div>
        </div>

        {/* Card 2: TECHNOLOGY First */}
        <div className={`${styles.trustedCard} ${styles.cardImageBg} trusted-card-anim`}>
          <Image src="/web-development-page/a7154514d69f6021c641cb61019bf95e8a0eb79e.png" alt="Technology First" fill />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>
              TECHNOLOGY <span className={styles.titleItalic}>First</span>
            </h3>
            <p className={styles.cardText}>
              Choose from a wide range of customizable website features that will make your site unique.
            </p>
          </div>
        </div>

        {/* Card 3: Annual MAINTENANCE */}
        <div className={`${styles.trustedCard} ${styles.cardWhite} trusted-card-anim`}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>
              <span className={styles.titleItalic}>Annual</span> MAINTENANCE
            </h3>
            <p className={styles.cardText}>
              Enjoy hassle-free website maintenance that will keep your site running smoothly.
            </p>
          </div>
        </div>

        {/* Card 4: SEO Friendly */}
        <div className={`${styles.trustedCard} ${styles.cardImageBg} trusted-card-anim`}>
          <Image src="/web-development-page/6d606ea59bad1d35476e75ce4157348c50f19eaa.png" alt="SEO Friendly" fill />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>
              SEO <span className={styles.titleItalic}>Friendly</span>
            </h3>
            <p className={styles.cardText}>
              Optimize your website for better search engine ranking with our cutting-edge SEO techniques.
            </p>
          </div>
        </div>

        {/* Card 5: Safe AND SECURE */}
        <div className={`${styles.trustedCard} ${styles.cardBlack} trusted-card-anim`}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>
              <span className={styles.titleItalic}>Safe</span> AND SECURE
            </h3>
            <p className={styles.cardText}>
              We deliver a complete brand platform with tools, and templates, enabling you to implement the new brand identity safely and professionally across every channel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
