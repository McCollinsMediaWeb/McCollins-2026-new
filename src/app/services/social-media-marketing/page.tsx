import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import WhatWeOfferSection from "./components/WhatWeOfferSection";
import GifSection from "./components/GifSection";
import SocialMediaRouteSection from "./components/SocialMediaRouteSection";
import SocialMetricsMapSection from "./components/SocialMetricsMapSection";
import PortfolioGallerySection from "./components/PortfolioGallerySection";

export const metadata = {
  title: "Social Media Marketing - McCollins Media",
  description: "Scalable, secure, and user-centric website and app design and development services.",
};

export default function SocialMediaMarketingPage() {
  return (
    <main className={styles.container}>
      <HeroSection />
      <WhatWeOfferSection />
      <GifSection />
      <SocialMediaRouteSection />
      <SocialMetricsMapSection />
      <PortfolioGallerySection />
    </main>
  );
}
