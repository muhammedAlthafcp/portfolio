import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Server, Sparkles, UserRound, Briefcase } from "lucide-react";
import { Link } from "react-router-dom"; // make sure you’re using react-router-dom

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-30"></div>
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
            <img
              src="/4.jpg"
              alt="About"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            I’m{" "}
            <span className="text-blue-400 font-semibold">Muhammed Althaf</span>, a
            passionate <strong>Freelance Full-Stack Developer</strong> with over{" "}
            <span className="text-indigo-400 font-semibold">3 years of experience</span> 
            in building high-performance web applications and digital solutions.
            I work with modern frameworks like{" "}
            <span className="text-indigo-400">React</span>,{" "}
            <span className="text-purple-400">Node.js</span>, and{" "}
            <span className="text-blue-400">MongoDB</span> to bring creative
            ideas to life.
          </p>

          <p className="text-slate-400 leading-relaxed mb-8">
            My goal is to craft clean, interactive, and user-friendly experiences
            that combine design precision with solid development. I love solving
            real-world problems through technology and turning visions into
            fully functional products.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            {/* More About Me Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-medium shadow-lg hover:shadow-indigo-500/40 transition"
              >
                <UserRound size={18} /> More About Me
              </Link>
            </motion.div>

            {/* Hire Me Button */}
            <motion.a
              href="https://wa.me/919876543210?text=Hi%20Althaf,%20I%20am%20interested%20in%20working%20with%20you!"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 border border-slate-600 rounded-full text-slate-300 hover:border-blue-500 hover:text-white transition"
            >
              <Briefcase size={18} /> Hire Me
            </motion.a>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Code2 size={28} />, label: "Frontend" },
              { icon: <Server size={28} />, label: "Backend" },
              { icon: <Palette size={28} />, label: "UI/UX Design" },
              { icon: <Sparkles size={28} />, label: "MERN Stack" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-slate-800/50 rounded-2xl p-4 border border-slate-700 hover:border-blue-500/50 transition"
              >
                <div className="text-blue-400 mb-2">{item.icon}</div>
                <p className="text-sm font-medium text-slate-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
