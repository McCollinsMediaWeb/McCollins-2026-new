import React from "react";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import OptimizationSection from "./components/OptimizationSection";
import AboutSEOSection from "./components/AboutSEOSection";
import SeoServicesSection from "./components/SeoServicesSection";
import SeoCaseStudiesSection from "./components/SeoCaseStudiesSection";
import SeoCallToActionSection from "./components/SeoCallToActionSection";

export const metadata = {
  title: "SEO Company UAE-Dubai | SEO Agency Dubai | SEO Services",
  description: "Mccollins offer the best range of SEO services in Dubai, Abu Dhabi and across the globe at affordable price. Our team works for your website traffic, ranking and visibility with the best strategies.Get the seo services in UAE by calling- +971 55 956 4135",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/services/seo",
  },
  robots: {
    index: true,
    follow: true,
  },
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
