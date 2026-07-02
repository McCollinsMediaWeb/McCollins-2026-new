"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !containerRef.current) return;

    const tl = gsap.timeline();

    // Hero Text Reveal
    const heroChars = containerRef.current.querySelectorAll("." + styles.heroChar);
    if (heroChars.length > 0) {
      tl.to(heroChars, {
        y: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
        delay: 0.1,
      });
    }

    // Detail Blocks Reveal
    const detailBlocks = containerRef.current.querySelectorAll("." + styles.detailBlock);
    if (detailBlocks.length > 0) {
      gsap.to(detailBlocks, {
        scrollTrigger: {
          trigger: "." + styles.detailsCol,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }

    // Form Section Reveal
    const formHeader = containerRef.current.querySelector("." + styles.formHeader);
    const inputs = containerRef.current.querySelectorAll("." + styles.inputGroup);
    const formFooter = containerRef.current.querySelector("." + styles.formFooter);

    const formTl = gsap.timeline({
      scrollTrigger: {
        trigger: "." + styles.formCol,
        start: "top 85%",
      },
    });

    if (formHeader) {
      formTl.to(formHeader, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
    }
    
    if (inputs.length > 0) {
      formTl.to(inputs, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }, "-=0.4");
    }

    if (formFooter) {
      formTl.to(formFooter, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
    }

    // Service Banner Reveal
    const banner = containerRef.current.querySelector("." + styles.serviceBanner);
    if (banner) {
      gsap.to(banner, {
        scrollTrigger: {
          trigger: banner,
          start: "top 90%",
        },
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      });
    }

  }, { scope: containerRef, dependencies: [mounted] });

  if (!mounted) return null;

  const titleWord = "CONTACT";

  return (
    <div className={styles.contactContainer} ref={containerRef}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroText}>
          {titleWord.split("").map((char, i) => (
            <span key={i} className={styles.heroChar}>{char}</span>
          ))}
        </h1>
      </section>

      {/* Split Content Section */}
      <section className={styles.contentSection}>
        
        {/* Left Column: Contact Details */}
        <div className={styles.detailsCol}>
          <div className={styles.detailBlock}>
            <div className={styles.detailTitle}>Contact</div>
            <div className={styles.detailText}>
              Mobile: +971 4 375 5104<br />
              Email: info@mccollinsmedia.com
            </div>
          </div>
          
          <div className={styles.detailBlock}>
            <div className={styles.detailTitle}>Our Address</div>
            <div className={styles.detailText}>
              G01, Loft Office 2, Entrance C,<br />
              Dubai Media City, Dubai
            </div>
          </div>
          
          <div className={styles.detailBlock}>
            <div className={styles.detailTitle}>Office Hours</div>
            <div className={styles.detailText}>
              Monday - Friday (9:00 AM to 6:00 PM)<br />
              Dubai Time: 3:00 PM
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className={styles.formCol}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>READY TO DO SOMETHING BIG?</h2>
            <p className={styles.formDesc}>
              Have an idea, project, or campaign you want to bring to life? Drop us a line, or visit our office in Dubai Media City.
            </p>
          </div>

          <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input type="text" className={styles.formInput} placeholder="Name" required />
            </div>
            
            <div className={styles.inputGroup}>
              <input type="text" className={styles.formInput} placeholder="Company" />
            </div>
            
            <div className={styles.inputGroup}>
              <input type="email" className={styles.formInput} placeholder="Email" required />
            </div>
            
            <div className={styles.inputGroup}>
              <textarea 
                className={styles.formInput} 
                placeholder="Message" 
                rows={3} 
                style={{ resize: "none" }}
                required 
              />
            </div>

            <div className={styles.formFooter}>
              <label className={styles.checkboxGroup}>
                <input type="checkbox" className={styles.checkboxInput} required />
                <span className={styles.checkboxLabel}>I agree to the privacy policy</span>
              </label>

              <button type="submit" className={styles.submitBtn}>
                + SUBMIT INQUIRY
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* OUR SERVICE Banner Section */}
      <section className={styles.serviceBannerSection}>
        <Link href="/services" className={styles.serviceBanner}>
          <span className={styles.serviceBannerText}>OUR SERVICE</span>
        </Link>
      </section>

    </div>
  );
}
