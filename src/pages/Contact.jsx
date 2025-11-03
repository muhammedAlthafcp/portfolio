import React from "react";
import Navbar from "../components/navbar";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Helping Startups Go Digital 🚀
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
            Every day, thousands of entrepreneurs launch great ideas — but many
            struggle to reach their customers. The truth is, even the best
            products won’t grow without visibility.
          </p>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
            I help startups and small businesses build their{" "}
            <strong>online presence</strong> with high-performing, responsive
            websites — whether you need a{" "}
            <span className="text-blue-400">static landing page</span> or a{" "}
            <span className="text-indigo-400">dynamic web app</span>.
          </p>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
            A professional website doesn’t just bring in more customers — it
            builds <strong>trust</strong>, <strong>credibility</strong>, and{" "}
            <strong>brand awareness</strong>. Let’s create something that helps
            your business stand out online.
          </p>

          <a
            href="#contact-form"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-blue-500/30 transition-all duration-300"
          >
            Let’s Build Your Website
          </a>
        </div>
      </section>

      {/* "LET'S CONNECT" SECTION */}
      <section className="pt-32 pb-20 px-6 md:px-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Let’s Connect
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
            Have a project idea, collaboration, or just want to say hi?  
            I’d love to hear from you — let’s build something great together!
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

      {/* CONTACT INFO CARDS */}
      <section className="px-6 md:px-20 py-16 bg-slate-900/40 border-y border-slate-800">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {[
            {
              icon: <Mail size={32} />,
              title: "Email",
              text: "muhammedalthafcp449@gmail.com",
              link: "mailto:muhammedalthafcp449@gmail.com",
            },
            {
              icon: <Phone size={32} />,
              title: "Phone",
              text: "+91 8943031347",
              link: "tel:+918943031347",
            },
            {
              icon: <MapPin size={32} />,
              title: "Location",
              text: "Kerala, India",
              link: "https://maps.google.com",
            },
          ].map((info, i) => (
            <motion.a
              key={i}
              href={info.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-slate-800/50 border border-slate-700 hover:border-blue-500/40 p-8 rounded-2xl shadow-lg backdrop-blur-sm block"
            >
              <div className="text-blue-400 mb-4 flex justify-center">{info.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{info.title}</h3>
              <p className="text-slate-400 text-sm">{info.text}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact-form" className="px-6 md:px-20 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
        >
          Get In Touch 💬
        </motion.h2>

        <div className="max-w-4xl mx-auto bg-slate-900/60 p-8 rounded-2xl border border-slate-800 shadow-lg">
          <Contact />
        </div>
      </section>

      {/* WHATSAPP CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16"
      >
        <p className="text-slate-400 mb-6 text-lg">
          Ready to discuss your business idea?{" "}
          Let’s connect directly on{" "}
          <span className="text-green-400 font-semibold">WhatsApp</span>.
        </p>

        <motion.a
          href="https://wa.me/918943031347?text=Hi%20Althaf,%20I%20want%20to%20build%20a%20website!"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white font-semibold shadow-lg hover:shadow-green-600/40 transition"
        >
          Message Me on WhatsApp
        </motion.a>
      </motion.div>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-slate-800 text-slate-500 text-sm">
        © {new Date().getFullYear()} Muhammed Althaf. All Rights Reserved.
      </footer>
    </div>
  );
}
