"use client";

import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function StrategySection() {
  return (
    <section className={styles.strategySection}>
      <h2 className={styles.strategyTitle}>NUMBERS THAT PROVE THE STRATEGY.</h2>
      
      <div className={styles.strategyImgContainer}>
        <Image 
          src="/performance-marketing-page/8ae46e0d5de823047bfa53bd16fb44e943e3421a.webp"
          alt="Strategy performance showcase kitchen"
          fill
          className={styles.strategyImg}
        />
      </div>
    </section>
  );
}
