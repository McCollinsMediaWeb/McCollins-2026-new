"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const PROJECTS = [
  // {
  //   image: "/works-page/d3fc37894018a631c1400f7ae570d140d0ec2f5e.webp",
  //   title: "MERCEDES BENZ",
  //   overlayClass: styles.overlayMercedes,
  //   url: "/case-study/mercedes-benz"
  // },
  {
    image: "/cryo/e10ae3452971f405189d915fb9572403e5e692cf.webp",
    // title: "CRYO",
    overlayClass: styles.overlayOakberry,
    url: "/case-study/cryo"
  },
  {
    image: "/food-hub/d6a7b1f5da76949cd949f6db947a05b5de7ec513.jpg",
    // title: "ABUDHABI FOOD HUB",
    overlayClass: styles.overlayFoodhub,
    url: "/case-study/abudhabi-food-hub"
  },
  {
    image: "/dxb/144c3fd5e33f3f0eebecf10c48732aa24231bead.webp",
    // title: "Dubai International Hotel",
    overlayClass: styles.overlayDxb,
    url: "/case-study/dxb-hotel"
  },
  {
    image: "/better-life/a319f6d7a7333d6a314c89c134e6b0ac3ed2bf75.jpg",
    // title: "BETTER LIFE",
    overlayClass: styles.overlayBetterlife,
    url: "/case-study/better-life"
  },
  {
    image: "/works-page/2b7b62e7ba2fa1d213989801b618488ab2b95642.webp",
    title: "PIONEER",
    overlayClass: styles.overlayPioneer,
    url: "/case-study/pioneer"
  },
  {
    image: "/works-page/53e7fd625b0b794ee51a59918952d03afce9746d (1).jpg",
    title: "VOSS",
    overlayClass: styles.overlayVoss,
    url: "/case-study/voss"
  },
  {
    image: "/works-page/de029bcf0b4f13aabbc47e1305b70c7793a2d545 (1).webp",
    title: "MAPEI",
    overlayClass: styles.overlayMapei,
    url: "/case-study/mapei"
  },

  // {
  //   image: "/works-page/2cf8dfd3ab0890e5a30b9eeb6c2730d1d3edb2f5.webp",
  //   title: "CLEANING SUPERSTORE",
  //   overlayClass: styles.overlayCleaning,
  //   url: "/case-study/cleaning-superstore"
  // },
  // {
  //   image: "/works-page/3331c29f24403f6859d094be0242dd357d818563.webp",
  //   title: "FUJIFILM",
  //   overlayClass: styles.overlayFujifilm,
  //   textClass: styles.textBlack,
  //   url: "/case-study/fujifilm"
  // },
];

export default function WorksPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    // Intro text animation
    const words = containerRef.current.querySelectorAll("." + styles.wordInner);
    if (words.length > 0) {
      gsap.to(words, {
        y: 0,
        duration: 1.2,
        stagger: 0.02,
        ease: "power3.out",
        delay: 0.2,
      });
    }

    // Project Blocks Animation
    const projectBlocks = containerRef.current.querySelectorAll("." + styles.projectBlock);

    projectBlocks.forEach((block) => {
      const image = block.querySelector("." + styles.projectImage);
      const overlayText = block.querySelector("." + styles.projectOverlayText);

      if (image) {
        gsap.fromTo(image,
          { opacity: 0.85, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (overlayText) {
        gsap.to(overlayText, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    });

  }, { scope: containerRef, dependencies: [mounted] });

  if (!mounted) return null;

  const introText = "We help ambitious brands build sharper identities, stronger digital experiences, and growth-focused campaigns through strategy, design, content, and execution.";

  return (
    <div className={styles.worksContainer} ref={containerRef}>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <h1 className={styles.introText}>
          {introText.split(" ").map((word, i) => (
            <span key={i} className={styles.wordWrapper}>
              <span className={styles.wordInner}>{word}</span>
            </span>
          ))}
        </h1>
      </section>

      {/* Full-Bleed Gallery */}
      <section className={styles.gallerySection}>

        {PROJECTS.map((project, idx) => (
          <div key={idx} className={styles.projectBlock} onClick={() => router.push(project.url)}>
            {project.title && (
              <div className={styles.projectBackgroundText}>
                {project.title}
              </div>
            )}

            <div className={styles.projectImageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>

            <div className={styles.projectCounter}>
              {(idx + 1).toString().padStart(2, "0")}
            </div>

            {project.title && (
              // <div className={`${styles.projectOverlayText} ${project.overlayClass} ${project.textClass ?? ''}`}>
              //   {project.title}
              // </div>

              <div className={`${styles.projectOverlayText} ${project.overlayClass}`}>
                {project.title}
              </div>
            )}
          </div>
        ))}

        {/* Strategy Divider */}
        {/* <div className={styles.strategyBanner}>
          <h2 className={styles.strategyText}>STRATEGY / PERFORMANCE / DESIGN</h2>
        </div> */}

        {/* Voss Image */}
        {/* <div className={styles.projectBlock}>
          <div className={styles.projectImageWrapper}>
            <Image
              src="/works-page/85a85960b1e60e62ddbcf62cbaad7e0eefbe6955.webp"
              alt="VOSS"
              fill
              className={styles.projectImage}
            />
          </div>
        </div> */}

        {/* Worker Image */}
        {/* <div className={styles.projectBlock}>
          <div className={styles.projectImageWrapper}>
            <Image
              src="/works-page/de029bcf0b4f13aabbc47e1305b70c7793a2d545.webp"
              alt="Worker Banner"
              fill
              className={styles.projectImage}
            />
          </div>
        </div> */}

        {/* LG Section */}
        {/* <div className={styles.projectBlock}>
          <div className={styles.projectImageWrapper}>
            <Image
              src="/works-page/c4fc1a26bafd80625cdba46d24a0836d8b7e6c98.webp"
              alt="LG"
              fill
              className={styles.projectImage}
            />
          </div>
          <div className={`${styles.projectOverlayText} ${styles.overlayLG} ${styles.textBlack}`}>
            ELEVATING THE<br />LG UAE Experience
          </div>
        </div> */}

      </section>

    </div>
  );
}
