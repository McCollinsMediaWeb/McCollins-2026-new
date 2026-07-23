"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [text, setText] = useState("");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const checkedItemsString = checkedItems.join(", ");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCheckboxChange = (value: string) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      setStatus("error");
      setStatusMessage("You must agree to the privacy policy.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      // 1. Submit to local MongoDB database API
      const response = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: firstName, // fallback
          firstName: firstName,
          company: company,
          jobTitle: jobTitle,
          email: email,
          contact: contact,
          text: text,
          services: checkedItemsString,
          page: "contact",
          date: new Date(),
        }),
      });

      // 2. Submit to Google Sheets script
      let formData = new FormData();
      formData.append("Firstname", firstName);
      formData.append("Email", email);
      formData.append("Phone", contact);
      formData.append("Company", company);
      formData.append("Services", checkedItemsString);
      formData.append("jobTitle", jobTitle);
      formData.append("Message", text);
      formData.append("page", "contact");

      fetch(
        "https://script.google.com/macros/s/AKfycbxmDwaT4Le95NuEGMeviV3p_ofzhwfqW6w7TDLttjg0N2n0NdkRNHiPYBVt20eI4VgVKg/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Google sheets submit success:", data);
        })
        .catch((error) => console.error("Google sheets submit error:", error));

      if (response.ok) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setFirstName("");
        setCompany("");
        setJobTitle("");
        setContact("");
        setEmail("");
        setText("");
        setCheckedItems([]);
        setAgree(false);

        // Redirect to Thank you page
        router.push("/thank-you");
      } else {
        const data = await response.json();
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Failed to connect to the server. Please check your connection.");
    }
  };

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

    // Service Banner Reveal & Parallax
    const banner = containerRef.current.querySelector("." + styles.serviceBanner);
    if (banner) {
      gsap.to(banner, {
        scrollTrigger: {
          trigger: banner,
          start: "top 90%",
        },
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      });

      const gifWrapper = banner.querySelector("." + styles.bannerGifWrapper);
      if (gifWrapper) {
        gsap.fromTo(gifWrapper,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: banner,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }
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
            <span key={i} className={char === "O" ? `${styles.heroChar} ${styles.heroCharO}` : styles.heroChar}>{char}</span>
          ))}
        </h1>
      </section>

      {/* Split Content Section */}
      <section className={styles.contentSection}>

        {/* Left Column: Contact Details */}
        <div className={styles.detailsCol}>
        </div>

        {/* Right Column: Form */}
        <div className={styles.formCol}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>READY TO DO SOMETHING BIG?</h2>
            <p className={styles.formDesc}>
              Have an idea, project, or campaign you want to bring to life? Drop us a line, or visit our office in Dubai Media City.
            </p>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                className={styles.formInput}
                placeholder="Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                className={styles.formInput}
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                className={styles.formInput}
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                className={styles.formInput}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                className={styles.formInput}
                placeholder="Phone"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>

            {/* Services Interested Multiple Selector Grid */}
            <div className={`${styles.inputGroup} ${styles.servicesGroup}`}>
              <span className={styles.servicesTitle}>Service Interested</span>
              <div className={styles.servicesGrid}>
                {[
                  "Brand Development",
                  "Web Design / Development",
                  "Marketing Automation",
                  "Social Media",
                  "Performance Marketing",
                  "Content Production",
                  "Google Ads",
                  "SEO"
                ].map((service) => (
                  <label key={service} className={styles.serviceCheckbox}>
                    <input
                      type="checkbox"
                      className={styles.checkboxInput}
                      checked={checkedItems.includes(service)}
                      onChange={() => handleCheckboxChange(service)}
                    />
                    <span className={styles.serviceCheckboxLabel}>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <textarea
                className={styles.formInput}
                placeholder="Message"
                rows={3}
                style={{ resize: "none" }}
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
            </div>

            <div className={styles.formFooter}>
              <label className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  className={styles.checkboxInput}
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                />
                <span className={styles.checkboxLabel}>I agree to the privacy policy</span>
              </label>

              <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
                <span className={styles.submitBtnDot} />
                <span className={styles.submitBtnText}>
                  <span
                    className={styles.submitBtnTextInner}
                    data-text={status === "loading" ? "SUBMITTING..." : "SUBMIT FORM"}
                  >
                    {status === "loading" ? "SUBMITTING..." : "SUBMIT FORM"}
                  </span>
                </span>
              </button>
            </div>

            {statusMessage && (
              <div style={{
                marginTop: "1.5rem",
                padding: "1rem",
                borderRadius: "4px",
                fontSize: "0.9rem",
                lineHeight: "1.4",
                backgroundColor: status === "success" ? "rgba(29, 187, 153, 0.15)" : "rgba(220, 53, 69, 0.15)",
                color: status === "success" ? "#1dbb99" : "#ff4a4a",
                border: status === "success" ? "1px solid #1dbb99" : "1px solid #ff4a4a"
              }}>
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </section>



      <section className={styles.contentSection} style={{ paddingTop: '10px' }}>

        {/* Left Column: Contact Details */}
        <div className={styles.detailsCol}>
          <div className={styles.detailBlock}>
            <div className={styles.detailTitle}>Contact</div>
            <div className={styles.detailText}>
              Mobile: +971 55 956 4135<br /><br />
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
        </div>
      </section>

      {/* OUR SERVICE Banner Section */}
      <section className={styles.serviceBannerSection}>
        <Link href="/services" className={styles.serviceBanner}>
          <div className={styles.bannerGifWrapper}>
            <Image
              src="/contact/new-animation.gif"
              alt="McCollins Media services gif showcase"
              fill
              className={styles.bannerGif}
              unoptimized
            />
          </div>
          <span className={styles.serviceBannerText}>OUR SERVICE</span>
        </Link>
      </section>

    </div>
  );
}
