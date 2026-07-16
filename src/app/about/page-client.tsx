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
  { img: "/about-us-page/image1.webp", name: "MEGHNA KOTHARI", title: "FOUNDER" },
  { img: "/about-us-page/manjeet.webp", name: "MANJEET", title: "BUSINESS OPERATIONS DIRECTOR" },
  { img: "/about-us-page/reem.jpg", name: "REEM", title: "SENIOR ACCOUNT MANAGER" },

  { img: "/about-us-page/azhar.webp", name: "AZHAR", title: "CREATIVE LEAD" },
  { img: "/about-us-page/image5.webp", name: "IJAS", title: "WEB LEAD" },
  { img: "/about-us-page/diptesh.webp", name: "DIPTESH BASU", title: "PERFORMANCE LEAD" },

  { img: "/about-us-page/casie.jpg", name: "CASIE", title: "ACCOUNT MANAGER" },
  { img: "/about-us-page/shabeer.webp", name: "SHABEER", title: "CONTENT LEAD" },
  { img: "/about-us-page/phyo.webp", name: "PHYO", title: "CONTENT CREATOR" },
  { img: "/about-us-page/arjun.webp", name: "ARJUN", title: "CONTENT CREATOR" },

  // { img: "/about-us-page/midhun.png", name: "MIDHUN", title: "ACCOUNTANT" },
  // { img: "/about-us-page/jaysa.jpg", name: "JAYSA", title: "TEAM MEMBER" },
  // { img: "/about-us-page/numa.jpg", name: "NUMA", title: "TEAM MEMBER" },
  // { img: "/about-us-page/zaid.jpg", name: "ZAID", title: "TEAM MEMBER" },
];

const AWARDS = [
  {
    year: "(2012)",
    title: "BEST SOCIAL MEDIA Campaign - Government",
    awardedBy: "Awarded by: Internet Awards Middle East",
    description: "Won for the Madinati Campaign which created awareness about how you could be a good citizen by suggesting areas of improvement to the Public Transport system of Dubai."
  },
  {
    year: "(2013)",
    title: "SME Stars of Business Award",
    awardedBy: "Awarded by: ADCB SME",
    description: "Our Director, Meghna Kothari, was conferred SME Admirable Woman Entrepreneur of the Year Award for strategic innovation and business achievements."
  },
  {
    year: "(2013)",
    title: "BEST SOCIAL MEDIA Strategy - Government",
    awardedBy: "Awarded by: The Marketing Awards",
    description: "Won for remarkable efficiency in using social media networks to serve government communication and interaction, as well as to its interaction with its customers and keenness to real-time response."
  }
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
      const teamTitle = teamSection.querySelector("." + styles.teamTitle);
      const gridMembers = teamSection.querySelectorAll("." + styles.teamMember);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: teamSection,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      });

      if (teamTitle) {
        tl.from(teamTitle, {
          y: 30,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      }

      if (gridMembers.length > 0) {
        tl.from(gridMembers, {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          clearProps: "all"
        }, "-=0.8");
      }
    }

    // Designed to Transform Section Pinning Animation
    const darkTopRow = containerRef.current.querySelector("." + styles.darkTopRow);
    const darkTitle = containerRef.current.querySelector<HTMLElement>("." + styles.darkTitle);
    const differentList = containerRef.current.querySelector("." + styles.differentList);

    if (darkTopRow && darkTitle && differentList) {
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
            src="/about-us-page/image6.webp"
            alt="About McCollins Media"
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.heroDetails}>
          <div className={`${styles.heroDate} ${styles.heroModelTitle}`}>THE McCOLLINS ASCENSION MODEL</div>
          <div className={styles.heroDesc}>
            <h2 className={styles.heroModelHeading}>1–5) Decode to Dominate</h2>
            <p className={styles.heroModelCopy}>We follow a proven five-step model to turn strategy into faster, measurable growth: Decode, Define, Design, Deploy, and Dominate. Every stage is built to create clarity, accelerate execution, and deliver results that move brands ahead.</p>
            <div className={styles.heroModelSteps}>1) Decode 2) Define 3) Design<br />4) Deploy 5) Dominate</div>
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

      {/* Awards Section */}
      <section className={styles.awardsSection}>
        <h2 className={styles.awardsTitle}>
          {"Awards".split("").map((char, i) => (
            <span
              key={i}
              style={
                char === "d"
                  ? { fontFamily: "var(--font-playfair-display)", fontStyle: "italic" }
                  : undefined
              }
            >
              {char}
            </span>
          ))}
        </h2>

        <div className={styles.awardsInfoRow}>
          <div className={styles.awardsInfoLeft}>
            RECOGNITION THAT<br />REFLECTS THE WORK
          </div>
          <div className={styles.awardsInfoRight}>
            1) BEST SOCIAL MEDIA CAMPAIGN - GOVERNMENT<br />
            2) SME STARS OF BUSINESS AWARD<br />
            3) BEST SOCIAL MEDIA STRATEGY - GOVERNMENT
          </div>
        </div>

        <div className={styles.awardsGrid}>
          {AWARDS.map((award, index) => (
            <div key={index} className={`${styles.awardCard} about-reveal`}>
              <div className={styles.awardImageWrapper}>
                <Image
                  src={`/about-us-page/award-${index + 1}.webp`}
                  alt={award.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.awardImage}
                />
              </div>
              <div className={styles.awardYear}>{award.year}</div>
              <h3 className={styles.awardTitle}>{award.title}</h3>
              <div className={styles.awardDetails}>
                <div className={styles.awardAwardedBy}>{award.awardedBy}</div>
                <p className={styles.awardDescription}>{award.description}</p>
              </div>
            </div>
          ))}
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

      <section style={{ padding: '100px 0px 100px 0px', margin: '0 auto' }}>
        <p className={styles.shortNote}>
          <strong>After 17 years, one thing hasn't changed.</strong> We still believe the most powerful marketing isn't the loudest voice in the room—it's the one people choose to listen to. At McCollins Media, we don't simply generate visibility. We build credibility.
          <span className={styles.shortNoteExtended}> We don't chase headlines. We create stories worth telling. And we don't measure success by how much attention a brand receives, but by the influence, trust, and growth it earns.</span><br /><br />
          Because brands deserve more than publicity.<br />
          They deserve partners who think bigger, move faster, challenge harder, and care deeper.<br /><br />
          That's McCollins Media.
        </p>
      </section>


      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2 className={styles.teamTitle}>
          <span className={styles.teamTitleItalic}>O</span>
          <span className={styles.teamTitleBold}>UR TEAM</span>
        </h2>

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
                <span className={styles.memberRole}>{member.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark "Designed to Transform" Section */}
      <section className={styles.whiteSectionBottom}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <p className={styles.memberName}>OUR SERVICES</p>
          <p className={styles.memberName} style={{ display: 'inline-flex', alignItems: 'center' }}>
            SEE THE WORK
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "6px" }}>
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </p>
        </div>
        <div className={styles.darkGallery}>
          <div className={`${styles.galleryImageWrapper} about-reveal hover-target`} onClick={() => router.push("/case-study/cleaning-superstore")}>
            <Image
              src="/works/css.webp"
              alt="Designed to transform 1"
              fill
              className={styles.galleryImage}
            />
          </div>
          <div className={`${styles.galleryImageWrapper} about-reveal hover-target`} onClick={() => router.push("/case-study/pioneer")}>
            <Image
              src="/works/pioneer-new.png"
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
