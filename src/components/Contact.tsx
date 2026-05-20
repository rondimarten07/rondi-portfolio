"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiArrowUpRight,
  FiDownload,
} from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { DotPattern, GradientOrbs } from "./Shapes";

const contactInfo = [
  {
    icon: <FiMail size={16} />,
    label: "Email",
    value: "rondimarten@gmail.com",
    href: "mailto:rondimarten@gmail.com",
  },
  {
    icon: <FiPhone size={16} />,
    label: "Phone",
    value: "+62 853 1440 5069",
    href: "tel:+6285314405069",
  },
  {
    icon: <FiMapPin size={16} />,
    label: "Location",
    value: "Bandung, West Java, Indonesia",
    href: null,
  },
];

const socials = [
  {
    icon: <FiGithub size={18} />,
    label: "GitHub",
    href: "https://github.com/rondimarten07",
    username: "@rondimarten07",
  },
  {
    icon: <FiLinkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rondi99/",
    username: "/in/rondi99",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-20 md:py-28 px-6 overflow-hidden" ref={ref}>
      <DotPattern />
      <GradientOrbs />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something together"
          description="I'm always open to new opportunities, freelance work, or just a friendly chat. Drop me a line — I'll get back to you soon."
          icon={<FiSend size={14} />}
          align="center"
          isInView={isInView}
        />

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-6 rounded-xl border border-card-border bg-card-bg/40"
          >
            <h4 className="text-sm font-semibold text-foreground mb-5">
              Get in touch
            </h4>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 shrink-0 rounded-lg border border-card-border bg-card-bg/60 text-accent-light flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-muted/70 mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-foreground hover:text-accent-light transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Socials + Resume */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col gap-3"
          >
            <div className="p-6 rounded-xl border border-card-border bg-card-bg/40">
              <h4 className="text-sm font-semibold text-foreground mb-5">
                Find me online
              </h4>
              <div className="space-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 p-3 rounded-lg border border-card-border bg-card-bg/40 hover:border-accent-light/30 hover:bg-card-bg/70 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-accent-light">{s.icon}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {s.label}
                        </p>
                        <p className="text-xs text-muted">{s.username}</p>
                      </div>
                    </div>
                    <FiArrowUpRight
                      size={16}
                      className="text-muted group-hover:text-accent-light transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/Rondi-resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 p-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium text-sm hover:shadow-[0_8px_24px_rgba(99,102,241,0.35)] transition-shadow"
            >
              <FiDownload size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
