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
