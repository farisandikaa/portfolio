"use client";
import Image from "next/image";
import { FaReact, FaNodeJs, FaCss3Alt, FaGithub, FaAward, FaGraduationCap, FaMedal, FaRegSmile } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase, SiSupabase, SiJavascript } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <main className="min-h-screen bg-white py-16 px-4 md:px-0">
      <motion.section
        className="max-w-3xl mx-auto flex flex-col gap-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Hero */}
  <motion.div className="flex flex-col items-center gap-4 mb-8" variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <motion.div variants={fadeIn} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <Image
              src="/images/github.png"
              alt="Faris Andika"
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-200 shadow-lg"
            />
          </motion.div>
          <motion.h1 className="text-4xl md:text-5xl font-extrabold text-blue-700" variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
            Faris Andika Putra
          </motion.h1>
          <motion.p className="text-lg text-gray-600 font-medium" variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
            Web Developer & Tech Enthusiast
          </motion.p>
          <motion.span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mt-2" variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
            `&#34;`Building impactful digital experiences`&#34;`
          </motion.span>
        </motion.div>

        {/* Bio */}
        <motion.div className="mb-10 w-full flex justify-center" variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl text-center">
            Hello! I`&#39`m <span className="font-semibold text-blue-600">Faris</span>, a passionate web developer with a strong focus on modern, scalable, and user-friendly web applications. I love exploring new technologies, contributing to open source, and collaborating on creative projects. My goal is to deliver solutions that make a real difference for users and businesses.
          </p>
        </motion.div>

    {/* Skills */}
    <motion.div className="mb-12 w-full flex flex-col items-center" variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center justify-center gap-2"><FaReact /> Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Animate each skill icon */}
            {[{
              icon: <FaReact className="text-3xl text-blue-500" />, label: "React"
            }, {
              icon: <SiNextdotjs className="text-3xl text-gray-800" />, label: "Next.js"
            }, {
              icon: <SiTypescript className="text-3xl text-blue-700" />, label: "TypeScript"
            }, {
              icon: <SiJavascript className="text-3xl text-yellow-400" />, label: "JavaScript"
            }, {
              icon: <SiTailwindcss className="text-3xl text-blue-400" />, label: "Tailwind CSS"
            }, {
              icon: <FaCss3Alt className="text-3xl text-blue-600" />, label: "CSS3"
            }, {
              icon: <FaNodeJs className="text-3xl text-green-600" />, label: "Node.js"
            }, {
              icon: <SiSupabase className="text-3xl text-green-700" />, label: "Supabase"
            }, {
              icon: <SiFirebase className="text-3xl text-orange-500" />, label: "Firebase"
            }, {
              icon: <FaGithub className="text-3xl text-gray-700" />, label: "GitHub"
            }].map((skill, i) => (
              <motion.div
                key={skill.label}
                className="flex flex-col items-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.15, rotate: 2 }}
                transition={{ duration: 0.7, ease: 'easeOut', type: "spring", stiffness: 300 }}
              >
                {skill.icon}
                <span className="text-sm mt-1">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

    {/* Experience Timeline */}
    <motion.div className="mb-12 w-full flex flex-col items-center" variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2"><FaAward /> Experience</h2>
          <ol className="relative border-l border-blue-200 max-w-2xl mx-auto text-left">
            {[
              {
                icon: <FaAward className="text-white" />,
                title: "Freelance Web Developer",
                date: "2023 - Present",
                desc: "Building custom websites and web apps for various clients, focusing on performance and user experience.",
                color: "bg-blue-600"
              },
              {
                icon: <FaAward className="text-white" />,
                title: "Intern at PT. Manggis Indonesia",
                date: "2023",
                desc: "Worked on real-world projects, learning agile development and teamwork in a fast-paced environment.",
                color: "bg-blue-300"
              },
              {
                icon: <FaAward className="text-white" />,
                title: "Fullstack Website Developer at HYP and Partners",
                date: "2024 - Present",
                desc: "Responsible for the complete development of the company’s official website, from initial planning to deployment and maintenance.",
                color: "bg-blue-300"
              },
            ].map((exp, i) => (
              <motion.li
                key={exp.title}
                className="mb-8 ml-6"
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(59,130,246,0.12)" }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <span className={`absolute -left-3 flex items-center justify-center w-6 h-6 ${exp.color} rounded-full ring-8 ring-white`}>{exp.icon}</span>
                <h3 className="font-semibold text-lg text-blue-700">{exp.title}</h3>
                <span className="block text-sm text-gray-500 mb-1">{exp.date}</span>
                <p className="text-gray-700">{exp.desc}</p>
              </motion.li>
            ))}
          </ol>
        </motion.div>

    {/* Education */}
    <motion.div className="mb-12 w-full flex flex-col items-center" variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2"><FaGraduationCap /> Education</h2>
          <div className="text-gray-700">
            <p className="font-semibold">Bachelor of Computer Science</p>
            <p className="text-sm">Pakuan University, 2018 - 2025</p>
          </div>
        </motion.div>

  {/* Certificates & Awards */}
  <motion.div className="mb-12 w-full flex flex-col items-center" variants={fadeInUp}>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2"><FaMedal /> Certificates & Awards</h2>
          <ul className="list-disc list-inside text-gray-700 max-w-xl mx-auto">
            <motion.li variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>Certified FullStack Developer – Freecodecamp 2025</motion.li>
            <motion.li variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>TOEFL – Unit Pelayanan Bahasa FISIB Universitas Pakuan 2024: 457</motion.li>
          </ul>
        </motion.div>

    {/* Interests & Fun Facts */}
    <motion.div className="mb-12 w-full flex flex-col items-center" variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2"><FaRegSmile /> Interests & Fun Facts</h2>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-700 text-base">
            {["UI/UX Design", "Open Source", "Traveling", "Photography", "Music", "Learning new tech"].map((interest) => (
              <motion.li
                key={interest}
                className="bg-blue-50 px-4 py-2 rounded-full"
                variants={fadeInUp}
                whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                {interest}
              </motion.li>
            ))}
          </ul>
        </motion.div>

  {/* Call to Action */}
  <motion.div className="mt-10 text-gray-600 text-base flex flex-col items-center gap-4 w-full" variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <motion.p variants={fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
            Interested in working together or want to know more? Download my Resume or get in touch!
          </motion.p>
          <div className="flex gap-4">
            <motion.a
              href="https://drive.google.com/file/d/1NPyHL7h9fhCwPdvjWdwYLtq20cx62VIS/view?usp=sharing"
              download
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
              whileHover={{ scale: 1.07, backgroundColor: "#2563eb" }}
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              Download Resume
            </motion.a>
            <Link href="/contact">
              <motion.button
                className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
                whileHover={{ scale: 1.07, backgroundColor: "#eff6ff" }}
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
