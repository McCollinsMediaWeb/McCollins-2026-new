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

export default function AbuDhabiFoodHubCaseStudy() {
    const containerRef = useRef(null);
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

            const guidelinesSec = containerRef.current.querySelector("." + styles.guidelinesSection);
            if (guidelinesSec) {
                gsap.fromTo(
                    guidelinesSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: guidelinesSec,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            const billboardSec = containerRef.current.querySelector("." + styles.billboardSection);
            if (billboardSec) {
                gsap.fromTo(
                    billboardSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: billboardSec,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            const frameworkSec = containerRef.current.querySelector("." + styles.frameworkSection);
            if (frameworkSec) {
                gsap.fromTo(
                    frameworkSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: frameworkSec,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            const flagBannerSec = containerRef.current.querySelector("." + styles.flagBannerSection);
            if (flagBannerSec) {
                gsap.fromTo(
                    flagBannerSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: flagBannerSec,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            const governanceSec = containerRef.current.querySelector("." + styles.governanceSection);
            if (governanceSec) {
                gsap.fromTo(
                    governanceSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: governanceSec,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            const applicationsSec = containerRef.current.querySelector("." + styles.applicationsSection);
            if (applicationsSec) {
                gsap.fromTo(
                    applicationsSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: applicationsSec,
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

            const trikeSec = containerRef.current.querySelector("." + styles.trikeSection);
            if (trikeSec) {
                gsap.fromTo(
                    trikeSec,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: trikeSec,
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
                        src="/food-hub/d6a7b1f5da76949cd949f6db947a05b5de7ec513.jpg"
                        alt="Abu Dhabi Food Hub - Global Food Security"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    {/* Overlay Text */}
                    <div className={styles.heroTextContainer}>
                        <h1 className={styles.heroTitle}>
                            A future-ready brand<br /> system for a landmark<br /> food-security initiative.
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
                        <li className={styles.metaItem}>IDENTITY</li>
                        <li className={styles.metaItem}>GUIDELINES</li>
                        <li className={styles.metaItem}>GOVERNANCE</li>
                    </ul>

                    <div className={styles.descriptionWrapper}>
                        <p className={styles.descriptionParagraph}>
                            Abu Dhabi Food Hub unites logistics, innovation, manufacturing and global food trade within one integrated destination. McCollins created the strategic and visual foundation needed to communicate credibility, progress and long-term ambition to government, investors, partners and commercial stakeholders.
                        </p>
                        <p className={styles.descriptionParagraph}>
                            LOGISTICS  /  INNOVATION  /  MANUFACTURING  /  GLOBAL TRADE
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Animating GIFs Section */}
            <section className={styles.gifSection}>
                <div className={styles.gifInner}>
                    <div className={styles.gifWrapperLeft}>
                        <Image
                            src="/food-hub/4a3b12a62d774dbe25ba295acce21e9a4c8878c2.gif"
                            alt="Abu Dhabi Food Hub Branding Animation - Black"
                            fill
                            unoptimized
                            className={styles.gifImage}
                        />
                    </div>
                    <div className={styles.gifWrapperRight}>
                        <Image
                            src="/food-hub/d1bd941c92bd4490dc75483bea7d971cb6ba8404.gif"
                            alt="Abu Dhabi Food Hub Branding Animation - White"
                            fill
                            unoptimized
                            className={styles.gifImage}
                        />
                    </div>
                </div>
            </section>

            {/* 4. Challenge Section */}
            <section className={styles.challengeSection}>
                <div className={styles.challengeInner}>
                    <span className={styles.challengeIndicator}>02 / THE CHALLENGE</span>
                    <div className={styles.challengeGrid}>
                        <h2 className={styles.challengeTitle}>
                            AUTHORITY<br />WITHOUT<br />RIGIDITY.
                        </h2>
                        <p className={styles.challengeDesc}>
                            Create an authoritative, future-ready identity that reflects innovation, sustainability and global trade—while scaling consistently across digital, print and environmental applications.
                        </p>
                    </div>
                    <div className={styles.challengeDivider} />
                    <div className={styles.challengeStakeholders}>
                        <span>GOVERNMENT ENTITIES</span>
                        <span>INTERNATIONAL INVESTORS</span>
                        <span>STRATEGIC PARTNERS</span>
                        <span>COMMERCIAL STAKEHOLDERS</span>
                    </div>
                </div>
                <div className={styles.challengeImageWrapper}>
                    <Image
                        src="/food-hub/7a1803bf0bcb85f8fdd778ba75add82a69dea8a2.png"
                        alt="Abu Dhabi Food Hub - Wavy Glass Architecture Render"
                        fill
                        className={styles.challengeImg}
                    />
                </div>
            </section>

            {/* 5. Guidelines Section */}
            <section className={styles.guidelinesSection}>
                <div className={styles.guidelinesInner}>
                    <div className={styles.guidelinesWrapper}>
                        <Image
                            src="/food-hub/44df40286ee5526188dc4b6de14e691f388840eb.png"
                            alt="Abu Dhabi Food Hub - Typeface Guidelines"
                            fill
                            className={styles.guidelinesImg}
                        />
                    </div>
                    <div className={styles.guidelinesWrapper}>
                        <Image
                            src="/food-hub/image 12161 [Vectorized].png"
                            alt="Abu Dhabi Food Hub - Logo Structure Design Grid"
                            fill
                            className={styles.guidelinesImg}
                        />
                    </div>
                </div>
            </section>

            {/* 6. Billboard Section */}
            <section className={styles.billboardSection}>
                <div className={styles.billboardInner}>
                    <div className={styles.billboardLeft}>
                        <div className={styles.billboardImageWrapper}>
                            <Image
                                src="/food-hub/ebf297ec592ba4dbf49c09500a156952fc97f760.jpg"
                                alt="Abu Dhabi Food Hub - Outdoor Billboard Hoarding Mockup"
                                fill
                                className={styles.billboardImg}
                            />
                        </div>
                    </div>
                    <div className={styles.billboardRight} />
                </div>
            </section>

            {/* 7. Brand Framework Section */}
            <section className={styles.frameworkSection}>
                <div className={styles.frameworkInner}>
                    <span className={styles.frameworkIndicator}>03 / THE BRAND FRAMEWORK</span>
                    <div className={styles.frameworkGrid}>
                        <h2 className={styles.frameworkTitle}>
                            FOUR LAYERS.<br />ONE CONSISTENT<br />BRAND.
                        </h2>
                        <p className={styles.frameworkDesc}>
                            Strategy, identity, guidelines and governance were developed as one connected system.
                        </p>
                    </div>

                    <div className={styles.frameworkLayersGrid}>
                        {/* Layer 01 */}
                        <div className={styles.frameworkLayerItem}>
                            <h3 className={styles.layerHeader}>01 BRAND STRATEGY</h3>
                            <div className={styles.layerDivider} />
                            <p className={styles.layerContent}>
                                Positioning · Purpose · Vision and mission · Values · Personality · Audience considerations · Strategic messaging · Visual direction
                            </p>
                        </div>

                        {/* Layer 02 */}
                        <div className={styles.frameworkLayerItem}>
                            <h3 className={styles.layerHeader}>02 BRAND IDENTITY DESIGN</h3>
                            <div className={styles.layerDivider} />
                            <p className={styles.layerContent}>
                                Logo system and variations · Clear space and sizing · Colour palette · Typography · Graphic elements · Iconography · Photography · Illustration · Grids · Patterns · Visual language
                            </p>
                        </div>

                        {/* Layer 03 */}
                        <div className={styles.frameworkLayerItem}>
                            <h3 className={styles.layerHeader}>03 COMPREHENSIVE BRAND GUIDELINES</h3>
                            <div className={styles.layerDivider} />
                            <p className={styles.layerContent}>
                                Brand philosophy · Logo usage · Colour specifications · Typography standards · Visual hierarchy · Grid systems · Correct and incorrect use · Co-branding · Accessibility
                            </p>
                        </div>

                        {/* Layer 04 */}
                        <div className={styles.frameworkLayerItem}>
                            <h3 className={styles.layerHeader}>04 SCALABLE DESIGN SYSTEM</h3>
                            <div className={styles.layerDivider} />
                            <p className={styles.layerContent}>
                                Digital applications · Print applications · Stationery · Presentation templates · Marketing collateral · Social media · Signage · Environmental branding
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Flag Banner Section */}
            <section className={styles.flagBannerSection}>
                <div className={styles.flagBannerImageWrapper}>
                    <Image
                        src="/food-hub/296bff61a4ff2ae8a4e4927049f583e1211867e2 (1).png"
                        alt="Abu Dhabi Food Hub - Outdoor Flags Branding Mockup"
                        fill
                        className={styles.flagBannerImg}
                    />
                </div>
            </section>

            {/* 9. Brand Governance Section */}
            <section className={styles.governanceSection}>
                <div className={styles.governanceInner}>
                    <span className={styles.governanceIndicator}>04 / BRAND GOVERNANCE</span>
                    <div className={styles.governanceGrid}>
                        <h2 className={styles.governanceTitle}>
                            CLEAR RULES.<br />CONSISTENT<br />EXECUTION.
                        </h2>
                        <p className={styles.governanceDesc}>
                            The comprehensive brand guideline became one source of truth for internal teams, government entities, agencies, designers and partners.
                        </p>
                    </div>

                    <div className={styles.governanceItemsList}>
                        {/* Item 01 */}
                        <div className={styles.governanceItem}>
                            <h3 className={styles.governanceItemHeader}>WHO USES IT</h3>
                            <p className={styles.governanceItemContent}>
                                Internal teams · Government entities · Agencies · Designers · Partners
                            </p>
                        </div>

                        {/* Item 02 */}
                        <div className={styles.governanceItem}>
                            <h3 className={styles.governanceItemHeader}>WHAT IT CONTROLS</h3>
                            <p className={styles.governanceItemContent}>
                                Brand communications · Partnerships · Campaigns · Co-branding · Applications
                            </p>
                        </div>

                        {/* Item 03 */}
                        <div className={styles.governanceItem}>
                            <h3 className={styles.governanceItemHeader}>WHAT IT PROTECTS</h3>
                            <p className={styles.governanceItemContent}>
                                Consistency · Recognition · Accessibility · Quality
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Future-Ready Applications Section */}
            <section className={styles.applicationsSection}>
                <div className={styles.applicationsInner}>
                    <div className={styles.applicationsLeft}>
                        <div className={styles.applicationsLeftTop}>
                            <span className={styles.applicationsIndicator}>05 / FUTURE-READY APPLICATIONS</span>
                            <h2 className={styles.applicationsTitle}>
                                BUILT FOR EVERY<br />NEXT PHASE.
                            </h2>
                            <p className={styles.applicationsDesc}>
                                A flexible design system supports future growth without weakening brand recognition.
                            </p>
                        </div>
                        <div className={styles.applicationsFootnote}>
                            <span>CAMPAIGNS / EVENTS / DIGITAL PRODUCTS / PUBLICATIONS</span>
                            <span>INVESTMENT MATERIALS / EXHIBITIONS / STAKEHOLDER COMMUNICATIONS</span>
                        </div>
                    </div>
                    <div className={styles.applicationsRight}>
                        <Image
                            src="/food-hub/c941c2a3fbb10c044ea42a56c8acb1a7f89f618e (1) - Copy.png"
                            alt="Abu Dhabi Food Hub - Wavy Metallic Spheres Art Mockup"
                            width={1920}
                            height={1226}
                            className={styles.applicationsImg}
                        />
                    </div>
                </div>
            </section>


            {/* 12. Trike Section */}
            <section className={styles.trikeSection}>
                <div className={styles.trikeImageWrapper}>
                    <Image
                        src="/food-hub/48599e403c89b0c1ba42a306f2e7d070d623ddaa-optimized.webp"
                        alt="Abu Dhabi Food Hub - Branded Cargo Trike Vehicle Mockup"
                        fill
                        className={styles.trikeImg}
                    />
                </div>
            </section>

            {/* 13. Results + Impact Section */}
            <section className={styles.impactSection}>
                <div className={styles.impactInner}>
                    <span className={styles.impactIndicator}>06 / RESULTS + IMPACT</span>
                    <div className={styles.impactGrid}>
                        <h2 className={styles.impactTitle}>
                            ONE IDENTITY.<br />LONG-TERM VALUE.
                        </h2>
                        <p className={styles.impactDesc}>
                            The brand became a foundation for trust, recognition and long-term consistency—aligned with government standards and international ambition.
                        </p>
                    </div>

                    <div className={styles.impactItemsGrid}>
                        {/* Item 01 */}
                        <div className={styles.impactItem}>
                            <span>01 DISTINCTIVE, FUTURE-READY GOVERNMENT BRAND</span>
                        </div>
                        {/* Item 04 */}
                        <div className={styles.impactItem}>
                            <span>04 CONSISTENT FRAMEWORK FOR TEAMS + PARTNERS</span>
                        </div>
                        {/* Item 02 */}
                        <div className={styles.impactItem}>
                            <span>02 COMPREHENSIVE GUIDELINES + BRAND GOVERNANCE</span>
                        </div>
                        {/* Item 05 */}
                        <div className={styles.impactItem}>
                            <span>05 MODERN, INTERNATIONALLY RELEVANT VISUAL LANGUAGE</span>
                        </div>
                        {/* Item 03 */}
                        <div className={styles.impactItem}>
                            <span>03 SCALABLE DIGITAL, PRINT + ENVIRONMENTAL SYSTEM</span>
                        </div>
                        {/* Item 06 */}
                        <div className={styles.impactItem}>
                            <span>06 FLEXIBLE FOUNDATION FOR FUTURE GROWTH</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 14. Results Section */}
            <section className={styles.resultsSection}>
                <div className={styles.resultsInner}>
                    <span className={styles.resultsIndicator}>06 / RESULTS</span>
                    <h2 className={styles.resultsTitle}>
                        A STRONG FOUNDATION<br />FOR LONG-TERM GROWTH.
                    </h2>
                    <p className={styles.resultsDesc}>
                        A modern, internationally relevant identity with the structure to perform across stakeholders, channels and future phases.
                    </p>

                    <div className={styles.resultsGrid}>
                        {/* Item 01 */}
                        <div className={styles.resultsItem}>
                            <span>01 DISTINCTIVE, FUTURE-READY BRAND IDENTITY</span>
                        </div>
                        {/* Item 02 */}
                        <div className={styles.resultsItem}>
                            <span>02 COMPREHENSIVE GUIDELINES + GOVERNANCE</span>
                        </div>
                        {/* Item 03 */}
                        <div className={styles.resultsItem}>
                            <span>03 SCALABLE DIGITAL, PRINT + ENVIRONMENTAL SYSTEM</span>
                        </div>
                        {/* Item 04 */}
                        <div className={styles.resultsItem}>
                            <span>04 CONSISTENT FRAMEWORK FOR TEAMS + PARTNERS</span>
                        </div>
                        {/* Item 05 */}
                        <div className={styles.resultsItem}>
                            <span>05 INTERNATIONALLY RELEVANT VISUAL LANGUAGE</span>
                        </div>
                        {/* Item 06 */}
                        <div className={styles.resultsItem}>
                            <span>06 FLEXIBLE FOUNDATION FOR FUTURE EXPANSION</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 15. Next Project Section */}
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
                                src="/food-hub/cryo-banner.jpg"
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