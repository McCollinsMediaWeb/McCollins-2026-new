import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import TrustedBrandsSection from "./components/TrustedBrandsSection";
import GifSection from "./components/GifSection";
import WebsitesWorkSimplySection from "./components/WebsitesWorkSimplySection";
import TechnologiesSection from "./components/TechnologiesSection";
import PortfolioGallerySection from "./components/PortfolioGallerySection";

export const metadata = {
  title: "Content Production - McCollins Media",
  description: "Scalable, secure, and user-centric website and app design and development services.",
};

export default function ContentProductionPage() {
  return (
    <main className={styles.container}>
      <HeroSection />
      <TrustedBrandsSection />
      <GifSection />
      <WebsitesWorkSimplySection />
      <TechnologiesSection />
      <PortfolioGallerySection />
    </main>
  );
}
