"use client";

import React, { useRef } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SocialMediaRouteSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Left title animation
    gsap.from("." + styles.routeTitle, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Arrow animation
    gsap.from("." + styles.routeArrow, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      scaleX: 0,
      transformOrigin: "left center",
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out"
    });

    // List items stagger
    gsap.from("." + styles.routeListItem, {
      scrollTrigger: {
        trigger: "." + styles.routeList,
        start: "top 80%",
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    // Scroll pin animation on desktop viewports
    if (window.innerWidth > 991) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 120px",
        end: "bottom 320px",
        pin: containerRef.current?.querySelector("." + styles.routeLeft),
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    }
  }, { scope: containerRef });

  return (
    <section className={styles.routeSection} ref={containerRef}>
      <div className={styles.routeLeft}>
        <h2 className={styles.routeTitle} style={{ marginBottom: '20px' }}>
          <span className={styles.routeTitleStrong}>SOCIAL MEDIA</span>
          <div className={styles.routeTitleRow}>
            <span className={styles.routeTitleItalic}>Route</span>
            <div className={styles.routeArrow}>
              <div className={styles.arrowLine}></div>
              <div className={styles.arrowHead}></div>
            </div>
          </div>
        </h2>
      </div>

      <div className={styles.routeRight}>
        <ul className={styles.routeList}>
          {/* Item 1 */}
          <li className={styles.routeListItem}>
            <h3 className={styles.itemTitle}>
              <span className={styles.bullet}>•</span>{" "}
              <span className={styles.titleStrong}>CONTENT STRATEGY &  <span className={styles.titleItalic}>Calendar Planning</span></span>
            </h3>
            <p className={styles.itemDesc}>
              Developing monthly content calendars built around brand goals, audience interests, seasonal moments, campaign priorities and platform trends.
            </p>
          </li>

          {/* Item 2 */}
          <li className={styles.routeListItem}>
            <h3 className={styles.itemTitle}>
              <span className={styles.bullet}>•</span>{" "}
              <span className={styles.titleStrong}>INSTAGRAM, TIKTOK, FACEBOOK, LINKEDIN & <span className={styles.titleItalic}>Snapchat Management</span></span>

            </h3>
            <p className={styles.itemDesc}>
              Managing content, publishing and platform presence across key social channels based on where your audience is most active.
            </p>
          </li>

          {/* Item 3 */}
          <li className={styles.routeListItem}>
            <h3 className={styles.itemTitle}>
              <span className={styles.bullet}>•</span>{" "}
              <span className={styles.titleStrong}>VIRAL REELS & SHORT-FORM  <span className={styles.titleItalic}>Video</span></span>

            </h3>
            <p className={styles.itemDesc}>
              Creating reels, TikToks and snackable video content using strong hooks, trending formats, storytelling and social-first editing styles.
            </p>
          </li>

          {/* Item 4 */}
          <li className={styles.routeListItem}>
            <h3 className={styles.itemTitle}>
              <span className={styles.bullet}>•</span>{" "}
              <span className={styles.titleStrong}>COMMUNITY <span className={styles.titleItalic}>Management</span></span>

            </h3>
            <p className={styles.itemDesc}>
              Responding to comments and messages, encouraging conversations, managing audience interactions and building stronger brand relationships online.
            </p>
          </li>

          {/* Item 5 */}
          <li className={styles.routeListItem}>
            <h3 className={styles.itemTitle}>
              <span className={styles.bullet}>•</span>{" "}
              <span className={styles.titleStrong}>CONTENT CREATION IN ENGLISH & <span className={styles.titleItalic}>Arabic</span></span>

            </h3>
            <p className={styles.itemDesc}>
              Writing captions, content directions, post copy and social media messaging in English and Arabic for brands targeting diverse UAE and regional audiences.
            </p>
          </li>

          {/* Item 6 */}
          <li className={styles.routeListItem}>
            <h3 className={styles.itemTitle}>
              <span className={styles.bullet}>•</span>{" "}
              <span className={styles.titleStrong}>CAMPAIGNS, COMPETITIONS & BUZZ <span className={styles.titleItalic}>Generation</span></span>
            </h3>
            <p className={styles.itemDesc}>
              Building social media campaigns around launches, offers, activations, events, seasonal moments and user-generated content opportunities.
            </p>
          </li>

          {/* Item 7 */}
          <li className={styles.routeListItem}>
            <h3 className={styles.itemTitle}>
              <span className={styles.bullet}>•</span>{" "}
              <span className={styles.titleStrong}>INFLUENCER & BLOGGER <span className={styles.titleItalic}>Outreach</span></span>
            </h3>
            <p className={styles.itemDesc}>
              Shortlisting, coordinating and managing influencer collaborations to support awareness, credibility, content creation and campaign amplification.
            </p>
          </li>

          {/* Item 8 */}
          <li className={styles.routeListItem}>
            <h3 className={styles.itemTitle}>
              <span className={styles.bullet}>•</span>{" "}
              <span className={styles.titleStrong}>MONITORING, REPORTING & <span className={styles.titleItalic}>Analysis</span></span>

            </h3>
            <p className={styles.itemDesc}>
              Tracking social media performance, identifying best-performing content, reviewing engagement patterns and recommending next steps for growth.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
