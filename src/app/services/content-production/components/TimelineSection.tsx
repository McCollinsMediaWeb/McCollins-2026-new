"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title reveal
    gsap.from(".timeline-title-anim", {
      scrollTrigger: {
        trigger: ".timeline-title-anim",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Timeline container reveal
    gsap.from(".timeline-container-anim", {
      scrollTrigger: {
        trigger: ".timeline-container-anim",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  const steps = [
    {
      num: "1.START",
      phase: "Pre Production",
      text: "Once you submit the brief and confirm the project with us, our team of account directors will do the rest. Plan, strategize, set deadlines, and moderate every task from script to finish."
    },
    {
      num: "2.COLLAB",
      phase: "Production",
      text: "Once we finish the pre-production stage according to the approved plan, we proceed to shoot. Our crew will make sure that we have a seamless journey throughout out the shoot days."
    },
    {
      num: "3.APPROVE",
      phase: "Post Production",
      text: "Share your feedback using our technology, which allows you to add comments directly on the video with real-time playback along with your colleagues anywhere in the world, creating faster approvals."
    }
  ];

  return (
    <section className={styles.timelineSection} ref={containerRef}>
      <h2 className={`${styles.timelineTitle} timeline-title-anim`}>
        <span className={styles.timelineTitleItalic}>OUR</span> TIMELINE
      </h2>

      <div className={`${styles.timelineContainer} timeline-container-anim`}>
        {steps.map((step, idx) => (
          <div key={idx} className={styles.timelineCol}>
            <h3 className={styles.stepHeader}>{step.num}</h3>
            <span className={styles.stepPhase}>{step.phase}</span>
            <p className={styles.stepText}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
