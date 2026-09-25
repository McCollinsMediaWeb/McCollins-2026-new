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
    techStack: "Next.js & React Digital Flagship",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          <div className={`${styles.kickerPill} hero-kicker`}>
            <span className={styles.pulseDot} />
            <span className={styles.kickerText}>ENTERPRISE WEB &amp; APP DEVELOPMENT // GCC</span>
          </div>

          <h1 className={`${styles.heroTitle} hero-title`}>
            <span className={`${styles.heroTitleRow} hero-title-line`}>
              ENGINEER A DIGITAL FLAGSHIP
            </span>
            <span className={`${styles.heroTitleRow} hero-title-line`}>
              <span className={styles.heroTitleItalic}>the gcc</span>
              <span>ACTUALLY TRUSTS.</span>
            </span>
          </h1>

          <p className={`${styles.heroDescription} hero-desc`}>
            McCollins Media designs and develops high-performance digital platforms, enterprise web apps, headless e-commerce, and bespoke digital experiences that load in milliseconds, convert high-value regional prospects, and establish undeniable market authority.
          </p>

          {/* Trust Anchors */}
          <div className={styles.trustAnchors}>
            <div className={`${styles.trustAnchorItem} hero-trust-anchor`}>
              <svg className={styles.trustIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>15+ YEARS GCC EXPERIENCE</span>
            </div>

            <div className={`${styles.trustAnchorItem} hero-trust-anchor`}>
              <svg className={styles.trustIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>FULL-STACK JAMSTACK &amp; NEXT.JS</span>
            </div>

            <div className={`${styles.trustAnchorItem} hero-trust-anchor`}>
              <svg className={styles.trustIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>99.9% UPTIME GUARANTEE</span>
            </div>
          </div>

          {/* Core Web Vitals Widget Card */}
          <div className={`${styles.benchmarkCard} hero-benchmark`}>
            <div className={styles.benchmarkLeft}>
              <div className={styles.benchmarkBadge}>98</div>
              <div>
                <div className={styles.benchmarkLabel}>
                  <span>PAGESPEED BENCHMARK</span>
                  <span className={styles.benchmarkDivider}>//</span>
                  <span style={{ color: "#ffffff" }}>CORE WEB VITALS</span>
                </div>
                <div className={styles.benchmarkMetrics}>
                  LCP &lt; 0.8s • CLS 0.00 • FID &lt; 12ms
                </div>
              </div>
            </div>

            {/* Sparkline Wave SVG */}
            <svg className={styles.sparklineSvg} fill="none" viewBox="0 0 120 40">
              <path d="M0 32L15 28L30 31L48 18L65 24L85 10L100 14L120 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              <path d="M0 32L15 28L30 31L48 18L65 24L85 10L100 14L120 4V40H0Z" fill="currentColor" fillOpacity="0.15" />
            </svg>
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
              <h2 className={styles.formTitle}>START YOUR WEB PROJECT</h2>
              <p className={styles.formSubtitle}>
                Tell us about your brand. Our senior Dubai architects will deliver a bespoke specification and tech roadmap within 24 hours.
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
                <label className={styles.inputLabel}>Brand / Enterprise Name *</label>
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
                <label className={styles.inputLabel}>Primary Tech Stack</label>
                <div className={styles.selectWrapper}>
                  <select
                    name="techStack"
                    className={styles.selectField}
                    value={formData.techStack}
                    onChange={handleChange}
                  >
                    <option value="Next.js & React Digital Flagship">Next.js &amp; React Digital Flagship</option>
                    <option value="Headless Shopify Plus E-Commerce">Headless Shopify Plus E-Commerce</option>
                    <option value="Sitecore DXP Composable Enterprise">Sitecore DXP Composable Enterprise</option>
                    <option value="WordPress VIP Enterprise CMS">WordPress VIP Enterprise CMS</option>
                    <option value="Custom Web Application / SaaS Portal">Custom Web Application / SaaS Portal</option>
                  </select>
                  <svg className={styles.selectChevron} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitBtn}
              >
                <span>{isSubmitting ? "TRANSMITTING BRIEF..." : "REQUEST ARCHITECTURE BRIEFING"}</span>
                <svg className={styles.submitBtnSvg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {feedback && (
                <div
                  className={`${styles.formFeedback} ${
                    feedback.type === "error" ? styles.formFeedbackError : ""
                  }`}
                >
                  {feedback.message}
                </div>
              )}

              <p className={styles.formDisclaimer}>
                Zero spam. Guaranteed NDA protection for enterprise technical data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
