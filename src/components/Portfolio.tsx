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
    title: "E-commerce App - Riva Cake",
    github: "https://github.com/farisandikaa/rivacake",
    image: "/images/rivacake.png",
    tech: ["Laravel", "MySQL", "JavaScript"],
  },
  {
    title: "E-commerce App - Tunas Honda",
    github: "https://github.com/username/tunashonda",
    image: "/images/tunashonda.png",
    tech: ["CodeIgniter", "Css", "JavaScript"],
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
