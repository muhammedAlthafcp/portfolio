import React from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

const projects = [
  {
      title: "Real-Time Chat Application",
  description:
    "A responsive real-time chat platform built with React, Node.js, and Socket.IO. Users can sign in securely, send and receive messages instantly, and stay connected with typing indicators and online presence tracking.",
  image: "/Gemini_Generated_Image_kvm3bokvm3bokvm3.png",
  tech: ["React", "TailwindCSS", "Node.js", "Socket.IO", "MongoDB", "Firebase Auth"],
  features: [
    "Instant messaging with Socket.IO",
    "Firebase Authentication (Google/Email login)",
    "Persistent message storage (MongoDB)",
    "Typing indicators and online presence",
    "Clean modern UI built with TailwindCSS",
    "Fully responsive layout (mobile + desktop)",
    "Deployed on Vercel (Frontend) and Render (Backend)"
  ],
  github: "https://github.com/muhammedAlthafcp/-Realtime-Chat-App",
},
  {
 
  title: "Full-Stack E-Commerce Web App",
  description:
    "A complete eCommerce platform built from scratch using HTML, CSS, and JavaScript for the frontend, and Node.js with MongoDB for the backend. Includes user authentication, shopping cart, payment integration, and admin management.",
  image: "/687474703a2f2f77702e616c697468656d65732e636f6d2f68746d6c2f65766172612f62616e6e6572732f65766172612d74662d62616e6e65722e706e67.png",
  tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "JWT", "Stripe API"],
  github: "https://github.com/muhammedAlthafcp/Evara_ecommerce",
},

 {
  title: "Laundry Service Web App",
  description:
    "A modern laundry booking and management web application built with React, TailwindCSS, and Firebase. It allows users to schedule pickups, track order status, and make secure online payments.",
  image: "/Screenshot 2025-11-02 215932.png",
  tech: ["React", "TailwindCSS", "Firebase", "HTML"],
  live: "https://bustbaylaundryservice.netlify.app/",
}

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* Decorative Background Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-slate-800/60 rounded-2xl shadow-xl overflow-hidden backdrop-blur-md border border-slate-700 hover:border-indigo-500 transition-all group"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-400 transition">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-slate-700/60 rounded-full border border-slate-600 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg text-sm hover:bg-slate-600 transition"
                >
                  <Github size={16} /> Code
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-sm"
                >
                  <Globe size={16} /> Live
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


