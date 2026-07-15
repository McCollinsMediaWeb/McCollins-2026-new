import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - McCollins Media",
  description: "Thank you for contacting McCollins Media. We will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#000000",
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      textAlign: "center",
      boxSizing: "border-box",
      fontFamily: "var(--font-delight), sans-serif",
    }}>
      <div style={{
        maxWidth: "600px",
        padding: "40px",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        background: "rgba(255, 255, 255, 0.01)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
      }}>
        <div style={{
          fontSize: "4.5rem",
          color: "#ffde11",
          marginBottom: "20px",
          fontWeight: 900,
          fontFamily: "var(--font-playfair-display), serif",
        }}>
          ✓
        </div>
        
        <h1 style={{
          fontSize: "2.2rem",
          fontWeight: 700,
          margin: "0 0 15px 0",
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
          fontFamily: "var(--font-playfair-display), serif",
        }}>
          Thank You!
        </h1>
        
        <p style={{
          fontSize: "1.05rem",
          lineHeight: "1.6",
          color: "#cccccc",
          margin: "0 0 35px 0",
        }}>
          Your inquiry has been successfully submitted. We appreciate you taking the time to write to us, and our team will get in touch with you shortly.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}>
          <Link href="/" style={{
            padding: "12px 28px",
            backgroundColor: "#ffffff",
            color: "#000000",
            borderRadius: "30px",
            fontSize: "0.85rem",
            fontWeight: "700",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.3s ease",
            border: "1px solid #ffffff",
          }}>
            Back to Home
          </Link>
          
          <Link href="/blog" style={{
            padding: "12px 28px",
            backgroundColor: "transparent",
            color: "#ffffff",
            borderRadius: "30px",
            fontSize: "0.85rem",
            fontWeight: "700",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.3s ease",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}>
            Read Our Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
