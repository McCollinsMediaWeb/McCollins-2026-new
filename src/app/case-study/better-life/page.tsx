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

export default function BetterLifeCaseStudy() {
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

            const gifSec = containerRef.current.querySelector("." + styles.gifSection);
            if (gifSec) {
                gsap.fromTo(
                    gifSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: gifSec,
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

            const videosSec = containerRef.current.querySelector("." + styles.videosSection);
            if (videosSec) {
                gsap.fromTo(
                    videosSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: videosSec,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            const performanceSec = containerRef.current.querySelector("." + styles.performanceSection);
            if (performanceSec) {
                gsap.fromTo(
                    performanceSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: performanceSec,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            const galleryBannerSec = containerRef.current.querySelector("." + styles.galleryBannerSection);
            if (galleryBannerSec) {
                gsap.fromTo(
                    galleryBannerSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: galleryBannerSec,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            const automationSec = containerRef.current.querySelector("." + styles.automationSection);
            if (automationSec) {
                gsap.fromTo(
                    automationSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: automationSec,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            const seasonalSec = containerRef.current.querySelector("." + styles.seasonalSection);
            if (seasonalSec) {
                gsap.fromTo(
                    seasonalSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: seasonalSec,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            const reelsSec = containerRef.current.querySelector("." + styles.reelsSection);
            if (reelsSec) {
                gsap.fromTo(
                    reelsSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: reelsSec,
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
                        src="/better-life/a319f6d7a7333d6a314c89c134e6b0ac3ed2bf75.jpg"
                        alt="DXB Hotel - Airport Hospitality"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    {/* Overlay Text */}
                    <div className={styles.heroTextContainer}>
                        <h1 className={styles.heroTitle}>
                            Scaling premium appliance<br /> ecommerce across Dubai and the UAE.
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2. Metadata Section */}
            <section className={styles.infoSection}>
                <div className={styles.infoSectionInner}>
                    <ul className={styles.metaList}>
                        <li className={styles.metaItem}>PERFORMANCE</li>
                        <li className={styles.metaItem}>MARKETING</li>
                        <li className={styles.metaItem}>DUBAI /</li>
                        <li className={styles.metaItem}>ECOMMERCE</li>
                        <li className={styles.metaItem}>MARKETING</li>
                        <li className={styles.metaItem}>UAE / GOOGLE</li>
                        <li className={styles.metaItem}>ADS / META</li>
                        <li className={styles.metaItem}>ADS /</li>
                        <li className={styles.metaItem}>MARKETING</li>
                        <li className={styles.metaItem}>AUTOMATION</li>
                    </ul>

                    <div className={styles.descriptionWrapper}>
                        <p className={styles.descriptionParagraph}>
                            Better Life represents leading appliance brands including SMEG and Siemens. McCollins connected paid media, marketing automation and customer retention into one scalable ecommerce ecosystem across Dubai and the UAE.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Gif Section */}
            <section className={styles.gifSection}>
                <div className={styles.gifImageWrapper}>
                    <Image
                        src="/better-life/cb8f29fbd33ac84535b129a4fb1bf854b5042d24.gif"
                        alt="Better Life - Paid Media, Marketing Automation, and E-commerce Ecosystem Loop"
                        fill
                        className={styles.gifImg}
                        unoptimized
                    />
                </div>
            </section>

            {/* 4. Challenge Section */}
            <section className={styles.challengeSection}>
                <div className={styles.challengeInner}>
                    <span className={styles.challengeIndicator}>THE CHALLENGE</span>
                    <div className={styles.challengeGrid}>
                        <h2 className={styles.challengeTitle}>
                            FROM PREMIUM<br /> RETAILER TO<br /> ECOMMERCE<br /> GROWTH ENGINE.
                        </h2>
                        <p className={styles.challengeDesc}>
                            <span>·{" "}INCREASE ONLINE REVENUE</span>
                            <span>·{" "}IMPROVE ROAS</span>
                            <span>·{" "}SCALE CUSTOMER ACQUISITION</span>
                            <span>·{" "}REDUCE CART ABANDONMENT</span>
                            <span>·{" "}AUTOMATE COMMUNICATION</span>
                            <span>·{" "}GROW RETENTION</span>
                            <span>·{" "}MAXIMISE RAMADAN, EID, UAE NATIONAL DAY, WHITE FRIDAY +</span>
                            <span style={{ whiteSpace: "pre" }}>{"  "}FESTIVE RETAIL MOMENTS</span>
                        </p>
                    </div>
                </div>
                <div className={styles.challengeImageWrapper}>
                    <Image
                        src="/better-life/7a1803bf0bcb85f8fdd778ba75add82a69dea8a2.png"
                        alt="Abu Dhabi Food Hub - Wavy Glass Architecture Render"
                        fill
                        className={styles.challengeImg}
                    />
                </div>
            </section>

            {/* 5. Strategy Section */}
            <section className={styles.strategySection}>
                <div className={styles.strategyInner}>
                    <span className={styles.strategyIndicator}>OUR STRATEGY</span>
                    <div className={styles.strategyGrid}>
                        <h2 className={styles.strategyTitle}>
                            ONE SYSTEM.<br />EVERY CUSTOMER<br />STAGE.
                        </h2>
                        <p className={styles.strategyDesc}>
                            Paid media, automation and retention worked as one connected framework—from first impression to repeat purchase.
                        </p>
                    </div>

                    <div className={styles.strategyDivider} />

                    <div className={styles.strategyStepsGrid}>
                        {/* Step 01 */}
                        <div className={styles.strategyStep}>
                            <span className={styles.stepNumber}>01</span>
                            <h3 className={styles.stepTitle}>DISCOVER</h3>
                            <p className={styles.stepDesc}>Paid media + seasonal<br /> demand</p>
                        </div>
                        {/* Step 02 */}
                        <div className={styles.strategyStep}>
                            <span className={styles.stepNumber}>02</span>
                            <h3 className={styles.stepTitle}>CONSIDER</h3>
                            <p className={styles.stepDesc}>Product education +<br /> remarketing</p>
                        </div>
                        {/* Step 03 */}
                        <div className={styles.strategyStep}>
                            <span className={styles.stepNumber}>03</span>
                            <h3 className={styles.stepTitle}>CONVERT</h3>
                            <p className={styles.stepDesc}>Shopping, offers + CRO</p>
                        </div>
                        {/* Step 04 */}
                        <div className={styles.strategyStep}>
                            <span className={styles.stepNumber}>04</span>
                            <h3 className={styles.stepTitle}>RETAIN</h3>
                            <p className={styles.stepDesc}>Email + WhatsApp<br /> automation</p>
                        </div>
                        {/* Step 05 */}
                        <div className={styles.strategyStep}>
                            <span className={styles.stepNumber}>05</span>
                            <h3 className={styles.stepTitle}>GROW</h3>
                            <p className={styles.stepDesc}>Repeat purchase +<br /> reactivation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Videos Section */}
            <section className={styles.videosSection}>
                <div className={styles.videosInner}>
                    <div className={styles.videosGrid}>
                        {/* Video 1 */}
                        <CaseStudyVideo
                            src="/better-life/Smeg Stopmotion w Text (1).mp4"
                            className={styles.videoElement}
                            wrapperClassName={styles.videoContainer}
                        />
                        <CaseStudyVideo
                            src="/better-life/Smeg w Text (1).mp4"
                            className={styles.videoElement}
                            wrapperClassName={styles.videoContainer}
                        />
                        <CaseStudyVideo
                            src="/better-life/Miele w Text (1).mp4"
                            className={styles.videoElement}
                            wrapperClassName={styles.videoContainer}
                        />
                    </div>
                </div>
            </section>

            {/* 7. Performance Marketing Section */}
            <section className={styles.performanceSection}>
                <div className={styles.performanceInner}>
                    <span className={styles.performanceIndicator}>04 / PERFORMANCE MARKETING</span>
                    <div className={styles.performanceGrid}>
                        <h2 className={styles.performanceTitle}>
                            MEDIA BUILT FOR<br />MEASURABLE<br />REVENUE.
                        </h2>
                        <p className={styles.performanceDesc}>
                            Campaigns were optimised for ecommerce sales, profitable acquisition and stronger ROAS—not impressions or clicks.
                        </p>
                    </div>

                    <div className={styles.performanceChannelsGrid}>
                        {/* Column 1 */}
                        <div className={styles.performanceColumn}>
                            <h3 className={styles.columnHeader}>GOOGLE COMMERCE</h3>
                            <ul className={styles.columnList}>
                                <li className={styles.columnItem}>Google Ads</li>
                                <li className={styles.columnItem}>Search Advertising</li>
                                <li className={styles.columnItem}>Google Shopping Campaigns</li>
                                <li className={styles.columnItem}>Performance Max Campaigns</li>
                                <li className={styles.columnItem}>Display Advertising</li>
                                <li className={styles.columnItem}>Video Campaigns</li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className={styles.performanceColumn}>
                            <h3 className={styles.columnHeader}>SOCIAL ACQUISITION</h3>
                            <ul className={styles.columnList}>
                                <li className={styles.columnItem}>Meta Ads</li>
                                <li className={styles.columnItem}>Facebook Advertising</li>
                                <li className={styles.columnItem}>Instagram Advertising</li>
                                <li className={styles.columnItem}>TikTok Advertising</li>
                                <li className={styles.columnItem}>Snapchat Advertising</li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className={styles.performanceColumn}>
                            <h3 className={styles.columnHeader}>OPTIMISATION LOOP</h3>
                            <ul className={styles.columnList}>
                                <li className={styles.columnItem}>Dynamic Remarketing</li>
                                <li className={styles.columnItem}>Audience Segmentation</li>
                                <li className={styles.columnItem}>Conversion Optimisation</li>
                                <li className={styles.columnItem}>Creative Testing</li>
                                <li className={styles.columnItem}>Bidding Optimisation</li>
                                <li className={styles.columnItem}>Performance Analysis</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Gallery Banner Section */}
            <section className={styles.galleryBannerSection}>
                <div className={styles.galleryBannerInner}>
                    <div className={styles.galleryBannerImageWrapper}>
                        <Image
                            src="/better-life/bd4e7a8b4cddfddacd3113c8bbd2a783de7771b4-optimized.webp"
                            alt="Better Life - Digital Screens and Brand Media Display Mockups"
                            fill
                            className={styles.galleryBannerImg}
                        />
                    </div>
                </div>
            </section>

            {/* 9. Marketing Automation + Retention Section */}
            <section className={styles.automationSection}>
                <div className={styles.automationInner}>
                    <span className={styles.automationIndicator}>05 / MARKETING AUTOMATION + RETENTION</span>
                    <div className={styles.automationGrid}>
                        <h2 className={styles.automationTitle}>
                            CONVERT ONCE.<br />KEEP THE<br />RELATIONSHIP.
                        </h2>
                        <p className={styles.automationDesc}>
                            Automated customer journeys recovered intent, increased repeat purchase and reduced manual marketing effort.
                        </p>
                    </div>

                    <div className={styles.automationChannelsGrid}>
                        {/* Column 1 */}
                        <div className={styles.automationColumn}>
                            <h3 className={styles.automationColumnHeader}>MARKETING AUTOMATION</h3>
                            <ul className={styles.automationColumnList}>
                                <li className={styles.automationColumnItem}>Welcome journeys</li>
                                <li className={styles.automationColumnItem}>Cart abandonment sequences</li>
                                <li className={styles.automationColumnItem}>Browse abandonment campaigns</li>
                                <li className={styles.automationColumnItem}>Post-purchase communication</li>
                                <li className={styles.automationColumnItem}>Product recommendations</li>
                                <li className={styles.automationColumnItem}>Repeat purchase campaigns</li>
                                <li className={styles.automationColumnItem}>Customer reactivation</li>
                                <li className={styles.automationColumnItem}>Loyalty messaging</li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className={styles.automationColumn}>
                            <h3 className={styles.automationColumnHeader}>WHATSAPP MARKETING</h3>
                            <ul className={styles.automationColumnList}>
                                <li className={styles.automationColumnItem}>Promotional campaigns</li>
                                <li className={styles.automationColumnItem}>Product launches</li>
                                <li className={styles.automationColumnItem}>Flash-sale notifications</li>
                                <li className={styles.automationColumnItem}>Appointment + delivery updates</li>
                                <li className={styles.automationColumnItem}>Seasonal promotions</li>
                                <li className={styles.automationColumnItem}>Customer support</li>
                                <li className={styles.automationColumnItem}>Exclusive offers</li>
                                <li className={styles.automationColumnItem}>Re-engagement campaigns</li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className={styles.automationColumn}>
                            <h3 className={styles.automationColumnHeader}>EMAIL MARKETING</h3>
                            <ul className={styles.automationColumnList}>
                                <li className={styles.automationColumnItem}>Product launches</li>
                                <li className={styles.automationColumnItem}>Seasonal collections</li>
                                <li className={styles.automationColumnItem}>Exclusive offers</li>
                                <li className={styles.automationColumnItem}>Brand campaigns</li>
                                <li className={styles.automationColumnItem}>Premium product education</li>
                                <li className={styles.automationColumnItem}>Automated journeys</li>
                                <li className={styles.automationColumnItem}>Personalised recommendations</li>
                                <li className={styles.automationColumnItem}>Sales events</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Seasonal Ecommerce + Data Section */}
            <section className={styles.seasonalSection}>
                <div className={styles.seasonalInner}>
                    <span className={styles.seasonalIndicator}>06 / SEASONAL ECOMMERCE + DATA</span>
                    <div className={styles.seasonalGrid}>
                        <h2 className={styles.seasonalTitle}>
                            RIGHT MOMENT.<br />RIGHT MESSAGE.<br />RIGHT INVESTMENT.
                        </h2>
                        <p className={styles.seasonalDesc}>
                            Creative, offers and media budgets were planned around UAE demand—then refined using real-time performance signals.
                        </p>
                    </div>

                    <div className={styles.seasonalChannelsGrid}>
                        {/* Column 1 */}
                        <div className={styles.seasonalColumn}>
                            <h3 className={styles.seasonalColumnHeader}>UAE RETAIL CALENDAR</h3>
                            <ul className={styles.seasonalColumnList}>
                                <li className={styles.seasonalColumnItem}>
                                    Ramadan · Eid · UAE National Day · White Friday · Festive + Holiday Campaigns
                                </li>
                                <li className={styles.seasonalColumnItem}>
                                    Summer Promotions · Back-to-School Offers · Limited-Time Promotions
                                </li>
                                <li className={styles.seasonalColumnItem}>
                                    Brand Launch Campaigns · Clearance + Stock Events
                                </li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className={styles.seasonalColumn}>
                            <h3 className={styles.seasonalColumnHeader}>DATA-DRIVEN OPTIMISATION</h3>
                            <ul className={styles.seasonalColumnList}>
                                <li className={styles.seasonalColumnItem}>
                                    Customer Acquisition Cost · ROAS · Conversion Rate · Average Order Value
                                </li>
                                <li className={styles.seasonalColumnItem}>
                                    Customer Lifetime Value · Audience Quality · Creative Performance
                                </li>
                                <li className={styles.seasonalColumnItem}>
                                    Landing Page Effectiveness
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Reels Section */}
            <section className={styles.reelsSection}>
                <div className={styles.reelsInner}>
                    <div className={styles.reelsGrid}>
                        {/* Reel 1 */}
                        <CaseStudyVideo
                            src="/better-life/Betterlife_Dec_Reel_2 (1).mp4"
                            className={styles.reelElement}
                            wrapperClassName={styles.reelContainer}
                        />
                        <CaseStudyVideo
                            src="/better-life/Reel 3 (Emirati Couple) Version 1_Revised First Cut_29.07.2024 (1).mp4"
                            className={styles.reelElement}
                            wrapperClassName={styles.reelContainer}
                        />
                        <CaseStudyVideo
                            src="/better-life/Reel 1 (Siemens)_Fourth Cut_12.07.2024 (1).mp4"
                            className={styles.reelElement}
                            wrapperClassName={styles.reelContainer}
                        />
                    </div>
                </div>
            </section>

            {/* 12. Results + Impact Section */}
            <section className={styles.resultsSection}>
                <div className={styles.resultsInner}>
                    <span className={styles.resultsIndicator}>07 / RESULTS + IMPACT</span>
                    <div className={styles.resultsGrid}>
                        <h2 className={styles.resultsTitle}>
                            A SCALABLE<br />REVENUE ENGINE.
                        </h2>
                        <p className={styles.resultsDesc}>
                            Paid advertising, marketing automation, retention and data intelligence became one connected ecommerce strategy for sustained growth across Dubai and the UAE.
                        </p>
                    </div>

                    <div className={styles.resultsItemsGrid}>
                        {/* Row 1 */}
                        <div className={styles.resultsItem}>
                            <span>01 INCREASED ECOMMERCE SALES</span>
                        </div>
                        <div className={styles.resultsItem}>
                            <span>05 OMNICHANNEL PAID-MEDIA GROWTH</span>
                        </div>
                        {/* Row 2 */}
                        <div className={styles.resultsItem}>
                            <span>02 IMPROVED ROAS</span>
                        </div>
                        <div className={styles.resultsItem}>
                            <span>06 STRONGER WHATSAPP + EMAIL ENGAGEMENT</span>
                        </div>
                        {/* Row 3 */}
                        <div className={styles.resultsItem}>
                            <span>03 HIGHER-QUALITY CUSTOMER ACQUISITION</span>
                        </div>
                        <div className={styles.resultsItem}>
                            <span>07 HIGH-PERFORMING SEASONAL CAMPAIGNS</span>
                        </div>
                        {/* Row 4 */}
                        <div className={styles.resultsItem}>
                            <span>04 STRONGER RETENTION + REPEAT PURCHASE</span>
                        </div>
                        <div className={styles.resultsItem}>
                            <span>08 FUTURE-READY FULL-FUNNEL ECOSYSTEM</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 13. Services Section */}
            <section className={styles.servicesSection}>
                <div className={styles.servicesInner}>
                    <span className={styles.servicesIndicator}>08 / SERVICES DELIVERED</span>
                    <h2 className={styles.servicesTitle}>
                        FULL-FUNNEL<br />ECOMMERCE GROWTH.
                    </h2>

                    <div className={styles.servicesGrid}>
                        {/* Column 1 */}
                        <div className={styles.servicesColumn}>
                            <ul className={styles.servicesList}>
                                <li className={styles.servicesItem}>PERFORMANCE MARKETING</li>
                                <li className={styles.servicesItem}>ECOMMERCE MARKETING</li>
                                <li className={styles.servicesItem}>PERFORMANCE MARKETING DUBAI</li>
                                <li className={styles.servicesItem}>PERFORMANCE MARKETING UAE</li>
                                <li className={styles.servicesItem}>GOOGLE ADS MANAGEMENT</li>
                                <li className={styles.servicesItem}>META ADS MANAGEMENT</li>
                                <li className={styles.servicesItem}>FACEBOOK ADVERTISING</li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className={styles.servicesColumn}>
                            <ul className={styles.servicesList}>
                                <li className={styles.servicesItem}>INSTAGRAM ADVERTISING</li>
                                <li className={styles.servicesItem}>TIKTOK ADVERTISING</li>
                                <li className={styles.servicesItem}>SNAPCHAT ADVERTISING</li>
                                <li className={styles.servicesItem}>GOOGLE SHOPPING CAMPAIGNS</li>
                                <li className={styles.servicesItem}>PERFORMANCE MAX CAMPAIGNS</li>
                                <li className={styles.servicesItem}>MARKETING AUTOMATION</li>
                                <li className={styles.servicesItem}>WHATSAPP MARKETING</li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className={styles.servicesColumn}>
                            <ul className={styles.servicesList}>
                                <li className={styles.servicesItem}>EMAIL MARKETING</li>
                                <li className={styles.servicesItem}>ECOMMERCE GROWTH STRATEGY</li>
                                <li className={styles.servicesItem}>CONVERSION RATE OPTIMISATION (CRO)</li>
                                <li className={styles.servicesItem}>CUSTOMER JOURNEY MAPPING</li>
                                <li className={styles.servicesItem}>AUDIENCE SEGMENTATION</li>
                                <li className={styles.servicesItem}>REMARKETING CAMPAIGNS</li>
                                <li className={styles.servicesItem}>ANALYTICS & PERFORMANCE REPORTING</li>
                            </ul>
                        </div>
                    </div>
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
