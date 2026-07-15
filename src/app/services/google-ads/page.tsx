import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import TrustedBrandsSection from "./components/TrustedBrandsSection";
import GooglePartnerSection from "./components/GooglePartnerSection";
import GoogleSolutionsSection from "./components/GoogleSolutionsSection";
import GoogleCaseStudiesSection from "./components/GoogleCaseStudiesSection";
import GoogleCallToActionSection from "./components/GoogleCallToActionSection";

export const metadata = {
  title: "Google Ads - McCollins Media",
  description: "Scalable, secure, and user-centric website and app design and development services.",
};

export default function GoogleAdsPage() {
  return (
    <main className={styles.container}>
      <HeroSection />
      <GooglePartnerSection />
      <GoogleSolutionsSection />
      <TrustedBrandsSection />
      <GoogleCaseStudiesSection />
      <GoogleCallToActionSection />
    </main>
  );
}
