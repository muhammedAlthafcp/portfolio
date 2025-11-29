import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
       
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {/* Left Side — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold mb-4">Let’s Connect</h3>
          <p className="text-slate-400 leading-relaxed">
            Want to collaborate, discuss an idea, or start a project together?  
            I’m always open to exciting opportunities and creative partnerships!
          </p>

          <div className="space-y-4 text-slate-300">
            <p className="flex items-center gap-3">
              <Mail className="text-blue-400" size={20} /> muhammedalthafcp449@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-blue-400" size={20} /> +91 8943031347
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-blue-400" size={20} /> Kerala, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-6">
            <a
              href="https://www.linkedin.com/in/muhammed-althaf-cp-197b2029b/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <Linkedin size={28} className="text-blue-400" />
            </a>
            <a
              href="https://github.com/muhammedAlthafcp"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <Github size={28} className="text-gray-300" />
            </a>
            {/* <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <Instagram size={28} className="text-pink-400" />
            </a> */}
          </div>
        </motion.div>

        {/* Right Side — Message Box Replaced with CTA */}
          <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-slate-800/70 backdrop-blur-md rounded-2xl shadow-xl p-10 border border-slate-700 flex flex-col items-center justify-center text-center"
    >
      <p className="text-slate-300 mb-6 text-lg">
        Ready to work together?{" "}
        Let’s build something <span className="text-blue-400 font-semibold">amazing</span>! 🚀
      </p>

      <motion.a
        href="https://wa.me/918943031347?text=Hi%20Althaf!%20I’d%20like%20to%20discuss%20a%20project%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold shadow-lg hover:shadow-green-500/40 transition"
      >
        <Send size={18} /> Chat on WhatsApp
      </motion.a>
    </motion.div>
      </div>
    </section>
  );
}
