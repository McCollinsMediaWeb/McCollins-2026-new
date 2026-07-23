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

interface CaseStudyVideoProps {
  src: string;
  className?: string;
  wrapperClassName?: string;
}

function CaseStudyVideo({ src, className, wrapperClassName }: CaseStudyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className={wrapperClassName} style={{ position: "relative" }}>
      <video
        ref={videoRef}
        className={className}
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />
      <button className={styles.muteButton} onClick={handleToggleMute} aria-label="Toggle mute">
        {isMuted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default function DXBHotelCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      if (!mounted || !containerRef.current) return;

      const heroImg = containerRef.current.querySelector("." + styles.heroImage);
      if (heroImg) {
        gsap.to(heroImg, {
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "power4.out",
          delay: 0.3,
        });
      }

      const heroText = containerRef.current.querySelector("." + styles.heroTextContainer);
      if (heroText) {
        gsap.fromTo(
          heroText,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.8,
          }
        );
      }

      const metaItems = containerRef.current.querySelectorAll("." + styles.metaItem);
      const descParagraphs = containerRef.current.querySelectorAll("." + styles.descriptionParagraph);

      if (metaItems.length > 0) {
        gsap.fromTo(
          metaItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.infoSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (descParagraphs.length > 0) {
        gsap.fromTo(
          descParagraphs,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.infoSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const videoSec = containerRef.current.querySelector("." + styles.videoSection);
      if (videoSec) {
        gsap.fromTo(
          videoSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: videoSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const challengeSec = containerRef.current.querySelector("." + styles.challengeSection);
      if (challengeSec) {
        gsap.fromTo(
          challengeSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: challengeSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const strategySec = containerRef.current.querySelector("." + styles.strategySection);
      if (strategySec) {
        gsap.fromTo(
          strategySec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: strategySec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef, dependencies: [mounted] }
  );

  if (!mounted) return null;

  return (
    <div className={styles.container} ref={containerRef}>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/dxb/144c3fd5e33f3f0eebecf10c48732aa24231bead.webp"
            alt="DXB Hotel - Airport Hospitality"
            fill
            className={styles.heroImage}
            priority
          />
          {/* Overlay Text */}
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>
              AIRPORT HOSPITALITY,<br />
              BUILT LIKE A DIGITAL<br />
              PRODUCT.
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Metadata Section */}
      <section className={styles.infoSection}>
        <div className={styles.infoSectionInner}>
          <ul className={styles.metaList}>
            <li className={styles.metaItem}>BRAND</li>
            <li className={styles.metaItem}>STRATEGY</li>
            <li className={styles.metaItem}>DIGITAL</li>
            <li className={styles.metaItem}>EXPERIENCE</li>
            <li className={styles.metaItem}>BOOKING</li>
            <li className={styles.metaItem}>PLATFORM</li>
            <li className={styles.metaItem}>LAUNCH</li>
          </ul>

          <div className={styles.descriptionWrapper}>
            <p className={styles.descriptionParagraph}>
              DXB Hotel needed to launch as more than a place to stay. It required a complete brand and digital ecosystem for transit guests, international travellers and travel partners within Dubai Airports.
            </p>
            <p className={styles.descriptionParagraph}>
              We built the positioning, identity, website, booking experience, partner platform and launch presence from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Video Showcase Section */}
      <section className={styles.videoSection}>
        <CaseStudyVideo
          src="/dxb/Day 2 Video 2 First Cut_17.02.2023.mp4"
          className={styles.videoElement}
          wrapperClassName={styles.videoWrapper}
        />
      </section>

      {/* 4. Challenge Section */}
      <section className={styles.challengeSection}>
        <div className={styles.challengeInner}>
          <div className={styles.challengeLeft}>
            <span className={styles.challengeSubtitle}>THE CHALLENGE</span>
            <h2 className={styles.challengeTitle}>
              A NEW HOTEL<br />
              HAD TO EARN<br />
              TRUST BEFORE<br />
              ARRIVAL.
            </h2>
          </div>
          <div className={styles.challengeRight}>
            <p className={styles.challengeDescription}>
              The brand needed to stand out inside one of the world&apos;s busiest aviation hubs while making discovery, booking and travel-partner operations feel effortless.
            </p>
            <div className={styles.journeyCard}>
              <span className={styles.journeySubtitle}>THE REQUIRED JOURNEY</span>
              <div className={styles.journeyPath}>
                <span>DISCOVERY</span>
                <span className={styles.arrow}>→</span>
                <span>CONFIDENCE</span>
                <span className={styles.arrow}>→</span>
                <span>BOOKING</span>
                <span className={styles.arrow}>→</span>
                <span>ARRIVAL</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.waveImageWrapper}>
          <Image
            src="/dxb/7a1803bf0bcb85f8fdd778ba75add82a69dea8a2.png"
            alt="DXB Hotel Challenge Waves"
            width={2000}
            height={604}
            className={styles.waveImage}
            priority
          />
        </div>
      </section>

      {/* 5. Strategy Section */}
      <section className={styles.strategySection}>
        <div className={styles.strategyInner}>
          {/* Header Row */}
          <div className={styles.strategyHeader}>
            <div className={styles.strategyHeaderLeft}>
              <span className={styles.strategySubtitle}>OUR STRATEGY</span>
              <h2 className={styles.strategyTitle}>
                Six systems.<br />
                One traveller journey.
              </h2>
            </div>
            <div className={styles.strategyHeaderRight}>
              <p className={styles.strategyDescription}>
                Brand, technology and marketing were designed together—from first discovery through booking and arrival.
              </p>
            </div>
          </div>

          {/* Systems List */}
          <div className={styles.systemsGrid}>
            <div className={styles.systemsColumn}>
              <div className={styles.systemItem}>
                <span className={styles.systemNum}>01</span>
                <div className={styles.systemContent}>
                  <h3 className={styles.systemTitle}>Brand Strategy &amp; Positioning</h3>
                  <p className={styles.systemDesc}>Smart hospitality, convenience, efficiency and digital-first travel.</p>
                </div>
              </div>
              <div className={styles.systemItem}>
                <span className={styles.systemNum}>02</span>
                <div className={styles.systemContent}>
                  <h3 className={styles.systemTitle}>Brand Identity &amp; Guidelines</h3>
                  <p className={styles.systemDesc}>A scalable visual and verbal system across every touchpoint.</p>
                </div>
              </div>
              <div className={styles.systemItem}>
                <span className={styles.systemNum}>03</span>
                <div className={styles.systemContent}>
                  <h3 className={styles.systemTitle}>Website Design &amp; Development</h3>
                  <p className={styles.systemDesc}>A fast, mobile-first website with clear booking pathways.</p>
                </div>
              </div>
            </div>

            <div className={styles.systemsColumn}>
              <div className={styles.systemItem}>
                <span className={styles.systemNum}>04</span>
                <div className={styles.systemContent}>
                  <h3 className={styles.systemTitle}>Travel Agent Booking Platform</h3>
                  <p className={styles.systemDesc}>A dedicated B2B system that simplified reservations.</p>
                </div>
              </div>
              <div className={styles.systemItem}>
                <span className={styles.systemNum}>05</span>
                <div className={styles.systemContent}>
                  <h3 className={styles.systemTitle}>Social Media Strategy</h3>
                  <p className={styles.systemDesc}>Guest, facility, airport-convenience and destination content.</p>
                </div>
              </div>
              <div className={styles.systemItem}>
                <span className={styles.systemNum}>06</span>
                <div className={styles.systemContent}>
                  <h3 className={styles.systemTitle}>Digital Brand Awareness</h3>
                  <p className={styles.systemDesc}>Education for travellers and partners across the market.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Row */}
          <div className={styles.strategyFooter}>
            <div className={styles.strategyFooterLeft}>
              <span className={styles.connectedLabel}>CONNECTED EXPERIENCE</span>
            </div>
            <div className={styles.strategyFooterRight}>
              <div className={styles.journeyPathDark}>
                <span>BRAND</span>
                <span className={styles.arrowDark}>→</span>
                <span>WEBSITE</span>
                <span className={styles.arrowDark}>→</span>
                <span>BOOKING</span>
                <span className={styles.arrowDark}>→</span>
                <span>PARTNER PLATFORM</span>
                <span className={styles.arrowDark}>→</span>
                <span>ARRIVAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
