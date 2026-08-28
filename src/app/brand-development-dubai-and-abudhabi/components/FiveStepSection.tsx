"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FiveStepSection() {
    const containerRef = useRef<HTMLDivElement>(null);


    useGSAP(() => {

    }, { scope: containerRef });


    return (
        <section className={styles.ascensionSection}>
            <h2 className={styles.ascensionHeader}>A five-step path from insight to <span className={styles.ascensionHeaderItalic}>Identity.</span></h2>

            <div className={styles.ascensionSubHeader}>
            </div>

            <div className={styles.ascensionGrid}>

                <div className={`${styles.ascensionCard} ${styles.cardBlack} ${styles.cardShort} ${styles.cardNarrow}`}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Brand<br />Discovery</h3>
                        <p className={styles.cardDesc}>We dive into your brand, audience and market to surface the insights that matter.</p>
                    </div>
                </div>

                <div className={`${styles.ascensionCard} ${styles.cardTall} ${styles.cardWide}`}>
                    <div className={styles.cardImageWrapper}>
                        <Image src="/brand-development-dubai-and-abudhabi/positioning-bg.png" alt="Design" fill className={styles.cardImage} />
                    </div>
                    <div className={`${styles.cardContent} ${styles.cardContentBottom}`}>
                        <div>
                            <h3 className={styles.cardTitle}>Positioning &amp; Strategy</h3>
                            <p className={styles.cardDesc}>We define what your brand stands for and the message that resonates.</p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.ascensionCard} ${styles.cardGray} ${styles.cardShort} ${styles.cardNarrow}`}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Visual Identity</h3>
                        <p className={styles.cardDesc}>Logo, colors, typography and imagery come together into a recognizable look.</p>
                    </div>
                </div>

                <div className={`${styles.ascensionCard} ${styles.cardTall} ${styles.cardWide}`}>
                    <div className={styles.cardImageWrapper}>
                        <Image src="/brand-development-dubai-and-abudhabi/brand-collateral-bg.png" alt="Brand Collateral Background" fill className={styles.cardImage} />
                    </div>
                    <div className={styles.cardOverlayImageWrapper}>
                        <Image src="/brand-development-dubai-and-abudhabi/brand-collateral-image.png" alt="Brand Collateral Overlay" fill className={styles.cardOverlayImage} />
                    </div>
                    <div className={`${styles.cardContent} ${styles.cardContentBottom}`}>
                        <div>
                            <h3 className={styles.cardTitle} style={{ color: '#000' }}>Brand Collateral</h3>
                            <p className={styles.cardDesc} style={{ color: '#000' }}>Your visual DNA translated into a cohesive ecosystem of applications.</p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.ascensionCard} ${styles.cardBlack} ${styles.cardShort} ${styles.cardNarrow}`}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Guidelines Implementation</h3>
                        <p className={styles.cardDesc}>A complete playbook, tools and templates to roll the brand out yourself.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
