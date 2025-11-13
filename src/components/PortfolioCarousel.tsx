"use client";
import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: "HYP & Partners Attorney and Legal Consultant",
    github: "https://hyplawoffice.com",
    image: "/images/thumbnailhyp.png",
    tech: ["Laravel", "JavaScript", "TailwindCSS"],
  },
  {
    title: "Virtual Tour Web-Based",
    github: "https://faris-virtualtour.vercel.app/",
    image: "/images/thumbnailvr.png",
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
  {
    title: "Bank DP Taspen Bogor",
    github: "https://github.com/farisandikaa/bank",
    image: "/images/tunashonda.png",
    tech: ["Laravel", "TailwindCSS", "JavaScript"],
  },
];

export default function PortfolioCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 360 + 32; 
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-blue-700">
        Portfolio
      </h2>
      <div className="relative">
        {/* Left Button */}
        <button
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-blue-200 rounded-full p-2 shadow hover:bg-blue-50 transition hidden md:block"
        >
          <FaChevronLeft className="text-2xl text-blue-600" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50"
        >
          <div
            className="flex gap-8 min-w-[900px] md:min-w-[1200px] lg:min-w-[1500px]"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-90 bg-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Thumbnail */}
                <div className="w-full aspect-video relative">
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
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {project.title}
                  </h3>
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

        {/* Right Button */}
        <button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-blue-200 rounded-full p-2 shadow hover:bg-blue-50 transition hidden md:block"
        >
          <FaChevronRight className="text-2xl text-blue-600" />
        </button>
      </div>
      <div className="text-center mt-4 text-sm text-gray-400">
        Swipe, scroll, or use arrows to explore projects
      </div>
    </div>
  );
}
