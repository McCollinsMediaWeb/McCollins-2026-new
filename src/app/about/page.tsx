"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const TEAM_MEMBERS = [
  { img: "/about-us-page/image2.jpg", name: "Ahmed", title: "Design Director" },
  { img: "/about-us-page/image3.jpg", name: "Sarah", title: "Creative Lead" },
  { img: "/about-us-page/image4.jpg", name: "Omar", title: "Tech Lead" },
  { img: "/about-us-page/image5.jpg", name: "Zaid", title: "Marketing Head" },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    // Hero Intro Animation
    const titleChars = titleRef.current?.querySelectorAll("." + styles.titleChar);
    if (titleChars && titleChars.length > 0) {
      gsap.to(titleChars, {
        y: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.2,
      });
    }

    const heroImage = containerRef.current.querySelector("." + styles.heroImageWrapper);
    const heroDetails = containerRef.current.querySelector("." + styles.heroDetails);

    if (heroImage) {
      gsap.from(heroImage, {
        y: 60,
        opacity: 0,
        scale: 0.98,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.4,
      });
    }

    if (heroDetails) {
      gsap.from(heroDetails, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.8,
      });
    }

    // Scroll Reveals
    const scrollRevealElements = containerRef.current.querySelectorAll(".about-reveal");

    scrollRevealElements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        scale: 0.98,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "all",
      });
    });

  }, { scope: containerRef, dependencies: [mounted] });

  if (!mounted) return null;

  return (
    <div className={styles.aboutContainer} ref={containerRef}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle} ref={titleRef}>
          <span className={styles.titleWord}>
            {"ABOUT".split("").map((char, i) => (
              <span key={i} className={styles.titleChar} style={{ fontFamily: "var(--font-delight)" }}>
                {char}
              </span>
            ))}
          </span>
          <span className={styles.titleWord}>
            {"US".split("").map((char, i) => (
              <span key={i} className={styles.titleChar} style={{ fontFamily: "var(--font-playfair-display)", fontStyle: "italic" }}>
                {char}
              </span>
            ))}
          </span>
        </h1>

        <div className={styles.heroImageWrapper}>
          <Image
            src="/about-us-page/image6.jpg"
            alt="About McCollins Media"
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.heroDetails}>
          <div className={styles.heroDate}>THE McCOLLINS<br />ASCENSION MODEL</div>
          <div className={styles.heroDesc}>
            <div className={styles.heroDate}>1) DECODE<br />2) DEFINE<br />3) DESIGN<br />4) DEPLOY<br />5) DOMINATE</div>
            <p className={styles.heroDate} style={{ fontWeight: '400', color: '#3C3A3E', marginTop: '30px' }}>We follow a proven five-step model to turn strategy into faster, measurable growth: Decode, Define, Design, Deploy, and Dominate. Every stage is built to create clarity, accelerate execution, and deliver results that move brands ahead.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.teamTopRow}>
          <div className={`${styles.leaderImageWrapper} about-reveal`}>
            <Image
              src="/about-us-page/image1.jpg"
              alt="Meghna Chettri"
              width={800}
              height={1000}
              className={styles.leaderImage}
            />
          </div>
          <div className={`${styles.leaderQuote} about-reveal`}>
            "We believe in the power of creative disruption. Our team thrives on turning complex challenges into seamless, elegant digital experiences that captivate and convert."
            <span className={styles.leaderName}>Meghna Chettri</span>
          </div>
        </div>

        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className={`${styles.teamMember} about-reveal hover-target`}>
              <div className={styles.memberImageWrapper}>
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <span className={styles.memberName}>{member.name}</span>
                <span className={styles.memberTitle}>{member.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark "Designed to Transform" Section */}
      <section className={styles.darkSection}>
        <div className={`${styles.darkTopRow} about-reveal`}>
          <h2 className={styles.darkTitle}>Designed to transform.</h2>
          <div className={styles.darkDesc}>
            Our process is built on transparency, creative excellence, and measurable impact.
            We partner with ambitious brands to navigate the digital landscape and create lasting legacies.
          </div>
        </div>

        <div className={styles.darkGallery}>
          <div className={`${styles.galleryImageWrapper} about-reveal hover-target`}>
            <Image
              src="/works/benz.jpg"
              alt="Designed to transform 1"
              fill
              className={styles.galleryImage}
            />
          </div>
          <div className={`${styles.galleryImageWrapper} about-reveal hover-target`}>
            <Image
              src="/works/pioneer.jpg"
              alt="Designed to transform 2"
              fill
              className={styles.galleryImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
