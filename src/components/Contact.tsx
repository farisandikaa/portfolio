"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const inputVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setFeedback(null);

    emailjs
      .sendForm(
        "service_lk1gmcl",  // ganti dengan Service ID dari EmailJS
        "7g2f7ao", // ganti dengan Template ID
        formRef.current,
        "b5lfKAi4Kw3OMY18R"   // ganti dengan Public Key EmailJS
      )
      .then(
        () => {
          setFeedback("Message sent successfully!");
          formRef.current?.reset();
        },
        () => {
          setFeedback("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  const socialLinks = [
    { icon: <FaEnvelope />, href: "mailto:farisandika2111@gmail.com" },
    { icon: <FaWhatsapp />, href: "https://wa.link/vi4jxg" },
    { icon: <FaGithub />, href: "https://github.com/farisandikaa" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/farisandikaputra" },
  ];

  return (
    <motion.div
      className="max-w-3xl mx-auto py-20 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
      >
        Interested in working together? Let's connect!
      </motion.p>

      <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
        {["Your Name", "Your Email", "Message"].map((label, i) => (
          <motion.div
            className="flex flex-col text-left"
            key={i}
            custom={i}
            variants={inputVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <label className="mb-1 font-medium text-gray-700">{label}</label>
            {label !== "Message" ? (
              <input
                type={label === "Your Email" ? "email" : "text"}
                name={label.toLowerCase().replace(" ", "_")}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            ) : (
              <textarea
                name="message"
                placeholder="Your message"
                className="border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            )}
          </motion.div>
        ))}

        <motion.button
          type="submit"
          className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition transform hover:scale-105 disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {feedback && (
          <p className={`mt-2 ${feedback.includes("success") ? "text-green-600" : "text-red-600"}`}>
            {feedback}
          </p>
        )}
      </form>

      <motion.div
        className="mt-10 flex justify-center gap-6 text-gray-600 text-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
        viewport={{ once: true }}
      >
        {socialLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
            whileHover={{ scale: 1.2 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
