import React from "react";
import { motion } from "framer-motion";

export default function Together() {
  const phoneNumber = "919876543210"; // 👈 Replace with your real WhatsApp number (without + or spaces)
  const message = encodeURIComponent("Hi Althaf! I’d like to discuss a project with you.");

  return (
    <section
      id="together"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-center text-white overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto bg-slate-800/40 backdrop-blur-2xl border border-slate-700/50 rounded-3xl shadow-2xl p-10 md:p-16"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Let’s Build Something Amazing Together 🤝
        </h1>

        <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
          Have an idea or a project in mind? I’m a{" "}
          <span className="text-blue-400 font-medium">freelance full-stack developer</span>{" "}
          passionate about crafting seamless digital experiences.  
          Drop me a message — let’s turn your vision into reality!
        </p>

        <motion.a
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white font-semibold shadow-lg shadow-green-600/30 hover:shadow-emerald-600/40 transition"
        >
          💬 Contact Me on WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}
