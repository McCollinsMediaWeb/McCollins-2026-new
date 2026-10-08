import React from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";

import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import WhatsIncludedSection from "./components/WhatsIncludedSection";
import SocialMetricsMapSection from "./components/SocialMetricsMapSection";
import SelectedWorkSection from "./components/SelectedWorkSection";
import FaqSection from "./components/FaqSection";
export const metadata: Metadata = {
  title: "Social Media Agency Dubai | McCollins Media",
  description:
    "McCollins Media is a social media agency in Dubai helping brands grow through strategic social media marketing, content creation, paid campaigns, and engaging digital experiences across Dubai, Abu Dhabi, and the GCC.",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/social-media-agency-dubai",
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
      <SocialMetricsMapSection />
      <SelectedWorkSection />
      <FaqSection />
    </main>
  );
}
