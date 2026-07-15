"use client";

import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function GooglePartnerSection() {
  return (
    <section className={styles.partnerContainer}>
      <h2 className={styles.partnerTitle}>
        GOOGLE ADS MANAGEMENT: <br />
        BUILT FOR <span className={styles.partnerTitleItalic}>Conversions</span>
      </h2>

      <div className={styles.partnerLogoWrapper}>
        <Image
          src="/google-ads-page/google.webp"
          alt="Google Partner"
          width={250}
          height={250}
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
