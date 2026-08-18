"use client";

import React, { useState } from "react";
import styles from "./BusinessEnquiryModal.module.css";

interface BusinessEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function BusinessEnquiryModal({
  isOpen,
  onClose,
  onSuccess,
}: BusinessEnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  if (!isOpen) return null;

  const handleClose = () => {
    setIsSubmitted(false);
    setError("");
    setSuccessMessage("");
    setFullName("");
    setCompanyName("");
    setEmail("");
    setMessage("");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const currentUrl = typeof window !== "undefined" ? window.location.href : "";

      // 1. Save submission to MongoDB DB (/api/form-submit)
      const res = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(),
          firstName: fullName.trim(),
          company: companyName.trim(),
          email: email.trim(),
          text: message.trim(),
          message: message.trim(),
          inquiryType: "Business Enquiry",
          services: "Business Enquiry",
          page: "contact",
          pageUrl: currentUrl,
          source: "Business Enquiry Modal",
          date: new Date(),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      // 2. Submit to Google Sheets script if configured
      try {
        let formData = new FormData();
        formData.append("Firstname", fullName.trim());
        formData.append("Company", companyName.trim());
        formData.append("Email", email.trim());
        formData.append("Message", message.trim());
        formData.append("Services", "Business Enquiry");
        formData.append("page", "contact");
        formData.append("pageUrl", currentUrl);
        formData.append("source", "Business Enquiry Modal");

        fetch(
          "https://script.google.com/macros/s/AKfycbxmDwaT4Le95NuEGMeviV3p_ofzhwfqW6w7TDLttjg0N2n0NdkRNHiPYBVt20eI4VgVKg/exec",
          { method: "POST", body: formData }
        ).catch(() => {});
      } catch (err) {}

      setSuccessMessage("Thank you! Your enquiry has been submitted successfully.");
      setIsSubmitted(true);
      if (onSuccess) onSuccess();

    } catch (err: any) {
      console.error("Business Enquiry submission error:", err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close modal"
        >
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
            <h2 className={styles.title} style={{ fontSize: "28px", marginBottom: "10px" }}>Enquiry Received!</h2>
            <p className={styles.subtitle} style={{ fontSize: "15px", marginBottom: "28px" }}>
              Thank you for reaching out! We have received your enquiry and our team will get in touch with you shortly.
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
            <h2 className={styles.title}>Business Enquiry</h2>
            <p className={styles.subtitle}>Get in touch — tell us about your project</p>

            {error && <div className={styles.errorMessage}>{error}</div>}
            {successMessage && (
              <div className={styles.successMessage}>{successMessage}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label}>Full Name</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="e.g. Jane Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Company Name</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="e.g. Acme Corporation"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Email Address</label>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="e.g. jane@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
