import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}
