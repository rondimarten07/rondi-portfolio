"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiArrowDown,
  FiZap,
} from "react-icons/fi";

const socials = [
  { icon: <FiGithub size={18} />, href: "https://github.com/rondimarten07", label: "GitHub" },
  { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/rondi99/", label: "LinkedIn" },
  { icon: <FiMail size={18} />, href: "mailto:rondimarten@gmail.com", label: "Email" },
];

const stats = [
  { value: 3, suffix: "+", label: "Years experience" },
  { value: 13, suffix: "+", label: "Projects shipped" },
  { value: 6, suffix: "", label: "Awards & recognitions" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.6, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, value]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Animated dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
        {/* Status pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-card-border bg-card-bg/60 backdrop-blur-sm text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <FiMapPin size={12} />
            Bandung, Indonesia
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm text-xs text-accent-light">
            <FiZap size={12} />
            Open to opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="relative inline-block">
            <span className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl rounded-lg" />
            <span className="relative bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Rondi
            </span>
          </span>
          .
          <br />
          <span className="text-muted">Mobile Developer.</span>
        </motion.h1>

        {/* Lead */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10"
        >
          I build mobile apps that combine clean architecture with thoughtful
          UX. 3+ years shipping Android & cross-platform products in production.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium hover:shadow-[0_8px_24px_rgba(99,102,241,0.45)] transition-shadow"
          >
            Get in touch
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-card-border text-foreground text-sm font-medium hover:bg-card-bg/60 transition-colors"
          >
            View projects
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-8 md:gap-12 mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-semibold text-foreground font-mono tabular-nums">
                <Counter to={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-muted mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-2"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2.5 rounded-lg border border-card-border text-muted hover:text-accent-light hover:border-accent-light/40 hover:-translate-y-0.5 transition-all"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted/60 hover:text-accent-light transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <FiArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
