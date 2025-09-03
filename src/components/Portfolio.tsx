"use client";

import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Virtual Tour Web-Based",
    github: "https://faris-virtualtour.vercel.app/",
    image: "/images/virtualtour.png",
    tech: ["HTML", "JavaScript", "CSS"],
  },
  {
    title: "E-commerce App - Riva Cake",
    github: "https://github.com/farisandikaa/rivacake",
    image: "/images/rivacake.png",
    tech: ["Laravel", "MySQL", "JavaScript"],
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
            onClick={() => trackProjectClick(project.title, project.github)} // 🔥 tracking klik project
          >
            {project.image && (
              <div className="w-full aspect-video relative group">
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white font-medium">View Project</span>
                </div>
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
