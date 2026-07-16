import React from "react";
import styles from "./page.module.css";

import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import GifPlaceholder from "./components/GifPlaceholder";
import ArabMarketsSection from "./components/ArabMarketsSection";
import MasonrySection from "./components/MasonrySection";

export const metadata = {
  title: "Branding Company in Dubai | Branding Agency in Abu Dhabi - Mccollins Media",
  description: "Mccolllins media is a reputed award-winning branding & Design agency working in Dubai UAE. We help our clients to build brands more innovative and profitable. Contact now for making your branding solutions, logo design, brand guideline development etc in the best way.",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/services/brand-development",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BrandDevelopmentPage() {
  return (
    <main className={styles.container}>
      <HeroSection />
      <CardsSection />
      <GifPlaceholder />
      <ArabMarketsSection />
      <MasonrySection />
    </main>
  );
}
