import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "SASE Spring Semester First GBM: Scavenger Hunt",
  description:
    "SASE - spring 2026 scavenger hunt event. Why are you looking here. ",
};

export default function PageOneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo2.png" type="image/png" />
      </head>
      <body className={` ${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
