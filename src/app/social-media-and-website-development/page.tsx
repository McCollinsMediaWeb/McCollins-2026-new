import React from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";

import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import WhatsIncludedSection from "./components/WhatsIncludedSection";
import PillarsSection from "./components/PillarsSection";
import TechStackSection from "./components/TechStackSection";
import SelectedWorkSection from "./components/SelectedWorkSection";
import FaqSection from "./components/FaqSection";

export const metadata: Metadata = {
  title: "Enterprise Web & App Engineering | McCollins Media",
  description:
    "McCollins Media designs and develops high-performance digital platforms, enterprise web apps, headless e-commerce, and bespoke digital experiences across Dubai, Abu Dhabi, and the GCC.",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/social-media-and-website-development",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SocialMediaWebsiteDevelopmentPage() {
  return (
    <main className={styles.mainContainer}>
      <HeroSection />
      <MarqueeSection />
      <WhatsIncludedSection />
      <PillarsSection />
      <TechStackSection />
      <SelectedWorkSection />
      <FaqSection />
    </main>
  );
}
