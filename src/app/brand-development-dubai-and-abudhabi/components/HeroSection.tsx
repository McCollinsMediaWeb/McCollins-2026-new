"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SERVICE_OPTIONS = [
  "Brand Development",
  "Social Media",
  "Google Ads",
  "Web Design / Development",
  "Performance Marketing",
  "SEO",
  "Marketing Automation",
  "Content Production",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

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
        payload.append(
          "Service",
          selectedServices.length > 0 ? selectedServices.join(", ") : "Brand Development"
        );
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
            Positioning, identity systems and visual languages built with 15+ years of regional expertise - for businesses that want to stand out, scale and stay memorable across the GCC.
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
                    Tell us about your business - we&apos;ll come back with a tailored approach within 24 hours.
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

                  <div className={styles.inputGroup} ref={dropdownRef}>
                    <div className={styles.multiSelectWrapper}>
                      <button
                        type="button"
                        className={`${styles.multiSelectTrigger} ${isDropdownOpen ? styles.multiSelectTriggerOpen : ""}`}
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        aria-haspopup="listbox"
                        aria-expanded={isDropdownOpen}
                      >
                        <div className={styles.multiSelectDisplay}>
                          {selectedServices.length === 0 ? (
                            <span className={styles.multiSelectPlaceholder}>
                              Select service(s) required
                            </span>
                          ) : (
                            <>
                              <span
                                className={styles.multiSelectValue}
                                title={selectedServices.join(", ")}
                              >
                                {selectedServices.join(", ")}
                              </span>
                              {selectedServices.length > 1 && (
                                <span className={styles.multiSelectBadge}>
                                  {selectedServices.length}
                                </span>
                              )}
                            </>
                          )}
                        </div>
                        <svg
                          className={`${styles.multiSelectArrow} ${isDropdownOpen ? styles.multiSelectArrowOpen : ""}`}
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="#8E8E93"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {isDropdownOpen && (
                        <div
                          className={styles.multiSelectMenu}
                          role="listbox"
                          data-lenis-prevent="true"
                          onWheel={(e) => e.stopPropagation()}
                          onTouchMove={(e) => e.stopPropagation()}
                        >
                          {SERVICE_OPTIONS.map((service) => {
                            const isSelected = selectedServices.includes(service);
                            return (
                              <div
                                key={service}
                                className={`${styles.multiSelectItem} ${isSelected ? styles.multiSelectItemActive : ""}`}
                                onClick={() => toggleService(service)}
                                role="option"
                                aria-selected={isSelected}
                              >
                                <div
                                  className={`${styles.customCheckbox} ${isSelected ? styles.customCheckboxChecked : ""}`}
                                >
                                  {isSelected && (
                                    <svg
                                      className={styles.customCheckboxCheckmark}
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1 4L3.5 6.5L9 1"
                                        stroke="white"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  )}
                                </div>
                                <span>{service}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
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
