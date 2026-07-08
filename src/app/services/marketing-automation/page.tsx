import React from "react";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import PrecisionAutomationSection from "./components/PrecisionAutomationSection";
import PerformancePillarsSection from "./components/PerformancePillarsSection";

export const metadata = {
  title: "Marketing Automation - McCollins Media",
  description: "Accelerating digital growth and efficiency through intelligent, automated workflows that turn visitors into loyal customers.",
};

export default function MarketingAutomationPage() {
  return (
    <main className={styles.container}>
      <HeroSection />
      <PrecisionAutomationSection />
      <PerformancePillarsSection />
    </main>
  );
}
