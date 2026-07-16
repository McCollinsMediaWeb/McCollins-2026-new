import AboutPageClient from "./page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Digital Marketing Company In Dubai | Web Development Dubai - Mccollins Media",
  description: "One of the young passionate team working as a digital marketing agency in Dubai, UAE & Abu Dhabi. We create brands with proven expertise strategies over years. Need assistance for web development, Seo, Digital marketing and Branding promotions in Dubai, reach-Mccollins media",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
