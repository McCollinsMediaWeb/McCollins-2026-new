"use client";

import React, { useRef, useState } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    companywebsite: "",
    message: "",
    techStack: "Next.js & React Digital Flagship",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setFeedback({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          companyWebsite: formData.companywebsite,
          message: formData.message,
          services: formData.techStack,
          source: "Enterprise Web & App Engineering Landing Page",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Submission failed. Please try again.");
      }

      setFeedback({
        type: "success",
        message: "Brief Received. An Executive Technical Lead will reach out within 24h.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        companywebsite: "",
        message: "",
        techStack: "Next.js & React Digital Flagship",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setFeedback({ type: "error", message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-kicker", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
      })
        .from(
          ".hero-title-line",
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.5"
        )
        .from(
          ".hero-desc",
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".hero-trust-anchor",
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.5"
        )
        .from(
          ".hero-benchmark",
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".hero-form-card",
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        );
    },
    { scope: containerRef }
  );

  return (
    <section className={styles.heroSection} ref={containerRef}>
      {/* Subtle Ambient Glows */}
      <div className={styles.glowTopLeft} />
      <div className={styles.glowMiddleRight} />

      <div className={styles.heroContainer}>
        {/* Left Column: Value Proposition & Authority Metrics */}
        <div className={styles.heroLeft}>
          {/* <div className={`${styles.kickerPill} hero-kicker`}>
            <span className={styles.pulseDot} />
            <span className={styles.kickerText}>ENTERPRISE WEB &amp; APP DEVELOPMENT // GCC</span>
          </div> */}

          <h1 className={`${styles.heroTitle} hero-title`}>
            <span className={`${styles.heroTitleRow} hero-title-line`}>
              Build a social presence
            </span>
            <span className={`${styles.heroTitleRow} hero-title-line`}>
              <span className={styles.heroTitleItalic}>the gcc</span>
              <span>Actually Talks About.</span>
            </span>
          </h1>

          <p className={`${styles.heroDescription} hero-desc`}>
            Content systems, viral short-form reels, and performance ecosystems engineered with 15+ years of regional mastery. We help tier-one brands dominate feeds, foster rabid community loyalty, and command authority across Instagram, TikTok, LinkedIn, and Snapchat.
          </p>

          {/* Trust Anchors */}
          <div className={styles.trustAnchors}>
            <div className={`${styles.trustAnchorItem} hero-trust-anchor`}>
              <svg className={styles.trustIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>15+ Years Regional GCC Domain</span>
            </div>

            <div className={`${styles.trustAnchorItem} hero-trust-anchor`}>
              <svg className={styles.trustIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Native Bilingual Creative Studio</span>
            </div>

            <div className={`${styles.trustAnchorItem} hero-trust-anchor`}>
              <svg className={styles.trustIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>140M+ Organic Views Driven</span>
            </div>
          </div>

          {/* Short-Form Velocity Widget Card */}
          <div className={`${styles.benchmarkCard} hero-benchmark`}>
            <div className={styles.benchmarkLeft}>
              <div className={styles.velocityIconWrapper}>
                <svg className={styles.velocityPlayIcon} viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10,8.5 15.5,12 10,15.5" fill="#141414" />
                </svg>
              </div>
              <div>
                <div className={styles.velocityLabel}>
                  SHORT-FORM VELOCITY
                </div>
                <div className={styles.velocityValue}>
                  3.4× Average Reach Multiplier
                </div>
              </div>
            </div>

            {/* Audio Waveform Equalizer Bars */}
            <div className={styles.audioWaveContainer}>
              <span className={`${styles.audioBar} ${styles.audioBar1}`} />
              <span className={`${styles.audioBar} ${styles.audioBar2}`} />
              <span className={`${styles.audioBar} ${styles.audioBar3}`} />
              <span className={`${styles.audioBar} ${styles.audioBar4}`} />
            </div>
          </div>
        </div>

        {/* Right Column: Direct Briefing Form Monolith */}
        <div className={styles.heroRight}>
          <div className={`${styles.formCard} hero-form-card`} id="strategy-form">
            <div className={styles.formGlow} />

            <div className={styles.formHeader}>
              <div className={styles.formHeaderTop}>
                <span className={styles.formKicker}>DIRECT BRIEFING</span>
                <span className={styles.formLiveDot} />
              </div>
              <h2 className={styles.formTitle}>Start your social growth project</h2>
              <p className={styles.formSubtitle}>
                Tell us about your brand. Our senior Dubai strategists will deliver a bespoke platform roadmap within 24 hours.
              </p>
            </div>

            <form className={styles.formBody} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Tariq Al-Mansoor"
                  className={styles.inputField}
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputRowTwo}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tariq@enterprise.ae"
                    className={styles.inputField}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+971 50 000 0000"
                    className={styles.inputField}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Brand / Company Name *</label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="e.g. Al Futtaim Group or luxury startup"
                  className={styles.inputField}
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Company Website (optional)</label>
                <input
                  type="text"
                  name="companywebsite"
                  placeholder="https://www.enterprise.ae"
                  className={styles.inputField}
                  value={formData.companywebsite}
                  onChange={handleChange}
                />
              </div>



              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Primary Growth Focus</label>
                <div className={styles.selectWrapper}>
                  <select
                    name="techStack"
                    className={styles.selectField}
                    value={formData.techStack}
                    onChange={handleChange}
                  >
                    <option value="Viral Reels & Short-Form Content">Viral Reels & Short-Form Content</option>
                    <option value="Full-Funnel Social Retainer (Multi-platform)">Full-Funnel Social Retainer (Multi-platform)</option>
                    <option value="Community Management & Engagement">Community Management &amp; Engagement</option>
                    <option value="Influencer Outreach & Creator Network">Influencer Outreach &amp; Creator Network</option>
                    <option value="Performance Social & Paid Amplification">Performance Social &amp; Paid Amplification</option>
                  </select>
                  <svg className={styles.selectChevron} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Message / Project Brief *</label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Tell us about your project..."
                  className={styles.inputField}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitBtn}
              >
                <span>{isSubmitting ? "TRANSMITTING BRIEF..." : "REQUEST MY STRATEGY CALL"}</span>
                <svg className={styles.submitBtnSvg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {feedback && (
                <div
                  className={`${styles.formFeedback} ${feedback.type === "error" ? styles.formFeedbackError : ""
                    }`}
                >
                  {feedback.message}
                </div>
              )}

              <p className={styles.formDisclaimer}>
                Zero spam. Guaranteed NDA protection for enterprise inquiries.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
