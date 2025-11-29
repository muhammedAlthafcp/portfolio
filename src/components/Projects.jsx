import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Globe, ChevronLeft, ChevronRight } from "lucide-react";

/* ================= PROJECT DATA ================= */

const projects = [
  {
    title: "Laundry Service Web App",
    description:
      "A modern laundry booking and management web application built with React, TailwindCSS, and Firebase. It allows users to schedule pickups, track order status, and make secure online payments.",
    image: "/Screenshot 2025-11-02 215932.png",
    tech: ["React", "TailwindCSS", "Firebase", "HTML"],
    live: "https://www.bestbaylaundry.com/",
  },

  {
    title: "Express Laundry Business Website",
    description:
      "A professional business website designed for a local laundry service to showcase services, pricing, contact forms, and Google Maps integration. Built with React & TailwindCSS.",
    image: "/Screenshot 2025-11-29 201103.png",
    tech: ["React", "TailwindCSS", "Vite","Html"],
    live: "https://clean-plus-laundry.vercel.app/",
  },

  {
    title: "Real-Time Chat Application",
    description:
      "A responsive real-time chat app built with React, Node.js, and Socket.IO including Firebase authentication and MongoDB storage.",
    image: "/Gemini_Generated_Image_kvm3bokvm3bokvm3.png",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Firebase"],
    github: "https://github.com/muhammedAlthafcp/-Realtime-Chat-App",
  },

  {
    title: "Full-Stack E-Commerce Web App",
    description:
      "Full eCommerce platform built with HTML, CSS, JavaScript on frontend and Node.js + MongoDB backend including payments and admin features.",
    image:
      "/687474703a2f2f77702e616c697468656d65732e636f6d2f68746d6c2f65766172612f62616e6e6572732f65766172612d74662d62616e6e65722e706e67.png",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/muhammedAlthafcp/Evara_ecommerce",
  },

  /* ADD MORE PROJECTS HERE */
];

/* ================= MAIN COMPONENT ================= */

export default function Projects() {
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = projects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </span>
      </motion.h2>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {currentItems.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-slate-800/60 rounded-2xl shadow-xl overflow-hidden backdrop-blur-md border border-slate-700 hover:border-indigo-500 transition group"
          >

             <div className="relative w-full h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold group-hover:text-indigo-400 transition">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-slate-700/60 rounded-full border border-slate-600 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg text-sm hover:bg-slate-600 transition"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                )}

                {project.live && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-sm"
                  >
                    <Globe size={16} />
                    Live
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center gap-6 mt-16">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="flex items-center gap-1 px-5 py-2 bg-slate-700 rounded-lg disabled:opacity-40 hover:bg-slate-600 transition"
        >
          <ChevronLeft size={18} /> Prev
        </button>

        <span className="text-slate-400 text-sm">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="flex items-center gap-1 px-5 py-2 bg-slate-700 rounded-lg disabled:opacity-40 hover:bg-slate-600 transition"
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
