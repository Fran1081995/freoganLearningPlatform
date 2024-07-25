// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Crimson_Text } from "next/font/google";
import { Caudex } from "next/font/google";
import "./globals.css";

const crimson_text = Crimson_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson_text",
  weight: "400",
});
const caudex = Caudex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caudex",
  weight: "400",
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={crimson_text.variable + " " + caudex.variable}>
        {children}
      </body>
    </html>
  );
}
