"use client";

import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Github",
    github: "https://github.com/farisandikaa",
    image: "/images/github.png", 
    tech: [""],
  },
  {
    title: "E-commerce App",
    github: "https://github.com/farisandikaa/rivacake",
    image: "/images/portfolio2.png",
    tech: ["Laravel", "MySQL", "JavaScript"],
  },
  {
    title: "Project 3",
    github: "https://github.com/username/project3",
    image: "/images/portfolio3.png",
    tech: ["Next.js", "Framer Motion"],
  },
];

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-center mb-10">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-100 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {project.image && (
              <div className="w-full h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
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
          </a>
        ))}
      </div>
    </div>
  );
}
