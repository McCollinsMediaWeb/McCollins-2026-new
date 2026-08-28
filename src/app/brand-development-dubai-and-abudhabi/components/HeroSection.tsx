"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
  });

  useGSAP(() => {
    // Left text stagger reveal
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".hero-anim-kicker", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    })
      .from(
        ".hero-anim-title",
        {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
        },
        "-=0.5"
      )
      .from(
        ".hero-anim-subtitle",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      );

    // Glass graphic entrance animation
    gsap.from(".hero-anim-glass", {
      scale: 0.88,
      opacity: 0,
      duration: 1.4,
      delay: 0.3,
      ease: "power3.out",
    });

    // Form entrance animation
    gsap.from(".hero-anim-form", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const sheetUrl = "https://script.google.com/macros/s/AKfycby83cR9v5EyKUvMAGg1mjEqdgShMB1qwWRs4-YOQDwujB7ID224joonq_K6MqjUxvZr/exec";

      if (sheetUrl) {
        const payload = new FormData();
        payload.append("FullName", formData.fullName.trim());
        payload.append("Email", formData.email.trim());
        payload.append("Phone", formData.phone.trim());
        payload.append("Company", formData.company.trim());
        payload.append("Service", formData.service || "Brand Development");
        payload.append("Page", "Brand Development Dubai & Abu Dhabi");
        payload.append("PageUrl", typeof window !== "undefined" ? window.location.href : "");
        payload.append("SubmittedAt", new Date().toLocaleString());

        await fetch(sheetUrl, {
          method: "POST",
          body: payload,
          mode: "no-cors",
        }).catch((err) => console.error("Sheet submit error:", err));
      }
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section className={styles.heroSection} ref={containerRef}>
      <div className={styles.heroContainer}>
        {/* Left Column */}
        <div className={styles.heroLeft}>
          <span className={`${styles.kicker} hero-anim-kicker`}>
            BRAND DEVELOPMENT - DUBAI &amp; ABU DHABI
          </span>

          <h1 className={styles.heroTitle}>
            <span className={`${styles.heroTitleRow} hero-anim-title`}>
              BUILD A BRAND
            </span>
            <span className={`${styles.heroTitleRow} hero-anim-title`}>
              <span className={styles.titleItalic}>The </span>
              <span className={styles.titleBlueItalic}>Arab market</span>
            </span>
            <span className={`${styles.heroTitleRow} hero-anim-title`}>
              ACTUALLY REMEMBERS.
            </span>
          </h1>

          <p className={`${styles.heroSubtitle} hero-anim-subtitle`}>
            Positioning, identity systems and visual languages built with 15+ years of regional expertise — for businesses that want to stand out, scale and stay memorable across the GCC.
          </p>
        </div>

        {/* Right Column */}
        <div className={styles.heroRight}>
          {/* Desaturated Glass Graphic Asset */}
          <div className={`${styles.glassGraphicWrapper} hero-anim-glass`} ref={glassRef}>
            <Image
              src="/brand-development-dubai-and-abudhabi/glass-image.png"
              alt="Brand Glass Graphic"
              width={920}
              height={680}
              className={styles.glassGraphic}
              priority
            />
          </div>

          {/* Form Card */}
          <div className={`${styles.formCard} hero-anim-form`} id="strategy-form">
            {!submitted ? (
              <>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Start your brand project</h2>
                  <p className={styles.formSubtitle}>
                    Tell us about your business — we&apos;ll come back with a tailored approach within 24 hours.
                  </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Full name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <input
                      type="email"
                      className={styles.input}
                      placeholder="Work email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <input
                      type="tel"
                      className={styles.input}
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <select
                      className={`${styles.input} ${styles.select}`}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select service required</option>
                      <option value="Brand Development">Brand Development</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Google Ads">Google Ads</option>
                      <option value="Web Design / Development">Web Design / Development</option>
                      <option value="Performance Marketing">Performance Marketing</option>
                      <option value="SEO">SEO</option>
                      <option value="Marketing Automation">Marketing Automation</option>
                      <option value="Content Production">Content Production</option>
                    </select>
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? "SUBMITTING..." : "REQUEST MY STRATEGY CALL"}
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successMessage}>
                <h3 className={styles.successTitle}>Strategy Call Requested!</h3>
                <p className={styles.successDesc}>
                  Thank you, {formData.fullName}. Our team will contact you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
