import PioneerCaseStudyClient from "./page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services In Dubai | Pioneer Electronics UAE",
  description: "Boost your online presence with McCollins top-notch Proven Marketing Strategies See how we helped Pioneer Electronics UAE dominate search rankings.",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/case-study/pioneer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MercedesBenzCaseStudy() {
  return <PioneerCaseStudyClient />;
}
