"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating dots decoration */}
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-indigo-400/30 animate-pulse" />
      <div className="absolute top-40 right-40 w-1.5 h-1.5 rounded-full bg-purple-400/20 animate-pulse delay-500" />
      <div className="absolute bottom-40 left-20 w-2 h-2 rounded-full bg-purple-400/30 animate-pulse delay-700" />
      <div className="absolute bottom-60 left-40 w-1 h-1 rounded-full bg-indigo-400/20 animate-pulse delay-300" />

      {/* Corner accent lines */}
      <div className="absolute top-0 right-0 w-px h-40 bg-gradient-to-b from-indigo-500/20 to-transparent" />
      <div className="absolute top-0 right-0 w-40 h-px bg-gradient-to-l from-indigo-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-px h-40 bg-gradient-to-t from-purple-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-40 h-px bg-gradient-to-r from-purple-500/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border bg-card-bg/50 text-sm text-muted mb-8"
        >
          <FiMapPin className="text-accent-light" />
          Bandung, West Java, Indonesia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Rondi
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-4"
        >
          Mid-Level Mobile Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base text-muted/70 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          3+ years of experience building mobile apps that combine strong
          functionality with great user experience. Passionate about clean
          architecture and performance optimization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="px-6 py-3 rounded-lg border border-card-border text-muted hover:text-foreground hover:border-muted transition-all"
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            {
              icon: <FiGithub size={20} />,
              href: "https://github.com/rondimarten07",
              label: "GitHub",
            },
            {
              icon: <FiLinkedin size={20} />,
              href: "https://www.linkedin.com/in/rondi99/",
              label: "LinkedIn",
            },
            {
              icon: <FiMail size={20} />,
              href: "mailto:rondimarten@gmail.com",
              label: "Email",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-card-border text-muted hover:text-accent-light hover:border-accent-light/50 transition-all duration-200"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 border-2 border-muted/30 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-muted/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
