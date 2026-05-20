"use client";

import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: <FiGithub size={16} />, href: "https://github.com/rondimarten07", label: "GitHub" },
  { icon: <FiLinkedin size={16} />, href: "https://www.linkedin.com/in/rondi99/", label: "LinkedIn" },
  { icon: <FiMail size={16} />, href: "mailto:rondimarten@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                R
              </span>
              <span className="font-semibold tracking-tight">Rondi</span>
            </a>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Mobile developer crafting thoughtful Android & cross-platform
              experiences from Bandung, Indonesia.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-accent-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-muted mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-lg border border-card-border text-muted hover:text-accent-light hover:border-accent-light/40 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-6 border-t border-card-border">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Rondi Marten. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent-light transition-colors"
          >
            Back to top
            <FiArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
