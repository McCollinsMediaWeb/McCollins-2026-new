"use client";

import React, { useRef, useState } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FAQS = [
  {
    question: "Can you support a Dubai and Abu Dhabi brand in English and Arabic?",
    answer: "Yes. We create bilingual brand systems for Dubai and Abu Dhabi audiences from the outset, including English and Arabic typography, messaging, and rollout guidance.",
  },
  {
    question: "How long does a branding project take?",
    answer: "Most full-cycle brand identity projects in Dubai and Abu Dhabi take 4–8 weeks, depending on business complexity and your review speed. We deliver a complete brand package including a logo suite, visual identity, brand guidelines, and templates.",
  },
  {
    question: "What do we actually receive at the end?",
    answer: "You receive a comprehensive brand package including your primary and secondary logo marks, color palette, typography hierarchy, imagery guidelines, brand story & positioning playbook, collateral templates, and complete digital & print brand guidelines.",
  },
  {
    question: "Can you work with an existing brand that needs a refresh?",
    answer: "Absolutely. We frequently work with established regional enterprises to refresh, modernize, and strategically reposition their existing visual identity while respecting brand equity.",
  },
  {
    question: "What's the investment for a brand development project?",
    answer: "Investment levels depend on your organization's size, scope, and specific brand architecture requirements. Contact our strategy team to discuss your goals and receive a tailored proposal within 24 hours.",
  },
];

export default function FaqSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useGSAP(() => {
    gsap.from(".faq-item-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section className={styles.faqSection} ref={containerRef}>
      <div className={styles.faqContainer}>
        {/* Header */}
        <div className={styles.faqHeader}>
          <span className={styles.faqKicker}>FAQ</span>
          <h2 className={styles.faqTitle}>COMMON QUESTIONS.</h2>
        </div>

        {/* Accordion List */}
        <div className={styles.faqList}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem} faq-item-anim ${isOpen ? styles.faqItemOpen : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqQuestionRow}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`}>
                    +
                  </span>
                </div>
                {isOpen && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
