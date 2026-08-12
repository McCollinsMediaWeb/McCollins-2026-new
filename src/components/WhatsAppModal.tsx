"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./WhatsAppModal.module.css";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappUrl: string;
}

export default function WhatsAppModal({
  isOpen,
  onClose,
  whatsappUrl,
}: WhatsAppModalProps) {
  const pathname = usePathname();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (typeof window !== "undefined") {
        const searchParams = new URLSearchParams(window.location.search);
        const utmSource = searchParams.get("utm_source") || searchParams.get("source") || searchParams.get("ref");

        let formattedSource = "";
        if (utmSource) {
          formattedSource = `${utmSource} (Website: ${pathname}${window.location.search})`;
        } else if (window.location.search) {
          formattedSource = `Website (${pathname}${window.location.search})`;
        } else if (pathname && pathname !== "/") {
          formattedSource = `Website (${pathname})`;
        } else {
          formattedSource = "Website Homepage";
        }

        setSource(formattedSource);
      }
      setError(null);
    }
  }, [isOpen, pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !phone.trim()) {
      setError("Please fill in all required fields (Name and Phone).");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/whatsapp-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          source: source.trim() || "Website",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      // Reset form
      setName("");
      setPhone("");
      onClose();

      // Redirect user to WhatsApp
      if (typeof window !== "undefined") {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err: any) {
      console.error("WhatsApp Lead submit error:", err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          ✕
        </button>

        <div className={styles.header}>
          {/* <div className={styles.badge}>
            <svg
              className={styles.badgeIcon}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.048l-1.356 4.962 5.087-1.332a9.907 9.907 0 004.88 1.293h.004c5.505 0 9.99-4.477 9.99-9.985C22.002 6.478 17.518 2 12.012 2zm6.09 13.98c-.25.707-1.464 1.3-2.015 1.386-.476.074-1.096.115-3.155-.74-2.632-1.093-4.32-3.79-4.453-3.966-.13-.177-1.072-1.428-1.072-2.723 0-1.294.673-1.928.913-2.19.24-.265.523-.33.698-.33.176 0 .35 0 .504.01.16.01.37-.06.58.45.215.53.737 1.79.8 1.922.063.13.104.286.018.463-.086.177-.13.287-.26.442-.128.156-.27.35-.386.47-.13.132-.266.276-.115.537.15.26.66 1.09 1.417 1.764.977.87 1.8 1.14 2.056 1.27.258.13.408.11.56-.06.15-.175.644-.75.816-1.006.17-.258.344-.216.58-.13.238.087 1.507.712 1.765.84.258.13.43.195.495.305.064.11.064.636-.186 1.343z" />
            </svg>
            Instant WhatsApp Connect
          </div> */}
          <h3 className={styles.title}>Start Conversation</h3>
          <p className={styles.subtitle}>
            Please fill in your details to connect directly with our team on WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.errorMessage}>{error}</div>}

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="wa-name">
              Full Name *
            </label>
            <div className={styles.inputWrapper}>
              <svg
                className={styles.inputIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <input
                id="wa-name"
                type="text"
                className={styles.input}
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="wa-phone">
              Phone Number *
            </label>
            <div className={styles.inputWrapper}>
              <svg
                className={styles.inputIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <input
                id="wa-phone"
                type="tel"
                className={styles.input}
                placeholder="+971 50 123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className={styles.spinner} />
                Connecting...
              </>
            ) : (
              <>
                Continue to WhatsApp
                <svg
                  className={styles.btnIcon}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.048l-1.356 4.962 5.087-1.332a9.907 9.907 0 004.88 1.293h.004c5.505 0 9.99-4.477 9.99-9.985C22.002 6.478 17.518 2 12.012 2zm6.09 13.98c-.25.707-1.464 1.3-2.015 1.386-.476.074-1.096.115-3.155-.74-2.632-1.093-4.32-3.79-4.453-3.966-.13-.177-1.072-1.428-1.072-2.723 0-1.294.673-1.928.913-2.19.24-.265.523-.33.698-.33.176 0 .35 0 .504.01.16.01.37-.06.58.45.215.53.737 1.79.8 1.922.063.13.104.286.018.463-.086.177-.13.287-.26.442-.128.156-.27.35-.386.47-.13.132-.266.276-.115.537.15.26.66 1.09 1.417 1.764.977.87 1.8 1.14 2.056 1.27.258.13.408.11.56-.06.15-.175.644-.75.816-1.006.17-.258.344-.216.58-.13.238.087 1.507.712 1.765.84.258.13.43.195.495.305.064.11.064.636-.186 1.343z" />
                </svg>
              </>
            )}
          </button>

          <p className={styles.disclaimer}>
            Your information is stored securely and never shared with third parties.
          </p>
        </form>
      </div>
    </div>
  );
}
