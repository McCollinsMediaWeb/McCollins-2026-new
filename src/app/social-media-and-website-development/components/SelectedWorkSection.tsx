"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CASE_STUDIES = [
  {
    title: "PIONEER GULF",
    subtitle: "2024 Launch",
    tag: "E-COMMERCE • HEADLESS",
    desc: "Regional flagship electronics ecosystem with multi-region checkout & live showroom inventory sync.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCD9yg-T2uZ-mBS9EUqFTBBJvX1yTxfCE8TUZfRGyZi85Gl3uIYrHJd4bfpvAmtBCk7AAZG5x6y1ng72JRvANkxPFiRwPGoIZfRtdLbJN5FvpR8s9Y4EIEGCts5Ch9ket-wbui3HvA8GADAGVKpuNtadYeAxFOcTXzB34h9TLTBgGsQfMliZhV_UrzRCke8h9jypfc33LL1TCvpsX5P5zaSLLPt0Qojbk0mFw2mVo34UVVsC3fs6dzo",
    link: "/case-study/pioneer",
  },
  {
    title: "VOSS WATER",
    subtitle: "MENA Experience",
    tag: "LUXURY DIGITAL EXPERIENCE",
    desc: "Immersive storytelling and B2B hospitality procurement portal engineered with fluid WebGL animations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnHZ6G_59mu7BNVPnhI9EtgYJ2BK6pZGAvmU0M-n67Cpi2LrHOPXw7TdfeD3fr9HjVsZxoS0IgwVKm5XkhDbKGgWXcOHsCTWdIsCMf8urwRF7ndBOOAmW7VHPiAy3B4d4xUNZbqPbkA1xGcW3s16OfVczPbQAzLoj-kpZwdbvDwSTm_Ya15XWTs8Pk74EgG6DVxvr-LHQnpio-1DRcENpQ0N8HMA29AywhjlKttb-xub7P8BQB-rmn",
    link: "/case-study/voss",
  },
  {
    title: "MAPEI GCC",
    subtitle: "Specification Engine",
    tag: "ENTERPRISE BIM PORTAL",
    desc: "Industrial specification and BIM catalog portal connecting structural engineers directly with local inventory.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqtOUQP8GoKiNqctoMvYZms4mB_BGBflHbjqI0UX6lCsha2QDFH4Poyh-nqZNns4FoT2kmy7yUDF3SRdcdBqa-0GLKPyepmEUV7p-We_x9RW6TXZoF3cqyE6kyR3gHyCIGnVTL6G4Yqc_OhQ47zBp8gS9UMsbaDouC9-bW_6g8QuZCCffswOqxBKntyuYm1wEorJj_z0LaLILaJ06QV_HCs-u-AI-OUtKQu1L-zeute3Ir1-nDoQkN",
    link: "/case-study/mapei",
  },
];

export default function SelectedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".work-header-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }).from(
        ".work-card-anim",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.workSection} ref={sectionRef}>
      <div className={styles.workContainer}>
        {/* Showcase Header */}
        <div className={styles.workHeaderBand}>
          <div>
            <span className={`${styles.workKicker} work-header-anim`}>SELECTED WORK</span>
            <h2 className={`${styles.workTitle} work-header-anim`}>
              BRANDS WE HAVE{" "}
              <span className={styles.workTitleItalic}>
                engineered &amp; launched.
              </span>
            </h2>
          </div>

          <Link href="/works" className={`${styles.seeAllWorkLink} work-header-anim`}>
            <span>See All Work</span>
            <svg className={styles.seeAllWorkSvg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* 3-Column Visual Case Studies */}
        <div className={styles.workGrid}>
          {CASE_STUDIES.map((cs) => (
            <Link key={cs.title} href={cs.link} className={`${styles.workCard} work-card-anim`} style={{ textDecoration: "none" }}>
              <div className={styles.workImageWrapper}>
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.workImage}
                  unoptimized
                />
                <div className={styles.workOverlay} />
                <div className={styles.workTagBadge}>{cs.tag}</div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div className={styles.workMetaRow}>
                  <h3 className={styles.workClientName}>{cs.title}</h3>
                  <span className={styles.workYearTag}>{cs.subtitle}</span>
                </div>
                <p className={styles.workDescription}>{cs.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
