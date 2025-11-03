import React from "react";
import Navbar from "../components/navbar";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Palette,
  Globe,
  Cpu,
  Sparkles,
  MonitorSmartphone,
  Layers,
  LineChart,
  Database,
  Rocket,
} from "lucide-react";

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center px-6 md:px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            My Services
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            I specialize in crafting full-stack web experiences that combine speed,
            scalability, and stunning design. From concept to launch — I deliver solutions
            that make brands stand out.
          </p>
        </motion.div>
      </section>

      {/* Core Services */}
      <section className="px-6 md:px-20 py-20 bg-slate-900/40 border-y border-slate-800">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14"
        >
          What I <span className="text-blue-400">Offer</span> 💼
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Code2 size={36} />,
              title: "Frontend Development",
              desc: "Responsive, animated, and SEO-friendly interfaces using React, TailwindCSS, and Framer Motion.",
            },
            {
              icon: <Server size={36} />,
              title: "Backend Development",
              desc: "Secure and scalable REST APIs using Node.js, Express, and MongoDB with JWT authentication.",
            },
            {
              icon: <Palette size={36} />,
              title: "UI/UX & Branding",
              desc: "Design systems, color palettes, and intuitive layouts built in Figma — made to convert users.",
            },
            {
              icon: <Globe size={36} />,
              title: "Full-Stack Web Apps",
              desc: "Custom dashboards, admin panels, SaaS tools, and eCommerce platforms built end-to-end.",
            },
            {
              icon: <Cpu size={36} />,
              title: "Performance Optimization",
              desc: "Improving load time, Lighthouse scores, and accessibility for better user engagement.",
            },
            {
              icon: <Sparkles size={36} />,
              title: "Animations & Interactivity",
              desc: "Smooth scrolls, parallax, and microinteractions to make your website come alive.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-slate-800/50 border border-slate-700 hover:border-blue-500/40 p-8 rounded-2xl shadow-lg text-center backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4 text-blue-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sub Services - Detailed Sections */}
      <section className="px-6 md:px-20 py-24 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Detailed <span className="text-blue-400">Service Areas</span> 🔍
        </motion.h2>

        {/* Web Development */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <MonitorSmartphone /> Web Development
            </h3>
            <p className="text-slate-300 mb-4">
              From simple portfolios to advanced dashboards, I build responsive, dynamic,
              and scalable websites that perform beautifully on all devices.
            </p>
            <ul className="text-slate-400 space-y-2 text-sm">
              <li>• React, Next.js, and TailwindCSS UI development</li>
              <li>• Node.js + Express.js REST API creation</li>
              <li>• MongoDB and Firebase integration</li>
              <li>• JWT authentication and role-based access</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold text-white mb-2">Ideal For:</h4>
            <p className="text-slate-400">
              Startups, SaaS platforms, personal brands, and businesses needing custom web apps.
            </p>
          </motion.div>
        </div>

        {/* Branding & Design */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-pink-400 mb-3 flex items-center gap-2">
              <Layers /> Branding & Design
            </h3>
            <p className="text-slate-300 mb-4">
              I create visually consistent digital experiences that align your brand’s
              personality with stunning modern design.
            </p>
            <ul className="text-slate-400 space-y-2 text-sm">
              <li>• Logo and identity design</li>
              <li>• Color palette & typography systems</li>
              <li>• Responsive layout & UX mapping</li>
              <li>• Component-based UI consistency</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl"
          >
            <h4 className="text-xl font-semibold text-white mb-2">Tools I Use:</h4>
            <p className="text-slate-400">Figma, Adobe XD, Canva, Tailwind UI, and Framer Motion.</p>
          </motion.div>
        </div>

        {/* Performance & SEO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-3 flex items-center gap-2">
              <LineChart /> Performance & SEO
            </h3>
            <p className="text-slate-300 mb-4">
              I optimize sites to load fast, score high on Lighthouse, and appear
              higher on Google — improving your online reach.
            </p>
            <ul className="text-slate-400 space-y-2 text-sm">
              <li>• Image optimization & lazy loading</li>
              <li>• Code splitting & caching strategies</li>
              <li>• On-page SEO and metadata setup</li>
              <li>• Analytics & conversion tracking</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold text-white mb-2">Best For:</h4>
            <p className="text-slate-400">Businesses aiming for faster, SEO-optimized websites.</p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 md:px-20 py-24 bg-slate-900/40 border-y border-slate-800 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          My <span className="text-blue-400">Tech Stack</span> 🧠
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto text-slate-300">
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "TailwindCSS",
            "Framer Motion",
            "Next.js",
            "Figma",
            "Firebase",
            "Git & GitHub",
            "Vercel",
            "Netlify",
          ].map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-4 bg-slate-800/60 border border-slate-700 rounded-xl hover:border-blue-500/40 shadow-md"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="px-6 md:px-20 py-24 text-center max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10"
        >
          My <span className="text-blue-400">Workflow</span> ⚙️
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "1️⃣", title: "Discovery", desc: "Understanding your vision and goals." },
            { step: "2️⃣", title: "Design", desc: "Creating wireframes and UI/UX mockups." },
            { step: "3️⃣", title: "Development", desc: "Building your product with clean, scalable code." },
            { step: "4️⃣", title: "Launch", desc: "Deploying and providing ongoing support." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-slate-800/60 border border-slate-700 hover:border-blue-500/40 p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-3xl mb-3">{item.step}</h3>
              <h4 className="text-xl font-semibold text-blue-400 mb-2">
                {item.title}
              </h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800 text-slate-500 text-sm">
        © {new Date().getFullYear()} Muhammed Althaf. All Rights Reserved.
      </footer>
    </div>
  );
}
