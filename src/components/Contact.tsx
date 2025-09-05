"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const inputVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setFeedback(null);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    // Sesuaikan nama field agar cocok dengan API
    const payload = {
      name: data.name as string,
      email: data.email as string,
      message: data.message as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.success) {
        setFeedback("Message sent successfully!");
        formRef.current.reset();
      } else {
        setFeedback("Failed to send message. Please try again.");
      }
    } catch (err: unknown) {
      console.error(err);
      // Karena 'err' bertipe unknown, pakai pengecekan
      const message =
        err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setFeedback(message);
    } finally {
      setLoading(false);
    }
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
        {"Interested in working together? Let's connect!"}
      </motion.p>

      <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
        <motion.div
          className="flex flex-col text-left"
          custom={0}
          variants={inputVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="mb-1 font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            name="name"
            aria-label="Your Name"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </motion.div>

        <motion.div
          className="flex flex-col text-left"
          custom={1}
          variants={inputVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="mb-1 font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            name="email"
            aria-label="Your Email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </motion.div>

        <motion.div
          className="flex flex-col text-left"
          custom={2}
          variants={inputVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="mb-1 font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            aria-label="Message"
            placeholder="Your message"
            className="border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </motion.div>

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
          <p
            className={`mt-2 ${
              feedback.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
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
