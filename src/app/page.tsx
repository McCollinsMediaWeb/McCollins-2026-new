import HomeClient from "./page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Dubai | McCollins Media",
  description: "McCollins Media, best digital marketing agency in Dubai, UAE. Company with Innovative strategies, expert solutions, and measurable results. Contact Now!",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <HomeClient />;
}
