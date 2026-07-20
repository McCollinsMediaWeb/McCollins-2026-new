import React from "react";
import styles from "@/styles/PolicyPages.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | McCollins Media",
  description: "Learn about the cookies and tracking technologies used on McCollins Media.",
};

export default function CookiesPolicy() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Cookies Policy</h1>
        <div className={styles.lastUpdated}>Last Updated: July 2026</div>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. What Are Cookies?</h2>
          <p className={styles.paragraph}>
            Cookies are small text files placed on your device (computer, tablet, or mobile) by a website you visit. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. How We Use Cookies</h2>
          <p className={styles.paragraph}>
            We use cookies to improve your browsing experience on our website, analyze website traffic, and understand where our visitors are coming from. The types of cookies we use include:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Essential Cookies:</strong> These cookies are necessary for the basic operation of our website, enabling core features such as security, network management, and accessibility.</li>
            <li className={styles.listItem}><strong>Performance and Analytics Cookies:</strong> These cookies collect aggregate data about how visitors interact with our site, helping us monitor and optimize website speed and performance. We use tools like Google Analytics to compile this data.</li>
            <li className={styles.listItem}><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make (such as language preferences or form inputs) to provide a more personalized experience.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Managing Cookies</h2>
          <p className={styles.paragraph}>
            Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies or alert you when a cookie is being sent. If you choose to disable cookies, please note that some parts of our website may not function properly or be fully accessible.
          </p>
          <p className={styles.paragraph}>
            To learn more about how to manage and delete cookies, visit your browser&apos;s help documentation or visit reference sites like <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>allaboutcookies.org</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Changes to This Cookies Policy</h2>
          <p className={styles.paragraph}>
            We may update our Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to periodically review this page to stay informed about our use of cookies.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Contact Us</h2>
          <p className={styles.paragraph}>
            If you have questions about our use of cookies, please contact us at:
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
