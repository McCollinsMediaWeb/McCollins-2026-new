import React from "react";
import styles from "./page.module.css";

import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import GifPlaceholder from "./components/GifPlaceholder";
import ArabMarketsSection from "./components/ArabMarketsSection";
import MasonrySection from "./components/MasonrySection";

export const metadata = {
  title: "Brand Development | McCollins Media",
  description: "Refine and elevate your brand's presence. We build brands that matter.",
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
