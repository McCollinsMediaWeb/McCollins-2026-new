import type { Metadata } from "next";
import CareersPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Careers | McCollins Media",
  description: "Join the McCollins Media team. Submit your details and CV to apply.",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/careers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
