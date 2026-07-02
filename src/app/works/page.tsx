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

const PROJECTS = [
  {
    image: "/works-page/d3fc37894018a631c1400f7ae570d140d0ec2f5e.jpg",
    title: "MERCEDES BENZ",
    overlayClass: styles.overlayMercedes,
  },
  {
    image: "/works-page/cb931c85f24c34cc3def0c3fa02a900ea0ecb736.jpg",
    title: "PIONEER",
    overlayClass: styles.overlayPioneer,
  },
  {
    image: "/works-page/bd87becf55144a3bce6a18b824230d7343b57bdc.jpg",
    title: "OAKBERRY",
    overlayClass: styles.overlayOakberry,
  },
  {
    image: "/works-page/2cf8dfd3ab0890e5a30b9eeb6c2730d1d3edb2f5.jpg",
    title: "CLEANING SUPERSTORE",
    overlayClass: styles.overlayCleaning,
  },
  {
    image: "/works-page/3331c29f24403f6859d094be0242dd357d818563.jpg",
    title: "FUJIFILM",
    overlayClass: styles.overlayFujifilm,
    textClass: styles.textBlack,
  },
];

export default function WorksPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      if (image) {
        tl.to(image, {
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        });
      }

      if (overlayText) {
        tl.to(
          overlayText,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=1.0"
        );
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
          <div key={idx} className={styles.projectBlock}>
            <div className={styles.projectImageWrapper}>
              {/* Using a standard img tag with width 100% since we want natural height 
                  based on the full viewport width */}
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>
            {project.title && (
              <div className={`${styles.projectOverlayText} ${project.overlayClass} ${project.textClass || ''}`}>
                {project.title}
              </div>
            )}
          </div>
        ))}

        {/* Strategy Divider */}
        <div className={styles.strategyBanner}>
          <h2 className={styles.strategyText}>STRATEGY / PERFORMANCE / DESIGN</h2>
        </div>

        {/* Voss Image */}
        <div className={styles.projectBlock}>
          <div className={styles.projectImageWrapper}>
            <img
              src="/works-page/85a85960b1e60e62ddbcf62cbaad7e0eefbe6955.jpg"
              alt="VOSS"
              className={styles.projectImage}
            />
          </div>
        </div>

        {/* Worker Image */}
        <div className={styles.projectBlock}>
          <div className={styles.projectImageWrapper}>
            <img
              src="/works-page/de029bcf0b4f13aabbc47e1305b70c7793a2d545.jpg"
              alt="Worker Banner"
              className={styles.projectImage}
            />
          </div>
        </div>

        {/* LG Section */}
        <div className={styles.projectBlock}>
          <div className={styles.projectImageWrapper}>
            <img
              src="/works-page/c4fc1a26bafd80625cdba46d24a0836d8b7e6c98.jpg"
              alt="LG"
              className={styles.projectImage}
            />
          </div>
          <div className={`${styles.projectOverlayText} ${styles.overlayLG} ${styles.textBlack}`}>
            ELEVATING THE<br/>LG UAE Experience
          </div>
        </div>

      </section>

    </div>
  );
}
