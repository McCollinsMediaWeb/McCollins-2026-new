"use client";

import React, { useState, useRef } from "react";
import styles from "./CareersModal.module.css";

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function CareersModal({ isOpen, onClose, onSuccess }: CareersModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsSubmitted(false);
    setError("");
    setSuccessMessage("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setFile(null);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError("");
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setError("");
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!firstName.trim() || !lastName.trim()) {
      setError("Please fill out both First Name and Last Name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!file) {
      setError("Please upload your CV / Resume.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Upload file to Cloudinary via /api/upload-resume
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);

      const uploadRes = await fetch("/api/upload-resume", {
        method: "POST",
        body: uploadFormData,
      });

      const uploadData = await uploadRes.json();
      if (!uploadRes.ok || !uploadData.url) {
        throw new Error(uploadData.error || "Failed to upload CV file.");
      }

      const resumeUrl = uploadData.url;
      const fullName = `${firstName.trim()} ${lastName.trim()}`;
      const currentUrl = typeof window !== "undefined" ? window.location.href : "";

      // 2. Submit application to MongoDB DB (/api/form-submit)
      const dbRes = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          name: fullName,
          email: email.trim(),
          resumeUrl: resumeUrl,
          inquiryType: "Careers",
          services: "Career Application",
          page: "contact",
          pageUrl: currentUrl,
          source: "Careers Modal Application",
          date: new Date(),
        }),
      });

      const dbData = await dbRes.json();
      if (!dbRes.ok) {
        throw new Error(dbData.error || "Failed to submit application.");
      }

      // 3. Submit to Google Sheets script if available
      try {
        let formData = new FormData();
        formData.append("Firstname", firstName.trim());
        formData.append("Lastname", lastName.trim());
        formData.append("Email", email.trim());
        formData.append("ResumeUrl", resumeUrl);
        formData.append("Services", "Career Application");
        formData.append("page", "contact");
        formData.append("pageUrl", currentUrl);
        formData.append("source", "Careers Modal Application");

        fetch(
          "https://script.google.com/macros/s/AKfycbxmDwaT4Le95NuEGMeviV3p_ofzhwfqW6w7TDLttjg0N2n0NdkRNHiPYBVt20eI4VgVKg/exec",
          { method: "POST", body: formData }
        ).catch(() => {});
      } catch (err) {}

      setSuccessMessage("Your application has been submitted successfully!");
      setIsSubmitted(true);
      if (onSuccess) onSuccess();

    } catch (err: any) {
      console.error("Career submission error:", err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeBtn} onClick={handleClose} aria-label="Close modal">
          ✕
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "rgba(34, 197, 94, 0.15)",
              color: "#22c55e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              margin: "0 auto 20px auto",
              border: "2px solid #22c55e"
            }}>
              ✓
            </div>
            <h2 className={styles.title} style={{ fontSize: "28px", marginBottom: "10px" }}>Application Submitted!</h2>
            <p className={styles.subtitle} style={{ fontSize: "15px", marginBottom: "28px" }}>
              Thank you for your interest! We have received your application and resume. Our team will review it and get back to you soon.
            </p>
            <button
              type="button"
              className={styles.submitBtn}
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>Careers</h2>
            <p className={styles.subtitle}>Join our team - submit your CV below</p>

            {error && <div className={styles.errorMessage}>{error}</div>}
            {successMessage && <div className={styles.successMessage}>{successMessage}</div>}

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroupRow}>
                <div className={styles.field} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>First Name</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Jane"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.field} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>Last Name</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={styles.field} style={{ marginTop: "16px", marginBottom: "20px" }}>
                <label className={styles.label}>Email Address</label>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="e.g. jane.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={styles.field} style={{ marginTop: "16px" }}>
                <label className={styles.label}>Resume / CV</label>
                <div
                  className={`${styles.dropzone} ${file ? styles.dropzoneActive : ""}`}
                  onClick={() => fileInputRef.current?.click()}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className={styles.fileInput}
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileChange}
                  />
                  {file ? (
                    <>
                      <span className={styles.selectedFileName}>📄 {file.name}</span>
                      <span className={styles.dropzoneSubtitle}>
                        {(file.size / (1024 * 1024)).toFixed(2)} MB - Click to change
                      </span>
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
      </div>
    </div>
  );
}
