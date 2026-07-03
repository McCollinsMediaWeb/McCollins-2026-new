"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function TwoColumnGallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    "/social-media-marketing/Picture → Social Media Marketing Showcase 8.png",
    "/social-media-marketing/Picture → Social Media Marketing Showcase 7.png",
    "/social-media-marketing/Picture → Social Media Marketing Showcase 6.png",
    "/social-media-marketing/Picture → Social Media Marketing Showcase 5.png",
    "/social-media-marketing/Picture → Social Media Marketing Showcase 4.png",
    "/social-media-marketing/Picture → Social Media Marketing Showcase 3.png",
    "/social-media-marketing/Link.png",
    "/social-media-marketing/Link(1).png",
  ];

  useGSAP(() => {
    gsap.from(".gallery-item-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.twoColGallery} ref={containerRef}>
      {images.map((src, idx) => (
        <div key={idx} className={`${styles.galleryItem} gallery-item-anim`}>
          <Image 
            src={src}
            alt={`Social Media Showcase ${idx + 1}`}
            fill
            className={styles.galleryImage}
          />
        </div>
      ))}
    </section>
  );
}
