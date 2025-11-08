import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { icon: <FaEnvelope />, href: "mailto:farisandika2111@gmail.com" },
  { icon: <FaWhatsapp />, href: "https://wa.link/vi4jxg" },
  { icon: <FaGithub />, href: "https://github.com/farisandikaa" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/farisandikaputra" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-3">
        <div className="flex justify-center gap-6 text-gray-400 text-2xl mb-2">
          {socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} <a href="https://linkedin.com/in/farisandikaputra" className="underline hover:text-blue-400">Faris Andika Putra</a>. All rights reserved.</p>
      </div>
    </footer>
  );
}
  