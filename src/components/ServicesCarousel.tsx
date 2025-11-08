"use client";
import { FaLaptopCode, FaPaintBrush, FaSearch, FaMobileAlt, FaCloud, FaRocket, FaDatabase, FaShieldAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-600 mb-3" />,
    title: "Website Development",
    desc: "Modern, responsive, and high-performance websites tailored to your business needs.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-pink-500 mb-3" />,
    title: "UI/UX Design",
    desc: "Beautiful, user-friendly interfaces for a delightful user experience.",
  },
  {
    icon: <FaSearch className="text-4xl text-green-500 mb-3" />,
    title: "SEO Optimization",
    desc: "Boost your website's visibility and reach more customers on Google.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-purple-500 mb-3" />,
    title: "Mobile Friendly",
    desc: "Fully responsive design for seamless experience on all devices.",
  },
  {
    icon: <FaCloud className="text-4xl text-blue-400 mb-3" />,
    title: "Cloud Integration",
    desc: "Integrate with cloud services for scalability and reliability.",
  },
  {
    icon: <FaRocket className="text-4xl text-orange-500 mb-3" />,
    title: "Performance Optimization",
    desc: "Lightning-fast load times and smooth interactions for your users.",
  },
  {
    icon: <FaDatabase className="text-4xl text-yellow-500 mb-3" />,
    title: "Database & API",
    desc: "Robust backend, API, and database solutions for your application.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-gray-700 mb-3" />,
    title: "Security Best Practices",
    desc: "Secure coding, HTTPS, and data protection for your peace of mind.",
  },
];

export default function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 320 + 32; // card width + gap
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-blue-700">My Services</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        I offer a wide range of services to help you build, launch, and grow your digital presence. From design to deployment, I ensure every project is crafted with care and expertise.
      </p>
      <div className="relative">
        <button
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-blue-200 rounded-full p-2 shadow hover:bg-blue-50 transition hidden md:block"
        >
          <FaChevronLeft className="text-2xl text-blue-600" />
        </button>
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50"
        >
          <div className="flex gap-8 min-w-[900px] md:min-w-[1100px] lg:min-w-[1400px]" style={{scrollSnapType:'x mandatory'}}>
            {services.map((service, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center hover:shadow-2xl transition"
                style={{scrollSnapAlign:'start'}}
              >
                {service.icon}
                <h3 className="font-semibold text-xl mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-blue-200 rounded-full p-2 shadow hover:bg-blue-50 transition hidden md:block"
        >
          <FaChevronRight className="text-2xl text-blue-600" />
        </button>
      </div>
      <div className="text-center mt-4 text-sm text-gray-400">Swipe, scroll, or use arrows to see more services</div>
    </div>
  );
}
