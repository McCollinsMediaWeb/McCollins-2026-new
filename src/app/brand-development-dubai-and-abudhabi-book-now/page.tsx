import React from "react";
import styles from "../brand-development-dubai-and-abudhabi/page.module.css";

import HeroSection from "../brand-development-dubai-and-abudhabi/components/HeroSection";
import BrandsSection from "../brand-development-dubai-and-abudhabi/components/BrandsSection";
import WhatIsIncludedSection from "../brand-development-dubai-and-abudhabi/components/WhatIsIncludedSection";
import FiveStepSection from "../brand-development-dubai-and-abudhabi/components/FiveStepSection";
import McCollinsEdgeSection from "../brand-development-dubai-and-abudhabi/components/McCollinsEdgeSection";
import SelectedWorkSection from "../brand-development-dubai-and-abudhabi/components/SelectedWorkSection";
import FaqSection from "../brand-development-dubai-and-abudhabi/components/FaqSection";
import PrecisionCtaSection from "../brand-development-dubai-and-abudhabi/components/PrecisionCtaSection";

const BOOKING_URL = "https://calendar.app.google/fDDFuq6of1BqucZf6";

export const metadata = {
  title: "Book a Brand Strategy Call in Dubai & Abu Dhabi | McCollins Media",
  description:
    "Book a brand strategy call with McCollins Media, an award-winning brand development and positioning agency serving Dubai, Abu Dhabi and the GCC.",
  alternates: {
    canonical:
      "https://www.mccollinsmedia.com/brand-development-dubai-and-abudhabi-book-now",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BrandDevelopmentBookNowPage() {
  return (
    <main className={styles.mainContainer}>
      <HeroSection bookingUrl={BOOKING_URL} />
      <BrandsSection />
      <WhatIsIncludedSection />
      <FiveStepSection />
      <McCollinsEdgeSection />
      <SelectedWorkSection />
      <FaqSection />
      <PrecisionCtaSection />
    </main>
  );
}
