"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import RecaptchaCheckbox, { getRecaptchaResponse } from "@/components/RecaptchaCheckbox";

type HeroSectionProps = { bookingUrl?: string };

export default function HeroSection({ bookingUrl }: HeroSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", company: "", phone: "", email: "", budget: "", message: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || isSubmitting) return;
    const recaptchaToken = await getRecaptchaResponse(event.currentTarget, "brand_strategy_lead");
    if (!recaptchaToken) return;
    setIsSubmitting(true);
    try {
      const currentUrl = window.location.href;
      const messageContent = [
        formData.message.trim(),
        formData.budget ? `Project budget: ${formData.budget}` : ""
      ].filter(Boolean).join("\n\n") || "Not specified";

      const response = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName.trim(), firstName: formData.fullName.trim(),
          email: formData.email.trim(), phone: formData.phone.trim(), company: formData.company.trim(),
          message: messageContent,
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
          <span className={styles.kicker}>BRAND DEVELOPMENT · DUBAI · ABU DHABI</span>
          <h1 className={styles.heroTitle}>Branding Agency in Dubai and Abu Dhabi</h1>
          <p className={styles.heroRating}>Rated 4.4/5 on Google</p>
          <p className={styles.heroSubtitle}>
            Build or refresh a brand for Dubai and Abu Dhabi audiences with clear positioning,
            bilingual identity and practical guidelines for digital, print and physical spaces.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.phoneButton} href="tel:+971559564135">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.buttonIcon}
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+971 55 956 4135</span>
            </a>
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
                  <input className={styles.input} type="tel" placeholder="Phone number" required value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} />
                  <input className={styles.input} type="email" placeholder="Work email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
                  <select className={`${styles.input} ${styles.select}`} value={formData.budget} onChange={(event) => setFormData({ ...formData, budget: event.target.value })} aria-label="Project budget">
                    <option value="">Project budget</option><option value="AED 25k-50k">AED 25k-50k</option><option value="AED 50k-100k">AED 50k-100k</option><option value="AED 100k-250k">AED 100k-250k</option><option value="AED 250k+">AED 250k+</option>
                  </select>
                  <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Message"
                    rows={3}
                    value={formData.message}
                    onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  />
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
