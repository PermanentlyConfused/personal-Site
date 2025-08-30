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
  title: "Art Nguyen | Homepage",
  description: "Home of Art's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo2.png" type="image/png" />
        <script
          src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js"
          crossOrigin="anonymous"
        ></script>

        <link
          rel="stylesheet"
          href="https://unpkg.com/@egjs/flicking/dist/flicking.css"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@egjs/flicking/dist/flicking-inline.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={` ${montserrat.variable} scroll-smooth antialiased`}>
        <noscript> You need to enable JavaScript to run this app. </noscript>
        {children}
      </body>
    </html>
  );
}
