import ServicesPageClient from "./page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services Dubai | Web Design And Development Company Dubai - Our Services",
  description: "Get to know our services which are provided for our clients in Dubai, Abudhabi and UAE with the best price and extreme quality services. Mccollins do innovative digital projects with immense experience in web design, digital marketing, Branding, SMM, content promotion, Social media so on. Need any help with your digital projects come let's start together?",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
