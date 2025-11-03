import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Server, Rocket } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 size={36} />,
      title: "Frontend Development",
      desc: "Crafting responsive, high-performance user interfaces with React, Tailwind CSS, and Framer Motion for seamless user experiences.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Server size={36} />,
      title: "Backend Development",
      desc: "Building scalable, secure REST APIs with Node.js, Express, and MongoDB — optimized for reliability and speed.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Palette size={36} />,
      title: "UI/UX Design",
      desc: "Designing clean, user-friendly interfaces that blend creativity with functionality using Figma and modern design principles.",
      color: "from-indigo-400 to-blue-600",
    },
    {
      icon: <Rocket size={36} />,
      title: "Deployment & Optimization",
      desc: "Deploying full-stack applications with CI/CD pipelines and optimizing performance for smooth real-world usage.",
      color: "from-pink-500 to-purple-600",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 md:px-16 bg-gradient-to-b from-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          My <span className="text-blue-400">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-400 max-w-2xl mx-auto mb-16"
        >
          I deliver end-to-end web solutions — from intuitive frontends to robust backends — ensuring speed, security, and scalability.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-slate-800/60 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-blue-500/20 transition group"
            >
              <div
                className={`w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-100">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Bottom Glow */}
              <div
                className={`absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
