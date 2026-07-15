"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../login/login.module.css";

export default function AdminSignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Admin account created successfully! Redirecting to login...");
        setTimeout(() => {
          router.push("/admin/login");
        }, 2000);
      } else {
        setError(data.error || "Registration failed.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoText}>McCOLLINS</div>
        </div>
        <h1 className={styles.title}>Register Admin</h1>

        {error && <div className={styles.error}>{error}</div>}
        {success && (
          <div className={styles.error} style={{ backgroundColor: "rgba(29, 187, 153, 0.15)", border: "1px solid #1dbb99", color: "#1dbb99" }}>
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@mccollinsmedia.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button className={styles.button} type="submit" disabled={loading}>
            {loading ? "Registering..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
