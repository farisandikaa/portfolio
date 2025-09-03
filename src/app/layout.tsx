import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WAButton from "@/components/WAButton";

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
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WAButton/>
      </body>
    </html>
  );
}
