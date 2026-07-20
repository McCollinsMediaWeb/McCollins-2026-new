"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const SERVICES = [
  {
    image: "/service-page/image1.webp",
    words: [
      { text: "Brand", italic: true },
      { text: "Development", italic: false }
    ],
    desc: "Crafting cohesive brand identities that resonate with your target audience and stand the test of time.",
    includes: ["Discovery Workshop", "Visual Moodboard", "Colors & Typography", "Design Directions"],
    href: "/services/brand-development",
  },
  {
    image: "/home-page-services/mainhero.webp",
    words: [
      { text: "Website/App", italic: false },
      { text: "Design", italic: true }
    ],
    desc: "Creating high-performance, responsive platforms engineered for convert goals and maximum user engagement.",
    includes: ["UX/UI Design", "Responsive Dev", "CMS Integration", "E-Commerce"],
    href: "/services/web-development",
  },
  {
    image: "/service-page/image10.webp",
    words: [
      { text: "Social Media", italic: false },
      { text: "Marketing", italic: true }
    ],
    desc: "Building authentic digital communities through culturally relevant content that sparks global engagement.",
    includes: ["Strategy", "Content Creation", "Reels", "Community Mgmt"],
    href: "/services/social-media-marketing",
  },
  {
    image: "/service-page/image3.webp",
    words: [
      { text: "Marketing", italic: false },
      { text: "Automation", italic: true }
    ],
    desc: "Driving sustainable growth through data-driven search marketing campaigns on a global scale at optimal cost.",
    includes: ["CRM Setup", "Email Flows", "Retention", "Sales Funnels"],
    href: "/services/marketing-automation",
  },
  {
    image: "/service-page/main-banner.png",
    words: [
      { text: "Performance", italic: false },
      { text: "Marketing", italic: true }
    ],
    desc: "Accelerating your ROI through data-driven search marketing campaigns engineered for maximum conversions.",
    includes: ["Paid Media", "Creative Testing", "CRO", "Analytics"],
    href: "/services/performance-marketing",
  },
  {
    image: "/service-page/image4.webp",
    words: [
      { text: "Content", italic: false },
      { text: "Production", italic: true }
    ],
    desc: "Driving sustainable growth through data-driven search marketing campaigns on a global scale at optimal cost.",
    includes: ["Video Production", "Photography", "Editing", "Post Production"],
    href: "/services/content-production",
  },
  {
    image: "/service-page/image5.webp",
    words: [
      { text: "Google", italic: false },
      { text: "Ads", italic: true }
    ],
    desc: "Accelerating ROI through performance-based paid search campaigns carefully targeted for conversions.",
    includes: ["Search", "Display", "Shopping", "YouTube"],
    href: "/services/google-ads",
  },
  {
    image: "/service-page/image6.webp",
    words: [
      { text: "SEO", italic: false },
      // { text: "O", italic: true }
    ],
    desc: "Driving sustainable growth through data-driven search engine optimization on a global scale at optimal cost.",
    includes: ["Audits", "Keyword Research", "On-Page SEO", "Backlinking"],
    href: "/services/seo",
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    // Hero Intro
    const titleChars = containerRef.current.querySelectorAll("." + styles.titleChar);
    const heroDesc = containerRef.current.querySelector("." + styles.heroDesc);

    if (titleChars.length > 0) {
      gsap.to(titleChars, {
        y: 0,
        duration: 1.2,
        stagger: 0.04,
        ease: "power3.out",
        delay: 0.1,
      });
    }

    if (heroDesc) {
      gsap.from(heroDesc, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.6,
      });
    }

    // Scroll Reveals for Services - Desktop only
    let mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      const container = containerRef.current;
      if (!container) return;
      const serviceRows = container.querySelectorAll("." + styles.serviceRow);
      serviceRows.forEach((row) => {
        const image = row.querySelector("." + styles.imageCol);
        const content = row.querySelectorAll("." + styles.serviceTitle + ", ." + styles.serviceDesc + ", ." + styles.includesCol);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });

        if (image) {
          tl.from(image, {
            y: 0,
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            ease: "power3.out",
            clearProps: "transform",
          });
        }

        if (content.length > 0) {
          tl.from(content, {
            y: 0,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform",
          }, "-=0.8");
        }
      });
    });

    // Ascension Model Reveal
    const ascensionHeader = containerRef.current.querySelector("." + styles.ascensionHeader);
    const ascensionCards = containerRef.current.querySelectorAll("." + styles.ascensionCard);

    if (ascensionHeader) {
      gsap.from(ascensionHeader, {
        scrollTrigger: {
          trigger: ascensionHeader,
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (ascensionCards.length > 0) {
      gsap.from(ascensionCards, {
        scrollTrigger: {
          trigger: "." + styles.ascensionGrid,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    }

  }, { scope: containerRef, dependencies: [mounted] });

  if (!mounted) return null;

  return (
    <div className={styles.servicesContainer} ref={containerRef}>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          {"SERVICES".split("").map((char, i) => (
            <span key={i} className={styles.titleChar}>
              {char}
            </span>
          ))}
        </h1>
        <p className={styles.heroDesc}>
          <span className={styles.heroDescLead}>Precision Solutions. Proven Results.</span>
          <span className={styles.heroDescCopy}>Where data-driven precision meets creative excellence to deliver high-impact outcomes for the world's most discerning brands.</span>
        </p>
      </section>

      {/* Services List Section */}
      <section className={styles.servicesSection}>
        <div className={styles.verticalLine}></div>

        {SERVICES.map((service, index) => {
          const ServiceContent = (
            <>
              <div className={styles.imageCol}>
                <Image
                  src={service.image}
                  alt={service.words.map(w => w.text).join(' ')}
                  fill
                  className={styles.serviceImage}
                />
              </div>

              <div className={styles.contentCol}>
                <h2 className={styles.serviceTitle}>
                  {service.words.map((word, wIdx) => (
                    <span
                      key={wIdx}
                      className={word.italic ? styles.titleWordItalic : styles.titleWordBold}
                    >
                      {word.text}
                    </span>
                  ))}
                </h2>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </div>

              <div className={styles.includesCol}>
                <span className={styles.includesLabel}>Includes:</span>
                <ul className={styles.includesList}>
                  {service.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          );

          return service.href ? (
            <Link href={service.href} key={index} className={styles.serviceRow} style={{ textDecoration: 'none', color: 'inherit' }}>
              {ServiceContent}
            </Link>
          ) : (
            <div key={index} className={styles.serviceRow}>
              {ServiceContent}
            </div>
          );
        })}
      </section>

      {/* Ascension Model Section */}
      <section className={styles.ascensionSection}>
        <h2 className={styles.ascensionHeader}>THE MCCOLLINS ASCENSION MODEL</h2>

        <div className={styles.ascensionSubHeader}>
          <span className={styles.ascensionSubLeft}>How We Work</span>
          <a href="mailto:info@mccollinsmedia.com" className={styles.ascensionSubRight}>info@mccollinsmedia.com</a>
        </div>

        <div className={styles.ascensionGrid}>

          <div className={`${styles.ascensionCard} ${styles.cardBlack} ${styles.cardShort} ${styles.cardNarrow}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Decode</h3>
              <p className={styles.cardDesc}>Market, Audience, Gaps</p>
            </div>
          </div>

          <div className={`${styles.ascensionCard} ${styles.cardTall} ${styles.cardWide}`}>
            <div className={styles.cardImageWrapper}>
              <Image src="/service-page/image8.webp" alt="Design" fill className={styles.cardImage} />
            </div>
            <div className={`${styles.cardContent} ${styles.cardContentBottom}`}>
              <div>
                <h3 className={styles.cardTitle}>Design</h3>
                <p className={styles.cardDesc}>Visual &amp; Content Systems</p>
              </div>
            </div>
          </div>

          <div className={`${styles.ascensionCard} ${styles.cardGray} ${styles.cardShort} ${styles.cardWide}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Define</h3>
              <p className={styles.cardDesc}>Brand Positioning &amp; Narrative</p>
            </div>
          </div>

          <div className={`${styles.ascensionCard} ${styles.cardTall} ${styles.cardWide}`}>
            <div className={styles.cardImageWrapper}>
              <Image src="/service-page/image9.webp" alt="Deploy" fill className={styles.cardImage} />
            </div>
            <div className={`${styles.cardContent} ${styles.cardContentBottom}`}>
              <div>
                <h3 className={styles.cardTitle}>Deploy</h3>
                <p className={styles.cardDesc}>Paid, Organic, Automation</p>
              </div>
            </div>
          </div>

          <div className={`${styles.ascensionCard} ${styles.cardBlack} ${styles.cardShort} ${styles.cardNarrow}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Dominate</h3>
              <p className={styles.cardDesc}>Scale, Optimise, Expand</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
