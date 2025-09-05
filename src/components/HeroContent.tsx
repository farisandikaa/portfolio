"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen text-center text-gray-800 
      bg-gradient-to-b from-pink-100 via-blue-50 to-white"
    >
      <div className="max-w-3xl px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
        >
          Hi, I’m <span className="text-blue-600">Faris</span> 👋
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-600"
        >
          A passionate <span className="font-semibold">Web Developer</span> who
          loves building modern, fast, and beautiful websites.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="#portfolio"
            aria-label="Lihat portfolio Faris"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            aria-label="Hubungi Faris melalui form kontak"
            className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
