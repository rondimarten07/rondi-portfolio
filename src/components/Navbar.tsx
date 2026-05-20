"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-nav-bg backdrop-blur-xl border-b border-card-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 font-semibold tracking-tight"
          >
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-[0_4px_12px_rgba(99,102,241,0.3)]">
              R
            </span>
            <span className="hidden sm:inline text-base">Rondi</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm text-muted hover:text-foreground rounded-md transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted hover:text-accent-light hover:bg-card-bg/60 transition-all duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
              </motion.div>
            </button>

            <a
              href="/Rondi-resume.pdf"
              target="_blank"
              className="hidden md:inline-flex text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-shadow duration-200"
            >
              Resume
            </a>

            {/* Hamburger (mobile) */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-card-bg/60 transition-colors cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <FiMenu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] md:hidden bg-mobile-bg backdrop-blur-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-card-border shrink-0">
              <a
                href="#home"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 font-semibold tracking-tight"
              >
                <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-[0_4px_12px_rgba(99,102,241,0.3)]">
                  R
                </span>
                <span className="text-base">Rondi</span>
              </a>
              <button
                type="button"
                className="p-2 rounded-lg text-foreground hover:bg-card-bg/60 transition-colors cursor-pointer"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <FiX size={22} />
              </button>
            </div>

            {/* Links */}
            <motion.div
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.04, delayChildren: 0.08 },
                },
              }}
              className="flex flex-col px-6 py-8 gap-1 overflow-y-auto"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={{
                    closed: { opacity: 0, x: -16 },
                    open: { opacity: 1, x: 0 },
                  }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-foreground/90 hover:text-accent-light py-3 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="/Rondi-resume.pdf"
                target="_blank"
                variants={{
                  closed: { opacity: 0, y: 16 },
                  open: { opacity: 1, y: 0 },
                }}
                onClick={() => setMobileOpen(false)}
                className="mt-6 inline-flex items-center justify-center text-base px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-[0_4px_20px_rgba(99,102,241,0.3)]"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
