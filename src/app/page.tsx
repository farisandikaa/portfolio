import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesCarousel from "@/components/ServicesCarousel";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
  <section id="services"><ServicesCarousel /></section>
      <section id="portfolio"><PortfolioCarousel /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}
