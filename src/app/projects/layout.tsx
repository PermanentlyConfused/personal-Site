import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";

const montserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Arial", "sans-serif"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Art Nguyen | Projects",
    description: "Things I worked on",
};

export default function BookmarkLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/assets/logo2.png" type="image/png" />
            </head>
            <body
                className={` ${montserrat.variable} scroll-smooth antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
