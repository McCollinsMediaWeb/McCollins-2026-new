"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function CareersPageClient() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectFile = (selectedFile?: File) => {
    if (!selectedFile) return;
    setFile(selectedFile);
    setError("");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!firstName.trim() || !lastName.trim()) {
      setError("Please fill out both First Name and Last Name.");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone / mobile number.");
      return;
    }
    if (!file) {
      setError("Please upload your CV / Resume.");
      return;
    }

    setIsSubmitting(true);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);

      const uploadResponse = await fetch("/api/upload-resume", {
        method: "POST",
        body: uploadFormData,
      });
      const uploadData = await uploadResponse.json();

      if (!uploadResponse.ok || !uploadData.url) {
        throw new Error(uploadData.error || "Failed to upload CV file.");
      }

      const fullName = `${firstName.trim()} ${lastName.trim()}`;
      const currentUrl = window.location.href;
      const payload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        name: fullName,
        email: email.trim(),
        phone: phone.trim(),
        contact: phone.trim(),
        resumeUrl: uploadData.url,
        inquiryType: "Careers",
        services: "Career Application",
        page: "careers",
        pageUrl: currentUrl,
        source: "Careers Page Application",
        date: new Date(),
      };

      const submissionResponse = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const submissionData = await submissionResponse.json();

      if (!submissionResponse.ok) {
        throw new Error(submissionData.error || "Failed to submit application.");
      }

      const sheetData = new FormData();
      sheetData.append("Firstname", payload.firstName);
      sheetData.append("Lastname", payload.lastName);
      sheetData.append("Email", payload.email);
      sheetData.append("Phone", payload.phone);
      sheetData.append("Contact", payload.contact);
      sheetData.append("ResumeUrl", payload.resumeUrl);
      sheetData.append("Services", payload.services);
      sheetData.append("page", payload.page);
      sheetData.append("pageUrl", payload.pageUrl);
      sheetData.append("source", payload.source);

      fetch(
        "https://script.google.com/macros/s/AKfycbxmDwaT4Le95NuEGMeviV3p_ofzhwfqW6w7TDLttjg0N2n0NdkRNHiPYBVt20eI4VgVKg/exec",
        { method: "POST", body: sheetData },
      ).catch(() => {});

      setIsSubmitted(true);
    } catch (submissionError) {
      console.error("Career submission error:", submissionError);
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "An unexpected error occurred. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <Link href="/contact" className={styles.backLink}>
          <span aria-hidden="true">←</span> Back to contact
        </Link>

        <div className={styles.layout}>
          <section className={styles.intro}>
            <p className={styles.eyebrow}>JOIN OUR TEAM</p>
            <h1 className={styles.heading}>CAREERS</h1>
            <p className={styles.introText}>
              We are always looking for curious, ambitious people who want to create work that makes an impact.
            </p>
          </section>

          <section className={styles.formCard} aria-labelledby="career-form-title">
            {isSubmitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon} aria-hidden="true">✓</div>
                <h2 id="career-form-title" className={styles.title}>Application Submitted!</h2>
                <p className={styles.subtitle}>
                  Thank you for your interest. We have received your application and resume, and our team will get back to you soon.
                </p>
                <Link href="/contact" className={styles.submitBtn}>Back to Contact</Link>
              </div>
            ) : (
              <>
                <h2 id="career-form-title" className={styles.title}>Apply to McCollins</h2>
                <p className={styles.subtitle}>Tell us about yourself and submit your CV below.</p>

                {error && <div className={styles.errorMessage} role="alert">{error}</div>}

                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroupRow}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="first-name">First Name</label>
                      <input id="first-name" type="text" className={styles.input} placeholder="e.g. Jane" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="last-name">Last Name</label>
                      <input id="last-name" type="text" className={styles.input} placeholder="e.g. Doe" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
                    </div>
                  </div>

                  <div className={styles.formGroupRow}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="career-email">Email Address</label>
                      <input id="career-email" type="email" className={styles.input} placeholder="e.g. jane.doe@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="career-phone">Phone Number</label>
                      <input id="career-phone" type="tel" className={styles.input} placeholder="e.g. +971 50 123 4567" value={phone} onChange={(event) => setPhone(event.target.value)} required />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="career-resume">Resume / CV</label>
                    <div
                      className={`${styles.dropzone} ${file ? styles.dropzoneActive : ""}`}
                      onClick={() => fileInputRef.current?.click()}
                      onDrop={(event) => {
                        event.preventDefault();
                        selectFile(event.dataTransfer.files[0]);
                      }}
                      onDragOver={(event) => event.preventDefault()}
                    >
                      <input id="career-resume" type="file" ref={fileInputRef} className={styles.fileInput} accept=".pdf,.doc,.docx,.txt" onChange={(event) => selectFile(event.target.files?.[0])} />
                      {file ? (
                        <>
                          <span className={styles.selectedFileName}>📄 {file.name}</span>
                          <span className={styles.dropzoneSubtitle}>{(file.size / (1024 * 1024)).toFixed(2)} MB · Click to change</span>
                        </>
                      ) : (
                        <>
                          <span className={styles.dropzoneTitle}>Upload your CV</span>
                          <span className={styles.dropzoneSubtitle}>PDF, DOCX, or TXT (Max 10MB)</span>
                        </>
                      )}
                    </div>
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? "Uploading CV & Submitting..." : "Submit Application"}
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
