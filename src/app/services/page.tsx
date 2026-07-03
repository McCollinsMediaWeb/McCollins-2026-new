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
    image: "/service-page/image1.jpg",
    words: [
      { text: "Brand", italic: true },
      { text: "Development", italic: false }
    ],
    desc: "Crafting cohesive brand identities that resonate with your target audience and stand the test of time.",
    includes: ["Brand Strategy", "Visual Identity", "Brand Guidelines"],
    href: "/services/brand-development",
  },
  {
    image: "/home-page-services/web_development.png",
    words: [
      { text: "Website/App", italic: false },
      { text: "Design", italic: true }
    ],
    desc: "Creating high-performance, responsive platforms engineered for convert goals and maximum user engagement.",
    includes: ["UX/UI Design", "Web Development", "Mobile App Dev"],
    href: "/services/web-development",
  },
  {
    image: "/service-page/image7.jpg",
    words: [
      { text: "Social Media", italic: false },
      { text: "Marketing", italic: true }
    ],
    desc: "Building authentic digital communities through culturally relevant content that sparks global engagement.",
    includes: ["Content Strategy", "Community Mgmt", "Influencer Mktg"],
  },
  {
    image: "/service-page/image2.jpg",
    words: [
      { text: "Performance", italic: false },
      { text: "Marketing", italic: true }
    ],
    desc: "Accelerating your ROI through data-driven search marketing campaigns engineered for maximum conversions.",
    includes: ["Search Marketing", "Display Ads", "Social Media Ads"],
  },
  {
    image: "/service-page/image3.jpg",
    words: [
      { text: "Marketing", italic: false },
      { text: "Automation", italic: true }
    ],
    desc: "Driving sustainable growth through data-driven search marketing campaigns on a global scale at optimal cost.",
    includes: ["Email Marketing", "Lead Nurturing", "CRM Integration"],
  },
  {
    image: "/service-page/image4.jpg",
    words: [
      { text: "Content", italic: false },
      { text: "Production", italic: true }
    ],
    desc: "Driving sustainable growth through data-driven search marketing campaigns on a global scale at optimal cost.",
    includes: ["Video Production", "Photography", "Copywriting"],
  },
  {
    image: "/service-page/image5.jpg",
    words: [
      { text: "Google", italic: false },
      { text: "Ads", italic: true }
    ],
    desc: "Accelerating ROI through performance-based paid search campaigns carefully targeted for conversions.",
    includes: ["Search Campaigns", "Display Campaigns", "Video Campaigns"],
  },
  {
    image: "/service-page/image6.jpg",
    words: [
      { text: "SE", italic: false },
      { text: "O", italic: true }
    ],
    desc: "Driving sustainable growth through data-driven search engine optimization on a global scale at optimal cost.",
    includes: ["Keyword Strategy", "On-Page SEO", "Technical SEO"],
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

    // Scroll Reveals for Services
    const serviceRows = containerRef.current.querySelectorAll("." + styles.serviceRow);
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
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: "power3.out",
        });
      }

      if (content.length > 0) {
        tl.from(content, {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        }, "-=0.8");
      }
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
          Precision Solutions. Proven Results. <br/>
          Where data-driven precision meets creative excellence to deliver high-impact outcomes for the world's most discerning brands.
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
        <h2 className={styles.ascensionHeader}>The McCollins Ascension Model</h2>
        
        <div className={styles.ascensionGrid}>
          
          <div className={`${styles.ascensionCard} ${styles.cardBlack}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Decode</h3>
              <p className={styles.cardDesc}>Uncovering insights and data architecture.</p>
            </div>
          </div>
          
          <div className={styles.ascensionCard}>
            <div className={styles.cardImageWrapper}>
              <Image src="/service-page/image9.jpg" alt="Design" fill className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Design</h3>
              <p className={styles.cardDesc}>Crafting high-impact creative solutions.</p>
            </div>
          </div>
          
          <div className={`${styles.ascensionCard} ${styles.cardWhite}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Drive</h3>
              <p className={styles.cardDesc}>Activating multi-channel performance.</p>
            </div>
          </div>
          
          <div className={styles.ascensionCard}>
            <div className={styles.cardImageWrapper}>
              <Image src="/service-page/image8.jpg" alt="Dominate" fill className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Dominate</h3>
              <p className={styles.cardDesc}>Scaling outcomes and market leadership.</p>
            </div>
          </div>
          
        </div>
      </section>
      
    </div>
  );
}
