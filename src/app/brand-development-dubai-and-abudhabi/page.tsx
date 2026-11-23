import React from "react";
import styles from "./page.module.css";

import HeroSection from "./components/HeroSection";
import BrandsSection from "./components/BrandsSection";
import WhatIsIncludedSection from "./components/WhatIsIncludedSection";
import FiveStepSection from "./components/FiveStepSection";
import McCollinsEdgeSection from "./components/McCollinsEdgeSection";
import CardsSection from "./components/CardsSection";
import GifPlaceholder from "./components/GifPlaceholder";
import SelectedWorkSection from "./components/SelectedWorkSection";
import MasonrySection from "./components/MasonrySection";
import FaqSection from "./components/FaqSection";
import PrecisionCtaSection from "./components/PrecisionCtaSection";

export const metadata = {
  title: "Brand Development Company in Dubai & Abu Dhabi | McCollins Media",
  description: "Award-winning brand development and positioning agency in Dubai & Abu Dhabi. Crafting iconic brand identities and bilingual visual systems across the GCC.",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/brand-development-dubai-and-abudhabi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BrandDevelopmentDubaiAbuDhabiPage() {
  return (
    <main className={styles.mainContainer}>
      <HeroSection />
      <BrandsSection />
      <WhatIsIncludedSection />
      <FiveStepSection />
      <McCollinsEdgeSection />
      <CardsSection />
      <GifPlaceholder />
      <SelectedWorkSection />
      <MasonrySection />
      <FaqSection />
      <PrecisionCtaSection />
    </main>
  );
}
