import React from "react";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import OptimizationSection from "./components/OptimizationSection";
import AboutSEOSection from "./components/AboutSEOSection";
import SeoServicesSection from "./components/SeoServicesSection";
import SeoCaseStudiesSection from "./components/SeoCaseStudiesSection";
import SeoCallToActionSection from "./components/SeoCallToActionSection";

export const metadata = {
  title: "SEO - McCollins Media",
  description: "Scalable, secure, and user-centric website and app design and development services.",
};

export default function SEOPage() {
  return (
    <main className={styles.container}>
      <HeroSection />
      <OptimizationSection />
      <AboutSEOSection />
      <SeoServicesSection />
      <SeoCaseStudiesSection />
      <SeoCallToActionSection />
    </main>
  );
}
