"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "rondimarten@gmail.com",
    href: "mailto:rondimarten@gmail.com",
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: "+62 853 1440 5069",
    href: "tel:+6285314405069",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Bandung, West Java, Indonesia",
    href: null,
  },
];

const socials = [
  {
    icon: <FiGithub size={22} />,
    label: "GitHub",
    href: "https://github.com/rondimarten07",
    username: "@rondimarten07",
  },
  {
    icon: <FiLinkedin size={22} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rondi99/",
    username: "/in/rondi99",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-accent-light mb-2 tracking-wider uppercase">
            Contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              connect
            </span>
          </h3>
          <p className="text-muted max-w-md mx-auto">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="p-3 rounded-lg border border-card-border bg-card-bg/50 text-accent-light">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted/60 uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-muted hover:text-accent-light transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="font-semibold text-lg mb-4">Find Me Online</h4>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-card-border bg-card-bg/30 hover:border-accent-light/30 transition-all duration-300 group"
              >
                <div className="text-accent-light group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
                <div>
                  <p className="font-medium text-sm">{social.label}</p>
                  <p className="text-xs text-muted">{social.username}</p>
                </div>
              </a>
            ))}

            <a
              href="/Rondi-resume.pdf"
              target="_blank"
              className="flex items-center justify-center gap-2 p-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
