import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import dynamic from "next/dynamic";

// WAButton di-load secara dinamis hanya di client
const WAButton = dynamic(() => import("@/components/WAButton"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Faris - Web Developer",
  description: "Web Developer, website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VXP446JWMR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VXP446JWMR');
          `}
        </Script>
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* WA Button muncul di client side */}
        <WAButton />
      </body>
    </html>
  );
}
