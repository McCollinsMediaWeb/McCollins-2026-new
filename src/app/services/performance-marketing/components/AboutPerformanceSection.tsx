"use client";

import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function AboutPerformanceSection() {
  return (
    <section className={styles.aboutSection}>
      <p className={styles.aboutText}>
        As a performance marketing agency in Dubai, McCollins Media helps brands plan, launch and optimize paid advertising campaigns across the region and beyond. From Meta Ads and Google Ads to TikTok, Snapchat, Baidu and Yandex, our campaigns are built to generate measurable results through data, creative testing, audience strategy and continuous optimization.
      </p>

      <div className={styles.logoRow}>
        <Image
          src="/performance-marketing-page/google-ads.webp"
          alt="Google Ads"
          width={45}
          height={45}
          className={styles.logoImg}
        />
        <Image
          src="/performance-marketing-page/tiktok.webp"
          alt="TikTok"
          width={45}
          height={45}
          className={styles.logoImg}
        />
        <Image
          src="/performance-marketing-page/snapchat.webp"
          alt="Snapchat"
          width={45}
          height={45}
          className={styles.logoImg}
        />
        <Image
          src="/performance-marketing-page/baidu.webp"
          alt="Baidu"
          width={130}
          height={45}
          className={styles.logoImg}
        />
        <Image
          src="/performance-marketing-page/meta.webp"
          alt="Meta"
          width={110}
          height={65}
          className={styles.logoImg}
        />
        <Image
          src="/performance-marketing-page/yandex.webp"
          alt="Yandex"
          width={105}
          height={55}
          className={styles.logoImg}
        />
      </div>
    </section>
  );
}
