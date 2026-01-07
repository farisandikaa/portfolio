"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HYP & Partners",
    github: "https://hyplawoffice.com",
    image: "/images/thumbnailhyp.png",
    tech: ["Laravel", "JavaScript", "TailwindCSS"],
  },
  {
    title: "Scaltech Store",
    github: "https://scaltech-frondent.vercel.app/",
    image: "/images/thumbnailscaltech.jpeg",
    tech: ["Next.js", "Expres.js", "TailwindCSS"],
  },
  {
    title: "Riva Cake",
    github: "https://github.com/farisandikaa/rivacake",
    image: "/images/thumbnailrivacake.png",
    tech: ["Laravel", "MySQL", "JavaScript"],
  },
  {
    title: "Bank DP Taspen Bogor",
    github: "https://github.com/farisandikaa/bank",
    image: "/images/thumbnailtaspen.png",
    tech: ["Laravel", "TailwindCSS", "JavaScript"],
  },  
  {
    title: "Virtual Tour Web-Based",
    github: "https://faris-virtualtour.vercel.app/",
    image: "/images/thumbnailvr.png",
    tech: ["HTML", "JavaScript", "CSS"],
  },
  {
    title: "E-commerce App - Tunas Honda",
    github: "https://github.com/farisandikaa/tunashonda",
    image: "/images/tunashonda.png",
    tech: ["CodeIgniter", "CSS", "JavaScript"],
  },
];

export default function Portfolio() {
  const trackProjectClick = (projectTitle: string, projectUrl: string) => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag("event", "click_portfolio_project", {
        event_category: "portfolio",
        event_label: projectTitle,
        value: projectUrl,
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-blue-700">
        Portfolio
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        A collection of projects I&apos;ve worked on — showcasing my skills in
        web development, design, and performance optimization.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => trackProjectClick(project.title, project.github)}
          >
            <div className="w-full aspect-video relative">
              <Image
                src={project.image}
                alt={`${project.title} thumbnail`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-medium">View Project</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
