import React from "react";
import styles from "@/styles/PolicyPages.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | McCollins Media",
  description: "Learn how McCollins Media collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <div className={styles.lastUpdated}>Last Updated: July 2026</div>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p className={styles.paragraph}>
            At McCollins Media, we are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
          <p className={styles.paragraph}>
            We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our services, subscribe to our newsletter, submit a contact form, or otherwise contact us. This may include:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Personal Identifiers:</strong> Name, email address, phone number, and company name.</li>
            <li className={styles.listItem}><strong>Usage Data:</strong> Information about your website visits, IP address, browser type, pages viewed, and access times collected automatically via cookies.</li>
            <li className={styles.listItem}><strong>Communication Preferences:</strong> Preferences in receiving marketing emails and communication from us.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
          <p className={styles.paragraph}>
            We use the information we collect or receive for various business purposes, including:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>To deliver, maintain, and optimize our website and services.</li>
            <li className={styles.listItem}>To send newsletter communications, marketing updates, and promotional material that you have subscribed to.</li>
            <li className={styles.listItem}>To respond to your inquiries, contact forms, and support requests.</li>
            <li className={styles.listItem}>To monitor and analyze usage patterns to improve user experience and site security.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Data Sharing and Disclosure</h2>
          <p className={styles.paragraph}>
            We do not sell, rent, or trade your personal information. We may share your data with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential (such as database hosts or analytics providers).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Data Security</h2>
          <p className={styles.paragraph}>
            We implement appropriate technical and organizational security measures to protect the security of any personal information we process. However, please remember that no transmission over the internet is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Your Rights</h2>
          <p className={styles.paragraph}>
            Depending on your location, you may have rights regarding your personal information under applicable data protection laws. These rights may include the right to access, correct, delete, or restrict the use of your personal data. To exercise any of these rights, please contact us.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Contact Us</h2>
          <p className={styles.paragraph}>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p className={styles.paragraph}>
            <strong>Email:</strong> info@mccollinsmedia.com<br />
            <strong>Address:</strong> McCollins Media, Dubai, UAE
          </p>
        </section>
      </main>
    </div>
  );
}
