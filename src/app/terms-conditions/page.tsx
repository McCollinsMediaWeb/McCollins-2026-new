import React from "react";
import styles from "@/styles/PolicyPages.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | McCollins Media",
  description: "Read the terms and conditions governing the use of McCollins Media website and services.",
};

export default function TermsConditions() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Terms &amp; Conditions</h1>
        <div className={styles.lastUpdated}>Last Updated: July 2026</div>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Agreement to Terms</h2>
          <p className={styles.paragraph}>
            By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, you are prohibited from using the site and must discontinue use immediately.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Intellectual Property Rights</h2>
          <p className={styles.paragraph}>
            Unless otherwise indicated, the website, its source code, databases, design layout, text, graphics, and photographs are our proprietary property and are protected by copyright, trademark, and other intellectual property laws. You may not copy, reproduce, aggregate, republish, upload, post, or distribute any part of the site without our express prior written permission.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. User Representations</h2>
          <p className={styles.paragraph}>
            By using the website, you represent and warrant that:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>All registration/submission information you submit will be true, accurate, current, and complete.</li>
            <li className={styles.listItem}>You will maintain the accuracy of such information and promptly update it as necessary.</li>
            <li className={styles.listItem}>You have the legal capacity and agree to comply with these Terms and Conditions.</li>
            <li className={styles.listItem}>You will not use the website for any illegal or unauthorized purpose.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Prohibited Activities</h2>
          <p className={styles.paragraph}>
            You may not access or use the website for any purpose other than that for which we make the website available. Prohibited activities include, but are not limited to:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Systematically retrieving data or other content from the site to create or compile a database or directory without written permission from us.</li>
            <li className={styles.listItem}>Attempting to bypass any measures of the website designed to prevent or restrict access.</li>
            <li className={styles.listItem}>Using the website in a manner inconsistent with any applicable laws or regulations.</li>
            <li className={styles.listItem}>Interfering with, disrupting, or creating an undue burden on the website or the networks connected to the site.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Limitation of Liability</h2>
          <p className={styles.paragraph}>
            In no event will McCollins Media, our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website or our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Governing Law</h2>
          <p className={styles.paragraph}>
            These Terms and Conditions and your use of the website are governed by and construed in accordance with the laws of the United Arab Emirates (UAE) applicable to agreements made and to be entirely performed within the UAE.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Modifications and Interruptions</h2>
          <p className={styles.paragraph}>
            We reserve the right to change, modify, or remove the contents of the website at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of our services without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the site or services.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Contact Us</h2>
          <p className={styles.paragraph}>
            In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at:
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
