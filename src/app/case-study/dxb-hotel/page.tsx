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

interface CaseStudyVideoProps {
  src: string;
  className?: string;
  wrapperClassName?: string;
  style?: React.CSSProperties;
}

function CaseStudyVideo({ src, className, wrapperClassName, style }: CaseStudyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={wrapperClassName} style={{ position: "relative", backgroundColor: "#111111", ...style }}>
      {!isLoaded && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#161616",
          zIndex: 2,
          pointerEvents: "none"
        }}>
          <div style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, #161616 25%, #222222 50%, #161616 75%)",
            backgroundSize: "200% 100%",
            animation: "caseStudyPulse 1.5s infinite"
          }} />
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes caseStudyPulse {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          ` }} />
        </div>
      )}
      <video
        ref={videoRef}
        className={className}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.6s ease"
        }}
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

      const sceneVideoSec = containerRef.current.querySelector("." + styles.sceneVideoSection);
      if (sceneVideoSec) {
        gsap.fromTo(
          sceneVideoSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sceneVideoSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const techSec = containerRef.current.querySelector("." + styles.techSection);
      if (techSec) {
        gsap.fromTo(
          techSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: techSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const corridorVideoSec = containerRef.current.querySelector("." + styles.corridorVideoSection);
      if (corridorVideoSec) {
        gsap.fromTo(
          corridorVideoSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: corridorVideoSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const brandAssetsSec = containerRef.current.querySelector("." + styles.brandAssetsSection);
      if (brandAssetsSec) {
        gsap.fromTo(
          brandAssetsSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: brandAssetsSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const resultsSec = containerRef.current.querySelector("." + styles.resultsSection);
      if (resultsSec) {
        gsap.fromTo(
          resultsSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: resultsSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const impactSec = containerRef.current.querySelector("." + styles.impactSection);
      if (impactSec) {
        gsap.fromTo(
          impactSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: impactSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const servicesSec = containerRef.current.querySelector("." + styles.servicesSection);
      if (servicesSec) {
        gsap.fromTo(
          servicesSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: servicesSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const gallerySec = containerRef.current.querySelector("." + styles.gallerySection);
      if (gallerySec) {
        gsap.fromTo(
          gallerySec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gallerySec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const splitShowcaseSec = containerRef.current.querySelector("." + styles.splitShowcaseSection);
      if (splitShowcaseSec) {
        gsap.fromTo(
          splitShowcaseSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: splitShowcaseSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const overlayImageSec = containerRef.current.querySelector("." + styles.overlayImageSection);
      if (overlayImageSec) {
        gsap.fromTo(
          overlayImageSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: overlayImageSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const nextProjectSec = containerRef.current.querySelector("." + styles.nextProjectSection);
      if (nextProjectSec) {
        gsap.fromTo(
          nextProjectSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: nextProjectSec,
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

      {/* 6. Scene Video Showcase Section */}
      <section className={styles.sceneVideoSection}>
        <CaseStudyVideo
          src="/dxb/Scene-1.mp4"
          className={styles.videoElement}
          wrapperClassName={styles.videoWrapper}
        />
      </section>

      {/* 7. Technology Layer Section */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          {/* Header Row */}
          <div className={styles.techHeader}>
            <div className={styles.techHeaderLeft}>
              <span className={styles.techSubtitle}>THE TECHNOLOGY LAYER</span>
              <h2 className={styles.techTitle}>
                Two booking journeys.<br />
                One digital backbone.
              </h2>
            </div>
            <div className={styles.techHeaderRight}>
              <p className={styles.techDescription}>
                The digital ecosystem served both travellers booking directly and travel partners managing reservations at scale.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className={styles.techCardsGrid}>
            <div className={styles.techCard}>
              <span className={styles.techCardNum}>01 / DIRECT GUESTS</span>
              <h3 className={styles.techCardTitle}>Direct Guest Website</h3>
              <p className={styles.techCardDesc}>
                Fast, mobile-first and conversion-focused—with clear booking paths, premium storytelling and scalable content.
              </p>
            </div>
            <div className={styles.techCard}>
              <span className={styles.techCardNum}>02 / TRAVEL PARTNERS</span>
              <h3 className={styles.techCardTitle}>Travel Agent Platform</h3>
              <p className={styles.techCardDesc}>
                A dedicated backend that simplified reservations, reduced operational friction and strengthened B2B relationships.
              </p>
            </div>
          </div>

          {/* Journey Banner */}
          <div className={styles.techJourneyBanner}>
            <div className={styles.techJourneyHalf}>
              <span>TRAVELLER</span>
              <span className={styles.techJourneyArrow}>→</span>
              <span>DIRECT BOOKING</span>
            </div>
            <div className={styles.techJourneyDivider} />
            <div className={styles.techJourneyHalf}>
              <span>TRAVEL PARTNER</span>
              <span className={styles.techJourneyArrow}>→</span>
              <span>MANAGED RESERVATION</span>
            </div>
          </div>

          {/* Illustration image */}
          <div className={styles.techIllustrationWrapper}>
            <Image
              src="/dxb/21000fcf9a1844a6898a3e6f6a0584aef4567040.png"
              alt="DXB Digital Stack Illustration"
              width={700}
              height={400}
              className={styles.techIllustration}
            />
          </div>
        </div>
      </section>

      {/* 8. Corridor Video Showcase Section */}
      <section className={styles.corridorVideoSection}>
        <CaseStudyVideo
          src="/dxb/Day 3 Video 3 (16-9)_13.02.2023 (1).mp4"
          className={styles.videoElement}
          wrapperClassName={styles.videoWrapper}
        />
      </section>

      {/* 9. Brand Assets Section */}
      <section className={styles.brandAssetsSection}>
        <div className={styles.brandAssetsWrapper}>
          <Image
            src="/dxb/e967ae8f1f688f314194761c62101f526f3b1b83.gif"
            alt="DXB Brand Assets Overview"
            width={1600}
            height={1200}
            unoptimized
            className={styles.brandAssetsImage}
          />
        </div>
      </section>

      {/* 10. Results Section */}
      <section className={styles.resultsSection}>
        <div className={styles.resultsInner}>
          {/* Header Row */}
          <div className={styles.resultsHeader}>
            <div className={styles.resultsHeaderLeft}>
              <span className={styles.resultsSubtitle}>Results</span>
              <h2 className={styles.resultsTitle}>
                Built to launch.<br />
                Ready to scale.
              </h2>
            </div>
            <div className={styles.resultsHeaderRight}>
              <p className={styles.resultsDescription}>
                A distinctive brand, two booking journeys and a digital foundation designed for long-term growth.
              </p>
            </div>
          </div>

          {/* Results Grid */}
          <div className={styles.resultsGrid}>
            <div className={styles.resultItem}>
              <span className={styles.resultNum}>01</span>
              <p className={styles.resultText}>Technology-first positioning in airport hospitality.</p>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultNum}>02</span>
              <p className={styles.resultText}>Scalable, conversion-focused website.</p>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultNum}>03</span>
              <p className={styles.resultText}>Dedicated travel agent booking platform.</p>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultNum}>04</span>
              <p className={styles.resultText}>Brand guidelines across every touchpoint.</p>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultNum}>05</span>
              <p className={styles.resultText}>Regional and international social presence.</p>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultNum}>06</span>
              <p className={styles.resultText}>Awareness within the Dubai Airports ecosystem.</p>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultNum}>07</span>
              <p className={styles.resultText}>Future-ready infrastructure for continued growth.</p>
            </div>
            <div className={styles.resultItem} /> {/* Empty cell to draw the divider line */}
          </div>
        </div>
      </section>

      {/* 11. Impact Section */}
      <section className={styles.impactSection}>
        <div className={styles.impactInner}>
          {/* Header Row */}
          <div className={styles.impactHeader}>
            <div className={styles.impactHeaderLeft}>
              <span className={styles.impactSubtitle}>THE IMPACT</span>
              <h2 className={styles.impactTitle}>
                More than<br />
                a hotel launch.
              </h2>
            </div>
            <div className={styles.impactHeaderRight}>
              <p className={styles.impactDescription}>
                DXB Hotel launched as a digitally enabled hospitality brand—connecting travellers, travel partners and operations through one scalable ecosystem built for the future of airport travel.
              </p>
            </div>
          </div>

          {/* Banner Row */}
          <div className={styles.impactBanner}>
            <span className={styles.impactBannerItem}>TRAVELLERS</span>
            <span className={styles.impactBannerItem}>TRAVEL PARTNERS</span>
            <span className={styles.impactBannerItem}>OPERATIONS</span>
            <div className={styles.impactBannerDot} />
          </div>
        </div>
      </section>

      {/* 12. Services Delivered Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          {/* Header */}
          <div className={styles.servicesHeader}>
            <h2 className={styles.servicesTitle}>Services Delivered</h2>
            <span className={styles.servicesHeaderLabel}>DXB HOTEL</span>
          </div>

          {/* Services Grid (3 columns) */}
          <div className={styles.servicesGrid}>
            <div className={styles.servicesColumn}>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>01</span>
                <span className={styles.serviceText}>Brand Strategy</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>02</span>
                <span className={styles.serviceText}>Brand Positioning</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>03</span>
                <span className={styles.serviceText}>Brand Identity &amp; Guidelines</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>04</span>
                <span className={styles.serviceText}>Website Design</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>05</span>
                <span className={styles.serviceText}>Website Development</span>
              </div>
            </div>

            <div className={styles.servicesColumn}>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>06</span>
                <span className={styles.serviceText}>UX/UI Design</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>07</span>
                <span className={styles.serviceText}>Travel Agent Booking System</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>08</span>
                <span className={styles.serviceText}>Backend Platform Development</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>09</span>
                <span className={styles.serviceText}>Digital Product Strategy</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>10</span>
                <span className={styles.serviceText}>Social Media Strategy</span>
              </div>
            </div>

            <div className={styles.servicesColumn}>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>11</span>
                <span className={styles.serviceText}>Content Strategy</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>12</span>
                <span className={styles.serviceText}>Launch Marketing</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>13</span>
                <span className={styles.serviceText}>Creative Direction</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceNum}>14</span>
                <span className={styles.serviceText}>Digital Experience Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryInner}>
          {/* Row 1 */}
          <div className={`${styles.galleryRow} ${styles.galleryRowOne}`}>
            <div className={styles.galleryStack}>
              <div className={styles.galleryItem}>
                <Image
                  src="/dxb/df0c37b499fbe27f8151a6a8a6947db682aab41b-optimized.webp"
                  alt="DXB Hotel Scene - Better Together"
                  fill
                  className={styles.galleryImg}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image
                  src="/dxb/e1870de96e634f7aa3272d012c0002cbae0a9f88-optimized.webp"
                  alt="DXB Hotel Scene - Celebration"
                  fill
                  className={styles.galleryImg}
                />
              </div>
            </div>
            <CaseStudyVideo
              src="/dxb/DIH_March_Post_8 (1).mp4"
              className={styles.galleryVideo}
              wrapperClassName={styles.galleryItem}
            />
          </div>

          {/* Row 2 */}
          <div className={`${styles.galleryRow} ${styles.galleryRowTwo}`}>
            <CaseStudyVideo
              src="/dxb/DIH_June_Post8 (1).mp4"
              className={styles.galleryVideo}
              wrapperClassName={styles.galleryItem}
            />
            <div className={styles.galleryItem}>
              <Image
                src="/dxb/3d05f4ad405ee3a8ef64fed052b666af3e967d3e-optimized.webp"
                alt="DXB Hotel - Ahlan Service Booking"
                fill
                className={styles.galleryImg}
              />
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/dxb/da35818dd321c48868779614fa63a4611c1772ec-optimized.webp"
                alt="DXB Hotel - Guest Checking In"
                fill
                className={styles.galleryImg}
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className={`${styles.galleryRow} ${styles.galleryRowThree}`}>
            <CaseStudyVideo
              src="/dxb/DIH_June_Post2 (1) (2).mp4"
              className={styles.galleryVideo}
              wrapperClassName={`${styles.galleryItem} ${styles.galleryRowThreeVideoWrapper}`}
            />
            <div className={styles.galleryItem}>
              <Image
                src="/dxb/5bac3edf60ed5efedd6b8e532099a774b504865a-optimized.webp"
                alt="DXB Hotel - Luxury Concierge Service"
                fill
                className={styles.galleryImg}
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className={`${styles.galleryRow} ${styles.galleryRowTwo}`}>
            <CaseStudyVideo
              src="/dxb/DIH_March_Post_5 (3).mp4"
              className={styles.galleryVideo}
              wrapperClassName={styles.galleryItem}
            />
            <CaseStudyVideo
              src="/dxb/DIH_March_Post_3 (1).mp4"
              className={styles.galleryVideo}
              wrapperClassName={styles.galleryItem}
            />
            <div className={styles.galleryItem}>
              <Image
                src="/dxb/d4961aa4b19a89045edf9e02c5c7dd807834458e-optimized.webp"
                alt="DXB Hotel - Guest Checking In"
                fill
                className={styles.galleryImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 14. Split Showcase Section */}
      <section className={styles.splitShowcaseSection}>
        <div className={styles.splitShowcaseInner}>
          <div className={styles.splitShowcaseLeft}>
            <CaseStudyVideo
              src="/dxb/Day 3 Video 1 (16-9)_13.02.2023 (1).mp4"
              className={styles.splitShowcaseVideo}
              wrapperClassName={styles.splitShowcaseVideoWrapper}
            />
            <CaseStudyVideo
              src="/dxb/Day 1 Video 5 (Anniversary Video) First Cut_15.02.2023 (1).mp4"
              className={styles.splitShowcaseVideo}
              wrapperClassName={styles.splitShowcaseVideoWrapper}
            />
          </div>
          <div className={styles.splitShowcaseRight}>
            <div className={styles.splitShowcaseImageWrapper}>
              <Image
                src="/dxb/07c0dd23b96c5c8bba598ddb3f3f1b7bd5356248 (1).jpg"
                alt="DXB Hotel - Hostess assisting guests checking in"
                fill
                className={styles.splitShowcaseImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 15. Overlay Image Showcase Section */}
      <section className={styles.overlayImageSection}>
        <div className={styles.overlayImageWrapper}>
          <div className={styles.overlayDarkFilter} />
          <Image
            src="/dxb/ed7165322cc4ddefea37ad7a3fe9e9dc26903102.jpg"
            alt="DXB Hotel Social Media Collages"
            fill
            className={styles.overlayBgImage}
          />
        </div>
      </section>

      {/* 16. Next Project Section */}
      <section className={styles.nextProjectSection}>
        <div className={styles.nextProjectInner}>
          <div className={styles.nextProjectHeader}>
            <Link href="/services" className={styles.nextProjectHeaderLink}>
              OUR SERVICES
            </Link>
            <Link href="/works" className={styles.nextProjectHeaderLink}>
              SEE THE WORK
            </Link>
          </div>
          <Link href="/case-study/cryo" className={styles.nextProjectLink}>
            <div className={styles.nextProjectImageContainer}>
              <Image
                src="/dxb/e10ae3452971f405189d915fb9572403e5e692cf.jpg"
                alt="Next Project - CRYO"
                fill
                className={styles.nextProjectImg}
              />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
