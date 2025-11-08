"use client";
import { FaLaptopCode, FaPaintBrush, FaSearch, FaMobileAlt, FaCloud, FaRocket, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-blue-700">My Services</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        I offer a wide range of services to help you build, launch, and grow your digital presence. From design to deployment, I ensure every project is crafted with care and expertise.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(59,130,246,0.12)" }}
            whileTap={{ scale: 0.97 }}
          >
            {service.icon}
            <h3 className="font-semibold text-xl mb-2 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 text-base">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
  