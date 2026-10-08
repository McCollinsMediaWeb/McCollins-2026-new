"use client";

import React, { useState, useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FAQ_ITEMS = [
  {
    question: "HOW LONG DOES A BESPOKE WEBSITE DEVELOPMENT PROJECT TAKE?",
    answer:
      "Typical enterprise builds range between 6 to 14 weeks depending on architectural complexity, ERP integrations, and custom headless workflows. Every project follows our structured five-phase pipeline: Architecture & Wireframing, High-Fidelity UI/UX Design, Modern Frontend & Backend Engineering, Quality Assurance & Penetration Testing, followed by DNS & Cloud Deployment.",
  },
  {
    question: "DO YOU DEVELOP NATIVE BILINGUAL SITES IN BOTH ENGLISH & ARABIC?",
    answer:
      "Yes. Native English and Arabic (RTL) duality is engineered into our design tokens and code architecture from day one. We never rely on machine widgets that scramble layout grids. Every Arabic view is custom-typeset with calibrated Arabic typefaces, mirroring margins, and dedicated RTL stylesheet modules to ensure absolute brand prestige in the GCC.",
  },
  {
    question: "WHICH CMS OR TECH STACK DO YOU RECOMMEND FOR OUR ENTERPRISE?",
    answer:
      "We select the stack to fit your exact operational reality. For high-volume transactional e-commerce, we recommend Shopify Plus or headless Shopify with Next.js. For corporate conglomerates requiring extensive multi-region content governance, we deploy Sitecore, Sitefinity, or headless WordPress VIP. For custom SaaS portals and web apps, we build purely in Next.js, React, Node, and AWS serverless infrastructures.",
  },
  {
    question: "DO YOU PROVIDE POST-LAUNCH MAINTENANCE AND HOSTING SLA IN DUBAI?",
    answer:
      "Yes, our Dubai Media City headquarters operates dedicated annual SLA maintenance retainers. This includes 24/7 uptime monitoring, weekly core updates, automated disaster recovery backups, quarterly security audits, and dedicated monthly development sprint hours for continuous CRO and marketing landing pages.",
  },
  {
    question: "HOW DO YOU ENSURE SUB-SECOND LOAD TIMES AND CORE WEB VITALS COMPLIANCE?",
    answer:
      "We engineer zero-bloat frontends using modern code-splitting, AVIF/WebP next-gen image pipelines, server-side caching on regional UAE edge nodes, and critical CSS extraction. We contractually benchmark every deliverable against Google Core Web Vitals to guarantee green score excellence across mobile and desktop.",
  },
];

export default function FaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".faq-header-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }).from(
        ".faq-item-anim",
        {
          y: 25,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.faqSection} ref={sectionRef}>
      <div className={styles.faqContainer}>
        {/* FAQ Header */}
        <div className={styles.faqHeader}>
          <span className={`${styles.sectionKicker} faq-header-anim`}>CLEAR ANSWERS</span>
          <h2 className={`${styles.sectionTitle} faq-header-anim`}>COMMON QUESTIONS.</h2>
        </div>

        {/* Hairline Minimal Accordion List */}
        <div className={styles.faqList}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={item.question}
                className={`${styles.faqItem} faq-item-anim`}
                onClick={() => toggleFaq(idx)}
              >
                <div className={styles.faqQuestionRow}>
                  <h3 className={styles.faqQuestionTitle}>{item.question}</h3>
                  <svg
                    className={`${styles.faqIcon} ${isOpen ? styles.faqIconRotated : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {isOpen && <div className={styles.faqAnswer}>{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
