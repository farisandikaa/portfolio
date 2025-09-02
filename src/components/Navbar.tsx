"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "farisandika.vercel.app" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -55% 0px", threshold: 0.15 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/60 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="#hero" className="text-2xl font-bold text-blue-600">
            Faris Andika
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={
                      "py-2 px-3 rounded-md transition-colors " +
                      (isActive
                        ? "text-blue-600 font-semibold bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50")
                    }
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((s) => !s)}
            className="md:hidden p-2 rounded-md bg-white/30 hover:bg-white/40"
          >
            {isOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transform transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
      >
        <div className="px-4 pb-6 pt-2 bg-white/95">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={
                      "block py-3 px-4 rounded-md transition-colors " +
                      (isActive
                        ? "text-blue-600 font-semibold bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50")
                    }
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
