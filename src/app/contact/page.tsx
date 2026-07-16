import ContactPageClient from "./page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dubai Based Web Design Company | Digital Marketing Agency Dubai | Contact - Mccollins Media",
  description: "Need a web development team to start your website development or are you looking for a digital marketing agency in Dubai to build your brand? Yes, Mccollins media will help you to kick start your project with all digital solutions in cost-effective.Contact us now to know more-info@mccollinsmedia.com",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
