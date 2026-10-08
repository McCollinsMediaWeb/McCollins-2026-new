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
    question: "How quickly can we launch a social media retainer?",
    answer:
      "Our onboarding sprint typically takes 10 to 14 business days. During this period, we conduct your competitor deep dive, map content pillars, establish tone of voice guides, and complete the initial month's filming and approvals.",
  },
  {
    question: "Do you produce bilingual content in both Arabic and English?",
    answer:
      "Yes. We possess an in-house bilingual editorial desk in Dubai Media City. Every script, on-screen text graphic, caption, and community response is written natively in Arabic (modern standard or Khaleeji nuance) and English simultaneously.",
  },
  {
    question: "Who handles video filming and Reels production in Dubai?",
    answer:
      "Our dedicated in-house production crew travels on-location across the UAE or hosts shoots in our studio. We manage camera operators, lighting, professional audio, mobile iPhone creators, and rapid short-form editing.",
  },
  {
    question: "Do you provide influencer marketing and creator management?",
    answer:
      "Absolutely. We curate, verify authentic audience ratios, negotiate contracts, handle product gifting logistics, and coordinate creative execution across micro and macro influencers in the UAE and KSA.",
  },
  {
    question: "How do you measure and report monthly social media ROI?",
    answer:
      "We move beyond vanity metrics. You receive a monthly interactive executive dashboard tracking engagement rates, save-ratios, follower acquisition quality, earned media value, and website traffic conversions mapped to your commercial goals.",
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
