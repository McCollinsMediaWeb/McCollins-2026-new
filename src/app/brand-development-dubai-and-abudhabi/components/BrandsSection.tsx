"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BRAND_ROW_1 = [
    { src: "/home-page-brands/Toshiba_logo 1.webp", alt: "Toshiba" },
    { src: "/home-page-brands/Pioneer_logo 1.webp", alt: "Pioneer" },
    { src: "/home-page-brands/costa-coffee-white.png.webp", alt: "Costa Coffee" },
    { src: "/home-page-brands/mmi-white.png.webp", alt: "MMI" },
    { src: "/home-page-brands/oak-berry-white.png.webp", alt: "Oak Berry" },
    { src: "/home-page-brands/dxb-white.png.webp", alt: "Dubai Airport Freezone" },
    { src: "/home-page-brands/fujifilm-white.png.webp", alt: "Fujifilm" },
];

const BRAND_ROW_2 = [
    { src: "/home-page-brands/trader-vics-white.png.webp", alt: "Trader Vic's" },
    { src: "/home-page-brands/wagamama-white.png.webp", alt: "Wagamama" },
    { src: "/home-page-brands/rta-white.png.webp", alt: "RTA" },
    { src: "/home-page-brands/energizer-white.png.webp", alt: "Energizer" },
    { src: "/home-page-brands/damac-white.png.webp", alt: "Damac" },
    { src: "/home-page-brands/trader-vics-white.png.webp", alt: "Trader Vic's" },
    { src: "/home-page-brands/wagamama-white.png.webp", alt: "Wagamama" },
];

export default function BrandsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // 1. Brands Horizontal Infinite Scroll
            gsap.to(".track-left", {
                xPercent: -50,
                ease: "none",
                duration: 35,
                repeat: -1,
            });

            gsap.fromTo(".track-right",
                { xPercent: -50 },
                {
                    xPercent: 0,
                    ease: "none",
                    duration: 35,
                    repeat: -1,
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <section className={`${styles.brandsSection} brands-section`} ref={containerRef}>
            <div className={styles.brandsRow}>
                <div className={`${styles.brandsTrack} track-left`}>
                    <div className={styles.brandsList}>
                        {BRAND_ROW_1.map((brand, i) => (
                            <div key={`brand-1-${i}`} className={styles.brandLogoWrapper}>
                                <Image src={brand.src} alt={brand.alt} fill className={styles.brandLogo} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.brandsList} aria-hidden="true">
                        {BRAND_ROW_1.map((brand, i) => (
                            <div key={`brand-1-dup-${i}`} className={styles.brandLogoWrapper}>
                                <Image src={brand.src} alt={brand.alt} fill className={styles.brandLogo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.brandsRow}>
                <div className={`${styles.brandsTrack} track-right`}>
                    <div className={styles.brandsList}>
                        {BRAND_ROW_2.map((brand, i) => (
                            <div key={`brand-2-${i}`} className={styles.brandLogoWrapper}>
                                <Image src={brand.src} alt={brand.alt} fill className={styles.brandLogo} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.brandsList} aria-hidden="true">
                        {BRAND_ROW_2.map((brand, i) => (
                            <div key={`brand-2-dup-${i}`} className={styles.brandLogoWrapper}>
                                <Image src={brand.src} alt={brand.alt} fill className={styles.brandLogo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
