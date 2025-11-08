"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 bg-gray-100 text-gray-800 px-6 md:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          I’m a passionate developer with experience in building scalable and modern web applications. 
          I love working with <span className="text-blue-500 font-semibold">Laravel, JavaScript, React, and Next.js</span>.  
          Exploring new technologies and creating impactful digital solutions is what excites me most.
        </p>
        <div className="mt-8">
          <Link href="/about">
            <motion.button
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              Read More
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
  