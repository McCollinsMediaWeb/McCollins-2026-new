"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const TEAM_MEMBERS = [
  { img: "/about-us-page/image2.jpg", name: "Manjeet", title: "Business Operation" },
  { img: "/about-us-page/image3.jpg", name: "Ashar", title: "Studio Lead" },
  { img: "/about-us-page/image4.jpg", name: "George", title: "Account Manager" },
  { img: "/about-us-page/image5.jpg", name: "Ijas", title: "Web Lead" },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

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

    // Custom aesthetic animation for the Team Section
    const teamSection = containerRef.current.querySelector("." + styles.teamSection);
    if (teamSection) {
      const sectionTitle = teamSection.querySelector("." + styles.teamSectionTitle);
      const leaderImg = teamSection.querySelector("." + styles.leaderImageWrapper);
      const leaderDesc = teamSection.querySelector("." + styles.leaderDescription);
      const leaderName = teamSection.querySelector("." + styles.leaderNameTitle);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: teamSection,
          start: "top 75%",
          toggleActions: "play none none none",
        }
      });

      if (sectionTitle) {
        tl.from(sectionTitle, {
          x: -30,
          opacity: 0,
          duration: 1.0,
          ease: "power3.out"
        }, 0);
      }

      if (leaderImg) {
        tl.from(leaderImg, {
          y: 50,
          opacity: 0,
          scale: 0.97,
          duration: 1.4,
          ease: "power3.out"
        }, 0.15);
      }

      if (leaderDesc) {
        tl.from(leaderDesc, {
          y: 25,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        }, 0.3);
      }

      if (leaderName) {
        tl.from(leaderName, {
          y: 20,
          opacity: 0,
          duration: 1.0,
          ease: "power3.out"
        }, 0.45);
      }

      // Staggered grid entrance
      const gridMembers = teamSection.querySelectorAll("." + styles.teamMember);
      if (gridMembers.length > 0) {
        gsap.from(gridMembers, {
          scrollTrigger: {
            trigger: teamSection.querySelector("." + styles.teamGrid),
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          clearProps: "all"
        });
      }
    }

    // Designed to Transform Section Pinning Animation
    const darkTopRow = containerRef.current.querySelector("." + styles.darkTopRow);
    const darkTitle = containerRef.current.querySelector<HTMLElement>("." + styles.darkTitle);
    const darkDesc = containerRef.current.querySelector("." + styles.darkDesc);

    if (darkTopRow && darkTitle && darkDesc) {
      let mm = gsap.matchMedia();
      mm.add("(min-width: 1025px)", () => {
        ScrollTrigger.create({
          trigger: darkTopRow,
          start: "top 160px",
          end: () => `bottom ${darkTitle.offsetHeight + 180}px`,
          pin: darkTitle,
          pinSpacing: false,
          anticipatePin: 1,
        });
      });
    }

  }, { scope: containerRef, dependencies: [mounted] });

  if (!mounted) return null;

  return (
    <div className={styles.aboutContainer} ref={containerRef}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle} ref={titleRef}>
          <span className={styles.titleWord}>
            {"ABOUT".split("").map((char, i) => (
              <span key={i} className={styles.titleChar}
                style={{
                  fontFamily: char === "O" ? "var(--font-playfair-display)" : "var(--font-delight)",
                  fontStyle: char === "O" ? "italic" : "bold",
                  fontWeight: char === "O" ? "500" : "700"
                }}>
                {char}
              </span>
            ))}
          </span>
          <span className={styles.titleWord}>
            {"US".split("").map((char, i) => (
              <span key={i} className={styles.titleChar} style={{ fontFamily: "var(--font-playfair-display)", fontStyle: "italic", fontWeight: '500' }}>
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

        <div className={styles.philosophySection}>
          <p className={styles.philosophyParagraph}>
            <strong>For 17 years, McCollins Media has helped brands earn something far more valuable than attention—trust.</strong><br />
            Founded with a simple belief that credibility outperforms noise, we have grown into an award-winning integrated communications agency known for creating conversations that matter. In a world overflowing with paid impressions and fleeting trends, we focus on what leaves a lasting impact: earned media, meaningful storytelling, and strategic brand building.
          </p>

          <p className={styles.philosophyParagraph}>
            <strong>We don't just represent brands. We take ownership of them.</strong><br />
            That philosophy shapes every brief we receive and every campaign we create. We immerse ourselves in our clients' businesses, understand their ambitions, challenge assumptions, and build communication strategies that deliver measurable outcomes. Your goals become our goals. Your reputation becomes our responsibility.
          </p>

          <p className={styles.philosophyParagraph}>
            <strong>Performance isn't an afterthought at McCollins Media—it's the starting point.</strong><br />
            Every headline, every media interaction, every influencer collaboration, every digital activation, and every strategic recommendation is designed with one question in mind: Will this move the brand forward? Creativity is important. Results are essential. That's why our work consistently balances bold ideas with business impact.
          </p>

          <p className={styles.philosophyParagraph}>
            <strong>Our DNA is built on courage.</strong><br />
            We believe safe campaigns are easily forgotten. The brands that lead industries are the ones willing to challenge conventions, spark conversations, and create cultural relevance. Our team embraces curiosity, experiments fearlessly, and isn't afraid to test fresh ideas if they help our clients stay ahead of the curve. We don't chase trends—we help create them.
          </p>

          <p className={styles.philosophyParagraph}>
            <strong>Being bold doesn't mean being loud. It means being intentional.</strong><br />
            From emerging startups to established enterprises, we've partnered with brands across industries to shape narratives, manage reputations, launch products, navigate crises, and build lasting public perception.<br /> Every campaign is tailored, every strategy is informed by insight, and every success is measured by meaningful business outcomes—not vanity metrics.
          </p>
        </div>
      </section>


      <section className={styles.darkSection}>
        <div className={styles.darkTopRow}>
          <div className={styles.darkTitleCol}>
            <h2 className={styles.darkTitle}>WHAT MAKES<br /> McCOLLINS MEDIA DIFFERENT?</h2>
          </div>
          <div className={styles.differentList}>
            <div className={styles.differentItem}>
              <h3 className={styles.differentHeader}>
                <span className={styles.differentHeaderSans}>1) BRAND </span>
                <span className={styles.differentHeaderSerif}>Ownership</span>
              </h3>
              <p className={styles.differentDesc}>
                We think like stakeholders, not vendors. Every recommendation is made with long-term brand value in mind.
              </p>
            </div>

            <div className={styles.differentItem}>
              <h3 className={styles.differentHeader}>
                <span className={styles.differentHeaderSans}>2) EARNED MEDIA </span>
                <span className={styles.differentHeaderSerif}>Specialists</span>
              </h3>
              <p className={styles.differentDesc}>
                We know credibility cannot be bought—it must be earned. Our strength lies in building authentic media relationships and creating stories journalists actually want to tell.
              </p>
            </div>

            <div className={styles.differentItem}>
              <h3 className={styles.differentHeader}>
                <span className={styles.differentHeaderSans}>3) PERFORMANCE-FIRST </span>
                <span className={styles.differentHeaderSerif}>Thinking</span>
              </h3>
              <p className={styles.differentDesc}>
                Creative excellence meets measurable impact. Every strategy is backed by purpose, data, and business objectives.
              </p>
            </div>

            <div className={styles.differentItem}>
              <h3 className={styles.differentHeader}>
                <span className={styles.differentHeaderSans}>4) BOLD </span>
                <span className={styles.differentHeaderSerif}>Campaigns</span>
              </h3>
              <p className={styles.differentDesc}>
                Our work is designed to stand out, spark engagement, and create conversations that people remember.
              </p>
            </div>

            <div className={styles.differentItem}>
              <h3 className={styles.differentHeader}>
                <span className={styles.differentHeaderSans}>5) INTEGRATED </span>
                <span className={styles.differentHeaderSerif}>Expertise</span>
              </h3>
              <p className={styles.differentDesc}>
                Public relations, digital communications, influencer marketing, reputation management, content strategy, corporate communications, and brand storytelling—working seamlessly as one.
              </p>
            </div>

            <div className={styles.differentItem}>
              <h3 className={styles.differentHeader}>
                <span className={styles.differentHeaderSans}>6) A TEAM THAT NEVER STOPS </span>
                <span className={styles.differentHeaderSerif}>Learning</span>
              </h3>
              <p className={styles.differentDesc}>
                The communications landscape changes daily. So do we. Our people stay curious, agile, and relentlessly committed to finding smarter ways to solve complex brand challenges.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.teamTopRow}>
          <div className={styles.teamSectionTitle}>
            OUR TEAM
          </div>
          <div className={styles.leaderImageWrapper}>
            <Image
              src="/about-us-page/image1.jpg"
              alt="Meghna Kothari"
              width={800}
              height={1000}
              className={styles.leaderImage}
            />
          </div>
          <div className={styles.leaderInfo}>
            <p className={styles.leaderDescription}>
              McCollins Media was built for brands that value momentum. Direct access to global talent, clear strategic thinking, and work made to move the business forward.
            </p>
            <div className={styles.leaderNameTitle}>
              <span className={styles.leaderName}>Meghna Kothari</span>
              <span className={styles.leaderTitle}>Founder</span>
            </div>
          </div>
        </div>

        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className={`${styles.teamMember} hover-target`}>
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
        <div className={styles.darkTopRow}>
          <div className={styles.darkTitleCol}>
            <h2 className={styles.darkTitle}>Designed to transform</h2>
          </div>
          <div className={styles.darkDesc}>
            <p>We follow a proven five-step model to turn strategy into faster, measurable growth: Decode, Define, Design, Deploy, and Dominate. Every stage is built to create clarity, accelerate execution, and deliver results that move brands ahead.</p>
            <p style={{ marginTop: '100px' }}>We follow a proven five-step model to turn strategy into faster, measurable growth: Decode, Define, Design, Deploy, and Dominate. Every stage is built to create clarity, accelerate execution, and deliver results that move brands ahead.</p>
          </div>
        </div>

        <div className={styles.darkGallery}>
          <div className={`${styles.galleryImageWrapper} about-reveal hover-target`} onClick={() => router.push("/case-study/cleaning-superstore")}>
            <Image
              src="/works/css.png"
              alt="Designed to transform 1"
              fill
              className={styles.galleryImage}
            />
          </div>
          <div className={`${styles.galleryImageWrapper} about-reveal hover-target`} onClick={() => router.push("/case-study/pioneer")}>
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
