import React from "react";
import styles from "./page.module.css";

import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import TimelineSection from "./components/TimelineSection";
import WhatSetsUsApartSection from "./components/WhatSetsUsApartSection";

export const metadata = {
  title: "McCollins Media Production",
  description: "Video, social, and explainer campaigns engineered for maximum conversion and global scale.",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/services/content-production",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContentProductionPage() {
  return (
    <main className={styles.container}>
      <HeroSection />
      <CardsSection />
      <TimelineSection />
      <WhatSetsUsApartSection />
    </main>
  );
}

// data