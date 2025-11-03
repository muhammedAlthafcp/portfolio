import React from "react";
import Navbar from "../components/navbar";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Server,
  Sparkles,
  Database,
  Cpu,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            About Me
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            Hi! I'm{" "}
            <span className="text-blue-400 font-semibold">Muhammed Althaf</span>, a{" "}
            <span className="text-indigo-400 font-semibold">Full-Stack Developer</span>{" "}
            with <strong>3+ years</strong> of experience crafting fast, scalable, and
            visually rich web experiences using the{" "}
            <span className="text-blue-400 font-semibold">MERN stack</span>.
          </p>
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(59,130,246,0.3), transparent 70%)",
          }}
        />
      </section>

      {/* Skills Section */}
      <section className="px-6 md:px-20 py-20 bg-slate-900/40 backdrop-blur-sm border-y border-slate-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14"
        >
          My <span className="text-blue-400">Skills</span> & Tools ⚙️
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "TailwindCSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "Git",
            "Framer Motion",
            "REST API",
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(37,99,235,0.1)" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 rounded-2xl py-4 text-center text-slate-300 font-medium shadow-md backdrop-blur-sm transition-all"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 md:px-20 py-24 text-center max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10"
        >
          My <span className="text-blue-400">Experience</span> 🚀
        </motion.h2>

        <p className="text-slate-400 leading-relaxed mb-12 text-lg">
          I’ve delivered full-stack solutions for startups and small businesses —
          transforming ideas into digital products. My process emphasizes{" "}
          <span className="text-indigo-400 font-semibold">clean architecture</span>,{" "}
          <span className="text-blue-400 font-semibold">reusable components</span>, and{" "}
          <span className="text-purple-400 font-semibold">pixel-perfect design</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: <Code2 size={28} />, label: "Frontend" },
            { icon: <Server size={28} />, label: "Backend" },
            { icon: <Database size={28} />, label: "Database" },
            { icon: <Palette size={28} />, label: "UI/UX Design" },
            { icon: <Sparkles size={28} />, label: "Animations" },
            { icon: <Cpu size={28} />, label: "Optimization" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="flex flex-col items-center bg-gradient-to-br from-slate-800/60 to-slate-900/40 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/40 w-40 shadow-lg transition"
            >
              <div className="text-blue-400 mb-3">{item.icon}</div>
              <p className="text-sm text-slate-300 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Developer Journey Timeline */}
      <section className="px-6 md:px-20 py-20 bg-slate-900/40 border-y border-slate-800">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-blue-400">Journey</span> 🛤️
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-700 transform -translate-x-1/2"></div>
          {[
            { year: "2021", text: "Started web development journey — HTML, CSS, JS" },
            { year: "2022", text: "Built freelance MERN stack projects" },
            { year: "2023", text: "Worked with startups to create full-stack apps" },
            { year: "2024", text: "Improved UI/UX design & performance optimization" },
            { year: "2025", text: "Expanding into AI-integrated web experiences" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative mb-12 flex ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl w-[85%] shadow-lg">
                <p className="text-blue-400 font-semibold mb-2">{item.year}</p>
                <p className="text-slate-300">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Fun Facts Section */}
      <section className="px-6 md:px-20 py-20 bg-slate-900/40 border-y border-slate-800 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          A Little More <span className="text-blue-400">About Me</span> 😄
        </motion.h2>

        <div className="max-w-3xl mx-auto text-slate-300 text-lg space-y-4">
          <p>☕ I love building intuitive interfaces and debugging over coffee.</p>
          <p>🎧 Favorite tools: VS Code, Figma, Postman, and GitHub.</p>
          <p>🚀 Always exploring AI-powered apps and creative web animations.</p>
          <p>💡 Motto: "Build fast, design with purpose, and code with empathy."</p>
        </div>
      </section>

      {/* Contact CTA (Resume Removed) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20"
      >
        <p className="text-slate-400 mb-6 text-lg">
          Ready to collaborate or discuss your idea?{" "}
          <span className="text-green-400 font-semibold">Let’s connect!</span>
        </p>

        <motion.a
          href="https://wa.me/918943031347?text=Hi%20Althaf,%20I%20want%20to%20grow%20my%20business%20online!"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white font-semibold shadow-lg hover:shadow-green-600/40 transition"
        >
          Message Me on WhatsApp
        </motion.a>
      </motion.div>

      {  <Contact /> }
      <footer className="py-8 text-center border-t border-slate-800 text-slate-500 text-sm">
        © {new Date().getFullYear()} Muhammed Althaf. All Rights Reserved.
      </footer>
    </div>
  );
}
