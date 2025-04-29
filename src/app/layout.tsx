import type { Metadata } from "next";
import { Montserrat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Fart-Site",
  description: "please change thsi later lmao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${montserrat.variable} scroll-smooth antialiased`}>
        {children}
      </body>
    </html>
  );
}
