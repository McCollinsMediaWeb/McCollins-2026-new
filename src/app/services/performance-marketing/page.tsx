import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import SolutionsSection from "./components/SolutionsSection";
import TrustedBrandsSection from "./components/TrustedBrandsSection";
import GifSection from "./components/GifSection";
import WebsitesWorkSimplySection from "./components/WebsitesWorkSimplySection";
import TechnologiesSection from "./components/TechnologiesSection";
import PortfolioGallerySection from "./components/PortfolioGallerySection";
import AboutPerformanceSection from "./components/AboutPerformanceSection";
import StrategySection from "./components/StrategySection";
import PerformanceStatsSection from "./components/PerformanceStatsSection";

export const metadata = {
  title: "Performance Marketing - McCollins Media",
  description: "Scalable, secure, and user-centric website and app design and development services.",
};

export default function PerformanceMarketingPage() {
  return (
    <main className={styles.container}>
      <HeroSection />
      <SolutionsSection />
      <AboutPerformanceSection />
      <TrustedBrandsSection />
      <StrategySection />
      <PerformanceStatsSection />
    </main>
  );
}

