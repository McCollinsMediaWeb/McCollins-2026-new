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

export default function CryoCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      if (!mounted || !containerRef.current) return;

      // 1. Hero animations
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

      // 2. Scroll triggers
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

      const videoItems = containerRef.current.querySelectorAll("." + styles.videoWrapper);
      if (videoItems.length > 0) {
        gsap.fromTo(
          videoItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.videosSection,
              start: "top 80%",
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

      const galleryItems = containerRef.current.querySelectorAll("." + styles.galleryWrapper);
      if (galleryItems.length > 0) {
        gsap.fromTo(
          galleryItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.gallerySection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const strategyIntro = containerRef.current.querySelector("." + styles.strategyIntroContent);
      if (strategyIntro) {
        gsap.fromTo(
          strategyIntro,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.strategyIntroSection,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const positioningContent = containerRef.current.querySelector("." + styles.positioningContent);
      const positioningImg = containerRef.current.querySelector("." + styles.positioningImageWrapper);
      if (positioningContent) {
        gsap.fromTo(
          positioningContent.querySelector("." + styles.positioningLeft),
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.positioningSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
      if (positioningImg) {
        gsap.fromTo(
          positioningImg,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.positioningSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const socialContent = containerRef.current.querySelector("." + styles.socialContent);
      const socialImg = containerRef.current.querySelector("." + styles.socialImageWrapper);
      if (socialContent) {
        gsap.fromTo(
          socialContent.querySelector("." + styles.socialHeading),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.socialSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
      if (socialImg) {
        gsap.fromTo(
          socialImg,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.socialSection,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const gifWrapper = containerRef.current.querySelector("." + styles.gifWrapper);
      if (gifWrapper) {
        gsap.fromTo(
          gifWrapper,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.gridSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const contentProdSec = containerRef.current.querySelector("." + styles.contentProdSection);
      if (contentProdSec) {
        gsap.fromTo(
          contentProdSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentProdSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const tripleVideoItems = containerRef.current.querySelectorAll("." + styles.tripleVideoWrapper);
      if (tripleVideoItems.length > 0) {
        gsap.fromTo(
          tripleVideoItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "." + styles.tripleVideosSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const perfSec = containerRef.current.querySelector("." + styles.perfSection);
      if (perfSec) {
        gsap.fromTo(
          perfSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: perfSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const funnelDevSec = containerRef.current.querySelector("." + styles.funnelDevSection);
      if (funnelDevSec) {
        gsap.fromTo(
          funnelDevSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: funnelDevSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const influencerSec = containerRef.current.querySelector("." + styles.influencerSection);
      if (influencerSec) {
        gsap.fromTo(
          influencerSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: influencerSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const launchSec = containerRef.current.querySelector("." + styles.launchSection);
      if (launchSec) {
        gsap.fromTo(
          launchSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: launchSec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const engineSec = containerRef.current.querySelector("." + styles.engineSection);
      if (engineSec) {
        gsap.fromTo(
          engineSec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: engineSec,
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
            src="/cryo/e10ae3452971f405189d915fb9572403e5e692cf.webp"
            alt="CRYO - Premium Wellness Chamber"
            fill
            className={styles.heroImage}
            priority
          />
          {/* Overlay Text */}
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>
              BUILDING A PREMIUM WELLNESS<br />
              BRAND THROUGH STRATEGIC<br />
              MARKETING & PERFORMANCE
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Metadata Section */}
      <section className={styles.infoSection}>
        <div className={styles.infoSectionInner}>
          <ul className={styles.metaList}>
            <li className={styles.metaItem}>Strategy</li>
            <li className={styles.metaItem}>Social</li>
            <li className={styles.metaItem}>Performance</li>
            <li className={styles.metaItem}>Content</li>
          </ul>

          <div className={styles.descriptionWrapper}>
            <p className={styles.descriptionParagraph}>
              CRYO UAE partnered with us to strengthen its position as one of the UAE's leading wellness and recovery destinations. Our objective extended beyond increasing brand awareness—we built a complete marketing ecosystem focused on attracting qualified audiences, driving appointment bookings, expanding into new markets, and supporting business growth across Dubai and Abu Dhabi.
            </p>
            <p className={styles.descriptionParagraph}>
              From launching the Dubai Hills branch to scaling customer acquisition through performance marketing, influencer collaborations, and high-quality content production, we developed an integrated strategy that consistently converted attention into appointments.
            </p>
          </div>
        </div>
      </section>

      {/* 2b. Videos Showcase Section */}
      <section className={styles.videosSection}>
        <div className={styles.videosGrid}>
          <CaseStudyVideo
            src="/cryo/Cryo Body - AUH.mp4"
            className={styles.videoElement}
            wrapperClassName={styles.videoWrapper}
          />
          <CaseStudyVideo
            src="/cryo/CRYO _Stretching Post Size.mp4"
            className={styles.videoElement}
            wrapperClassName={styles.videoWrapper}
          />
        </div>
      </section>

      {/* 3. Challenge Section */}
      <section className={styles.challengeSection}>
        <div className={styles.challengeContent}>
          <div className={styles.challengeLeft}>
            <span className={styles.challengeLabel}>THE CHALLENGE</span>
            <h2 className={styles.challengeHeading}>
              THE WELLNESS<br />
              INDUSTRY IS<br />
              HIGHLY<br />
              COMPETITIVE.
            </h2>
          </div>

          <div className={styles.challengeRight}>
            <p className={styles.challengeLead}>
              The wellness industry is highly competitive, with consumers seeking trusted brands that deliver measurable results. CRYO UAE required a marketing strategy that would:
            </p>
            <ul className={styles.challengeList}>
              <li>Increase brand visibility across the UAE.</li>
              <li>Position the brand as a premium recovery and wellness destination.</li>
              <li>Generate qualified appointment bookings rather than vanity metrics.</li>
              <li>Support the launch of the Dubai Hills location.</li>
              <li>Drive consistent footfall across Dubai and Abu Dhabi branches.</li>
              <li>Create a scalable customer acquisition funnel for long-term growth.</li>
            </ul>
          </div>
        </div>

        <div className={styles.challengeImageWrapper}>
          <Image
            src="/cryo/7a1803bf0bcb85f8fdd778ba75add82a69dea8a2.png"
            alt="CRYO Chamber Structure Detail"
            width={1920}
            height={500}
            className={styles.challengeImage}
          />
        </div>
      </section>

      {/* 3b. Gallery Showcase Section */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryWrapper}>
            <Image
              src="/cryo/ce95b50ff49df25a6960f3daf047e62dd8e6eda5.jpg"
              alt="CRYO Treatment Image"
              fill
              className={styles.galleryImage}
            />
          </div>
          <CaseStudyVideo
            src="/cryo/cryp stp 2.mp4"
            className={styles.galleryVideo}
            wrapperClassName={styles.galleryWrapper}
          />
        </div>
      </section>

      {/* 3c. Strategy Intro Section */}
      <section className={styles.strategyIntroSection}>
        <div className={styles.strategyIntroContent}>
          <span className={styles.strategyIntroLabel}>OUR STRATEGY</span>
          <h3 className={styles.strategyIntroText}>
            Rather than treating each marketing channel independently, we built a full-funnel growth strategy connecting brand awareness directly to conversions.
          </h3>
        </div>
      </section>

      {/* 3d. Brand Positioning Section */}
      <section className={styles.positioningSection}>
        <div className={styles.positioningContent}>
          <div className={styles.positioningLeft}>
            <span className={styles.positioningLabel}>BRAND POSITIONING</span>
            <h2 className={styles.positioningHeading}>
              WE REFINED CRYO UAE'S DIGITAL PRESENCE TO REINFORCE ITS PREMIUM POSITIONING WITHIN THE WELLNESS, LONGEVITY, RECOVERY, AND PERFORMANCE SPACE.
            </h2>
            <span className={styles.positioningSubheading}>This included:</span>
            <ul className={styles.positioningList}>
              <li><span>i)</span> Consistent visual identity across all platforms.</li>
              <li><span>ii)</span> Messaging tailored to both wellness-conscious consumers and high-performance audiences.</li>
              <li><span>iii)</span> Clear communication of treatment benefits.</li>
              <li><span>iv)</span> Location-specific campaigns for Dubai and Abu Dhabi.</li>
            </ul>
          </div>

          <div className={styles.positioningRight}>
            <div className={styles.positioningImageWrapper}>
              <Image
                src="/cryo/5484aa6b7c4a9cfcf825183a2b709390f296f947.webp"
                alt="CRYO Brand Positioning Diagram"
                width={800}
                height={600}
                className={styles.positioningImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3e. Social Media Section */}
      <section className={styles.socialSection}>
        <div className={styles.socialContent}>
          <span className={styles.socialLabel}>SOCIAL MEDIA MANAGEMENT</span>
          <h3 className={styles.socialHeading}>
            We managed CRYO UAE's social media presence with a content-first strategy designed to educate, engage, and convert.
          </h3>
          <div className={styles.socialImageWrapper}>
            <Image
              src="/cryo/fed81af42ec791efbea80a0aebc2d09c035d610b.png"
              alt="CRYO Social Media Grid Mockup"
              width={1200}
              height={900}
              className={styles.socialImage}
            />
          </div>
        </div>
      </section>

      {/* 3f. Social Grid Gif Section */}
      <section className={styles.gridSection}>
        <div className={styles.gridContent}>
          <div className={styles.gifWrapper}>
            <Image
              src="/cryo/4f52c421d61d1c36a217758e982f7cf301624b48.gif"
              alt="CRYO Social Feed Animation Grid"
              width={1200}
              height={800}
              className={styles.gridGif}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* 3g. Content Production Section */}
      <section className={styles.contentProdSection}>
        <div className={styles.contentProdContent}>
          <div className={styles.contentProdLeft}>
            <span className={styles.contentProdLabel}>CONTENT PRODUCTION</span>
            <h2 className={styles.contentProdHeading}>
              CONTENT BECAME<br />
              ONE OF THE BRAND'S<br />
              STRONGEST GROWTH<br />
              ASSETS.
            </h2>
          </div>

          <div className={styles.contentProdRight}>
            <p className={styles.contentProdLead}>
              We planned and produced premium photo and video content across multiple campaigns, ensuring every asset could be repurposed across paid advertising, social media, website content, influencer campaigns, and promotional launches.
            </p>
            <span className={styles.contentProdSubheading}>Our production focused on showcasing:</span>
            <ul className={styles.contentProdList}>
              <li>Real treatment experiences</li>
              <li>Clinic environment</li>
              <li>Practitioner expertise</li>
              <li>Lifestyle integration</li>
              <li>Premium customer experience</li>
              <li>Recovery and wellness journeys</li>
            </ul>
            <p className={styles.contentProdOutro}>
              This consistent content engine significantly increased engagement while improving paid advertising performance.
            </p>
          </div>
        </div>
      </section>

      {/* 3h. Triple Videos Showcase Section */}
      <section className={styles.tripleVideosSection}>
        <div className={styles.tripleVideosGrid}>
          <CaseStudyVideo
            src="/cryo/CRYO Hydrafacial.mp4"
            className={styles.tripleVideoElement}
            wrapperClassName={styles.tripleVideoWrapper}
          />
          <CaseStudyVideo
            src="/cryo/Cryo Physio - AUH.mp4"
            className={styles.tripleVideoElement}
            wrapperClassName={styles.tripleVideoWrapper}
          />
          <CaseStudyVideo
            src="/cryo/Cryo Body - AUH.mp4"
            className={styles.tripleVideoElement}
            wrapperClassName={styles.tripleVideoWrapper}
          />
        </div>
      </section>

      {/* 3i. Performance Marketing Section */}
      <section className={styles.perfSection}>
        <div className={styles.perfContent}>
          <div className={styles.perfLeft}>
            <span className={styles.perfLabel}>Performance Marketing</span>
            <h2 className={styles.perfHeading}>
              Our paid media strategy was built around one primary objective:
            </h2>
            <div className={styles.perfObjectiveCard}>
              <span className={styles.perfCardLabel}>PRIMARY OBJECTIVE</span>
              <h3 className={styles.perfCardHeading}>
                Generate qualified appointment bookings.
              </h3>
            </div>
            <p className={styles.perfLeftText}>
              We developed highly targeted campaigns across Meta platforms that optimized for lead generation and appointment conversions rather than simple reach.
            </p>
          </div>

          <div className={styles.perfRight}>
            <span className={styles.perfSubheading}>The strategy included:</span>
            <ul className={styles.perfList}>
              <li>Audience segmentation</li>
              <li>Retargeting campaigns</li>
              <li>Lead generation campaigns</li>
              <li>Conversion-focused creatives</li>
              <li>Landing page optimization</li>
              <li>Continuous creative testing</li>
              <li>Budget optimization</li>
              <li>Performance reporting</li>
            </ul>
            <p className={styles.perfRightText}>
              Every campaign was measured against tangible business outcomes, ensuring marketing investment translated into measurable clinic growth.
            </p>
          </div>
        </div>
      </section>

      {/* 3j. Sales Funnel Development Section */}
      <section className={styles.funnelDevSection}>
        <div className={styles.funnelDevContent}>
          <div className={styles.funnelDevLeft}>
            <span className={styles.funnelDevLabel}>Sales Funnel Development</span>
            <h2 className={styles.funnelDevHeading}>
              TO MAXIMISE CONVERSION RATES,<br />
              WE DESIGNED A COMPLETE<br />
              CUSTOMER ACQUISITION FUNNEL.
            </h2>
            <p className={styles.funnelDevLead}>
              The funnel guided potential clients from awareness to booking by combining:
            </p>
            <ul className={styles.funnelDevList}>
              <li>High-performing paid campaigns</li>
              <li>Educational content</li>
              <li>Social proof</li>
              <li>Influencer validation</li>
              <li>Lead capture</li>
              <li>Follow-up strategies</li>
              <li>Appointment-focused conversion journeys</li>
            </ul>
            <p className={styles.funnelDevOutro}>
              This created a scalable system that consistently generated qualified enquiries and increased bookings across both Dubai and Abu Dhabi locations.
            </p>
          </div>

          <div className={styles.funnelDevRight}>
            <div className={styles.funnelDevImageWrapper}>
              <Image
                src="/cryo/Customer acquisition funnel visual.png"
                alt="Customer Acquisition Funnel Visual"
                width={800}
                height={600}
                className={styles.funnelDevImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3k. Influencer Marketing Section */}
      <section className={styles.influencerSection}>
        <div className={styles.influencerContent}>
          <div className={styles.influencerLeft}>
            <span className={styles.influencerLabel}>Influencer Marketing</span>
            <h2 className={styles.influencerHeading}>
              Influencer partnerships<br />
              became a major driver of<br />
              awareness, credibility, and<br />
              appointment generation.
            </h2>
            <p className={styles.influencerLeftText}>
              We identified, negotiated, managed, and executed collaborations with a diverse network of carefully selected creators, fitness personalities, athletes, wellness advocates, and lifestyle influencers whose audiences aligned with CRYO UAE's target market.
            </p>
          </div>

          <div className={styles.influencerRight}>
            <span className={styles.influencerSubheading}>Our responsibilities included:</span>
            <ul className={styles.influencerList}>
              <li>Influencer strategy</li>
              <li>Talent sourcing</li>
              <li>Campaign planning</li>
              <li>Creative direction</li>
              <li>Content approvals</li>
              <li>On-site production</li>
              <li>Performance tracking</li>
              <li>Long-term relationship management</li>
            </ul>
            <p className={styles.influencerRightText}>
              Rather than focusing solely on reach, every collaboration was designed to create authentic experiences that generated trust, user-generated content, and measurable booking enquiries.
            </p>
            <p className={styles.influencerRightOutro}>
              These partnerships significantly expanded CRYO UAE's visibility across the UAE while positioning the brand as a preferred destination for recovery, wellness, and performance optimization.
            </p>
          </div>
        </div>
      </section>

      {/* 3l. Dubai Hills Launch Section */}
      <section className={styles.launchSection}>
        <div className={styles.launchContent}>
          <div className={styles.launchLeft}>
            <CaseStudyVideo
              src="/cryo/Cryo_Aug_Benny Talks_3.mp4"
              className={styles.launchVideo}
              wrapperClassName={styles.launchVideoWrapper}
            />
          </div>

          <div className={styles.launchRight}>
            <span className={styles.launchLabel}>DUBAI HILLS LAUNCH</span>
            <h2 className={styles.launchHeading}>
              LAUNCHED FOR<br />
              BOOKINGS,NOT BUZZ.
            </h2>
            <p className={styles.launchText}>
              Location-led paid media, creator activations, content production and booking offers drove awareness and appointments from day one.
            </p>
            <div className={styles.launchBadges}>
              <span className={styles.launchBadge}>PAID MEDIA</span>
              <span className={styles.launchBadge}>CREATORS</span>
              <span className={styles.launchBadge}>CONTENT</span>
              <span className={styles.launchBadge}>BOOKINGS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3m. Customer Acquisition Engine Section */}
      <section className={styles.engineSection}>
        <div className={styles.engineHeader}>
          <div className={styles.engineHeaderLeft}>
            <h2 className={styles.engineHeading}>
              A HIGH-PERFORMING<br />
              CUSTOMER ACQUISITION<br />
              ENGINE.
            </h2>
          </div>
          <div className={styles.engineHeaderRight}>
            <p className={styles.engineLead}>
              Our integrated marketing strategy helped transform CRYO UAE's digital presence into a high-performing customer acquisition engine.
            </p>
            <span className={styles.engineSubheading}>Key outcomes included:</span>
          </div>
        </div>

        <div className={styles.engineGrid}>
          <div className={styles.engineCard}>
            <span className={styles.engineCardNumber}>01</span>
            <p className={styles.engineCardText}>
              Increased appointment bookings through performance-driven campaigns.
            </p>
          </div>
          <div className={styles.engineCard}>
            <span className={styles.engineCardNumber}>02</span>
            <p className={styles.engineCardText}>
              Stronger brand positioning within the UAE wellness and recovery industry.
            </p>
          </div>
          <div className={styles.engineCard}>
            <span className={styles.engineCardNumber}>03</span>
            <p className={styles.engineCardText}>
              Successful digital launch of the Dubai Hills branch.
            </p>
          </div>
          <div className={styles.engineCard}>
            <span className={styles.engineCardNumber}>04</span>
            <p className={styles.engineCardText}>
              Consistent marketing support across Dubai and Abu Dhabi locations.
            </p>
          </div>
          <div className={styles.engineCard}>
            <span className={styles.engineCardNumber}>05</span>
            <p className={styles.engineCardText}>
              High-performing influencer collaborations that expanded brand reach and generated qualified enquiries.
            </p>
          </div>
          <div className={styles.engineCard}>
            <span className={styles.engineCardNumber}>06</span>
            <p className={styles.engineCardText}>
              A scalable sales funnel connecting awareness, engagement, and appointment bookings.
            </p>
          </div>
          <div className={styles.engineCard}>
            <span className={styles.engineCardNumber}>07</span>
            <p className={styles.engineCardText}>
              Continuous production of premium content supporting both organic and paid marketing initiatives.
            </p>
          </div>
          <div className={styles.engineCard}>
            <span className={styles.engineCardNumber}>08</span>
            <p className={styles.engineCardText}>
              Improved customer acquisition through strategic performance marketing and conversion-focused creative.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
