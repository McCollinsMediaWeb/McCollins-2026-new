import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";

const delight = localFont({
  src: [
    {
      path: "../../public/fonts/Delight/Web-TT/Delight-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight/Web-TT/Delight-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight/Web-TT/Delight-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight/Web-TT/Delight-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight/Web-TT/Delight-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight/Web-TT/Delight-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight/Web-TT/Delight-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight/Web-TT/Delight-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight/Web-TT/Delight-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-delight",
});

const playfairDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "McCollins Media | Creative Digital Solutions",
  description: "Next-generation creative agency building immersive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${delight.variable} ${playfairDisplay.variable}`}>
      <body>
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
