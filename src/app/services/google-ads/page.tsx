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
  title: "Digital Marketing Company in UAE | Performance Marketing Agency Dubai - Mccollins Media",
  description: "Digital Marketing Company in UAE | Performance Marketing Agency Dubai - Mccollins Media",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/services/google-ads",
  },
  robots: {
    index: true,
    follow: true,
  },
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
