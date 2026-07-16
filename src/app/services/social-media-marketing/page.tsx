import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import WhatWeOfferSection from "./components/WhatWeOfferSection";
import SocialMediaRouteSection from "./components/SocialMediaRouteSection";
import SocialMetricsMapSection from "./components/SocialMetricsMapSection";
import TwoColumnGallerySection from "./components/TwoColumnGallerySection";
import PartnersSection from "./components/PartnersSection";
import GifSection from "./components/GifSection";
import MasonrySection from "./components/MasonrySection";
import AboutServicesSection from "./components/AboutServicesSection";

export const metadata = {
  title: "Social Media Marketing - McCollins Media",
  description: "Scalable, secure, and user-centric website and app design and development services.",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/services/social-media-marketing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SocialMediaMarketingPage() {
  return (
    <main className={styles.container}>
      <HeroSection />
      <WhatWeOfferSection />
      {/* <GifSection /> */}
      <SocialMediaRouteSection />
      <MasonrySection />
      <AboutServicesSection />

      <SocialMetricsMapSection />
      {/* <TwoColumnGallerySection /> */}
      {/* <PartnersSection /> */}
    </main>
  );
}
