"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import RecaptchaCheckbox, { getRecaptchaResponse } from "@/components/RecaptchaCheckbox";

type HeroSectionProps = { bookingUrl?: string };

export default function HeroSection({ bookingUrl }: HeroSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", company: "", phone: "", email: "", budget: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.fullName || !formData.email || isSubmitting) return;
    const recaptchaToken = await getRecaptchaResponse(event.currentTarget, "brand_strategy_lead");
    if (!recaptchaToken) return;
    setIsSubmitting(true);
    try {
      const currentUrl = window.location.href;
      const response = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName.trim(), firstName: formData.fullName.trim(),
          email: formData.email.trim(), phone: formData.phone.trim(), company: formData.company.trim(),
          message: `Project budget: ${formData.budget || "Not specified"}`,
          services: "Brand Development", page: "Brand Development Dubai & Abu Dhabi",
          pageUrl: currentUrl, source: "Brand Development landing page", recaptchaToken,
        }),
      });
      if (!response.ok) throw new Error("Unable to submit the form.");
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <span className={styles.kicker}>BRAND DEVELOPMENT · ABU DHABI</span>
          <h1 className={styles.heroTitle}>Branding Agency in Abu Dhabi</h1>
          <p className={styles.heroRating}>Rated 4.4/5 on Google</p>
          <p className={styles.heroSubtitle}>
            Build or refresh a brand for Abu Dhabi audiences with clear positioning,
            bilingual identity and practical guidelines for digital, print and physical spaces.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.phoneButton} href="tel:+971559564135">+971 55 956 4135</a>
            <a className={styles.whatsappButton} href="https://wa.me/971559564135" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.formCard} id="strategy-form">
            {bookingUrl ? (
              <div className={styles.bookingContent}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Book your brand strategy call</h2>
                  <p className={styles.formSubtitle}>Choose a convenient time to speak with our strategy team.</p>
                </div>
                <a href={bookingUrl} className={`${styles.submitBtn} ${styles.bookingButton}`} target="_blank" rel="noopener noreferrer">BOOK A STRATEGY CALL</a>
              </div>
            ) : !submitted ? (
              <>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Start your brand project</h2>
                  <p className={styles.formSubtitle}>Tell us about your business - we&apos;ll come back with a tailored approach within 24 hours.</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <input className={styles.input} type="text" placeholder="Full name" required value={formData.fullName} onChange={(event) => setFormData({ ...formData, fullName: event.target.value })} />
                  <input className={styles.input} type="text" placeholder="Company name" value={formData.company} onChange={(event) => setFormData({ ...formData, company: event.target.value })} />
                  <input className={styles.input} type="tel" placeholder="Phone number" value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} />
                  <input className={styles.input} type="email" placeholder="Work email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
                  <select className={`${styles.input} ${styles.select}`} value={formData.budget} onChange={(event) => setFormData({ ...formData, budget: event.target.value })} aria-label="Project budget">
                    <option value="">Project budget</option><option value="AED 25k-50k">AED 25k-50k</option><option value="AED 50k-100k">AED 50k-100k</option><option value="AED 100k-250k">AED 100k-250k</option><option value="AED 250k+">AED 250k+</option>
                  </select>
                  <RecaptchaCheckbox theme="dark" />
                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>{isSubmitting ? "SUBMITTING..." : "REQUEST MY STRATEGY CALL"}</button>
                </form>
              </>
            ) : (
              <div className={styles.successMessage}><h3 className={styles.successTitle}>Strategy call requested</h3><p className={styles.successDesc}>Thank you, {formData.fullName}. Our team will contact you within 24 hours.</p></div>
            )}
          </div>
          <div className={styles.glassGraphicWrapper} aria-hidden="true">
            <Image src="/brand-development-dubai-and-abudhabi/glass-image.png" alt="" width={1254} height={888} className={styles.glassGraphic} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
