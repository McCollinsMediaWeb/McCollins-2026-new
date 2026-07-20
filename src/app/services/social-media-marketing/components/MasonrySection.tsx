"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MasonrySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.utils.toArray(".masonry-reveal").forEach((img: any) => {
            gsap.from(img, {
                scrollTrigger: {
                    trigger: img,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        });
    }, { scope: containerRef });

    return (
        <section className={styles.masonrySection} ref={containerRef}>


            <div className={styles.masonryGrid}>
                <div className="masonry-reveal">
                    <Image
                        src="/social-media-marketing/f36c9ff73073bcebc911c9899b6a7a2c584e5bc1.webp"
                        alt="Woman at table"
                        width={960}
                        height={960}
                        style={{ backgroundColor: '#E7F1F0' }}
                    />
                </div>
                <div className="masonry-reveal">
                    <Image
                        src="/social-media-marketing/doors-dubai.png"
                        alt="Abstract Gold Pattern"
                        width={960}
                        height={960}
                        style={{ backgroundColor: '#000' }}
                    />
                </div>

                <div className="masonry-reveal">
                    <Image
                        src="/social-media-marketing/e76bb2305a399d8c829216c0abe1ec9c8843bb66.webp"
                        alt="Woman at table"
                        width={960}
                        height={960}
                        style={{ backgroundColor: '#E7F1F0' }}
                    />
                </div>
                <div className="masonry-reveal">
                    <Image
                        src="/social-media-marketing/152c777e549dbefd19223af66a73222cc3f00a99.webp"
                        alt="Abstract Gold Pattern"
                        width={960}
                        height={960}
                        style={{ backgroundColor: '#000' }}
                    />
                </div>
            </div>

            <div className={`${styles.logoEvolution} masonry-reveal`}>
                <Image
                    src="/social-media-marketing/fbdf29d87ccc0f5540bf50fe5279b8821b249496.webp"
                    alt="Logo Evolution"
                    width={1920}
                    height={600}
                />
            </div>

            <div className={styles.masonryGrid}>
                <div className="masonry-reveal">
                    <Image
                        src="/social-media-marketing/e76bb2305a399d8c829216c0abe1ec9c8843bb66.webp"
                        alt="Woman at table"
                        width={960}
                        height={960}
                    />
                </div>
                <div className="masonry-reveal">
                    <Image
                        src="/social-media-marketing/19c20eb02deadf06fe9e61a1cb42c9eaa4762a50.webp"
                        alt="Abstract Gold Pattern"
                        width={960}
                        height={960}
                        style={{ backgroundColor: '#E7F1F0' }}
                    />
                </div>
            </div>
        </section>
    );
}
