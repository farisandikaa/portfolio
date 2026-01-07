"use client";
import { useEffect, useState } from "react";
import BootAnimation from "@/components/BootAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesCarousel from "@/components/ServicesCarousel";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import Contact from "@/components/Contact";

export default function Home() {
  const [showBootAnimation, setShowBootAnimation] = useState(true);

  const handleAnimationComplete = () => {
    setShowBootAnimation(false);
  };

  useEffect(() => {
  document.body.classList.add("glitch")
  setTimeout(() => {
    document.body.classList.remove("glitch")
  }, 400)
}, [])


  return (
    <>
      {showBootAnimation && (
        <BootAnimation onComplete={handleAnimationComplete} />
      )}

      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><ServicesCarousel /></section>
      <section id="portfolio"><PortfolioCarousel /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}