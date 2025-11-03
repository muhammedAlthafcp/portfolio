import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between py-20 md:py-32 px-6 md:px-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Glowing Background Orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-blue-600/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-2xl animate-spin-slow"></div>

      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Muhammed Althaf
          </span>
        </h1>

        <h2 className="text-lg md:text-2xl text-slate-300 mt-4 min-h-[40px]">
          <TypeAnimation
            sequence={[
              "Freelance Full-Stack Developer ⚡",
              1500,
              "MERN Stack Specialist 💻",
              1500,
              "UI/UX Designer 🎨",
              1500,
              "Creative Problem Solver 🚀",
              1500,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </h2>

        <p className="mt-6 text-slate-400 max-w-md mx-auto md:mx-0 leading-relaxed">
          I’m a passionate freelance developer who loves turning ideas into
          scalable digital products. I build modern, fast, and elegant web
          experiences with a focus on design, usability, and performance.
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <motion.a
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-blue-600/30 hover:shadow-indigo-600/40 transition"
          >
            🚀 View My Work
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 rounded-full border border-slate-500 text-slate-200 hover:bg-slate-800/40 transition"
          >
            💬 Hire Me
          </motion.a>
        </div>
      </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-64 h-64 md:w-96 md:h-96 mb-10 md:mb-0 flex items-center justify-center"
      >
        {/* Smooth Gradient Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-400 to-purple-500 blur-2xl opacity-30 animate-pulse"></div>

        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[3px] shadow-[0_0_30px_rgba(99,102,241,0.4)]">
          {/* Inner Container */}
          <div className="relative w-full h-full rounded-full bg-slate-900 overflow-hidden backdrop-blur-xl">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
              src="/WhatsApp Image 2024-09-13 at 5.23.38 PM.jpeg"
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
