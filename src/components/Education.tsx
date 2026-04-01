"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBookOpen, FiAward } from "react-icons/fi";

const educations = [
  {
    school: "Universitas Teknologi Bandung",
    degree: "Bachelor of Informatics Engineering",
    period: "Oct 2020 - Feb 2024",
    location: "Bandung, Indonesia",
    gpa: "3.72 / 4.00",
    honor: "Cum Laude",
    highlights: [
      "Graduated with highest grades distinction (Cum Laude)",
      "Software Coordinator at Oxygen student organization (2021-2022)",
      "Led Java & OOP workshops for new members",
    ],
  },
  {
    school: "IT Learning",
    degree: "Associate of System Analyst",
    period: "Aug 2023 - Jan 2024",
    location: "Bandung, Indonesia",
    highlights: [
      "Analyzed and designed new systems for course selection at Bandung College of Technology",
      "Wrote and translated all technical documents for better user understanding",
      "Collaborated using Trello, Git, and Jira for project management",
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header with icon */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-accent-light/20">
            <FiBookOpen size={24} className="text-accent-light" />
          </div>
          <div>
            <h2 className="text-sm font-mono text-accent-light mb-1 tracking-wider uppercase">
              Education
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              Where I&apos;ve{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                studied
              </span>
            </h3>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {educations.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative p-6 rounded-xl border border-card-border bg-card-bg/30 hover:border-accent-light/20 transition-all duration-300 group"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-light/30 to-transparent" />

              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h4 className="text-lg font-bold mb-1">{edu.school}</h4>
                  <p className="text-accent-light font-medium text-sm">{edu.degree}</p>
                </div>
                <span className="font-mono text-xs px-3 py-1.5 rounded-lg bg-card-bg border border-card-border text-muted whitespace-nowrap">
                  {edu.period}
                </span>
              </div>

              <p className="text-xs text-muted/60 mb-4">{edu.location}</p>

              {/* GPA & Honor badges */}
              {(edu.gpa || edu.honor) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {edu.gpa && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      GPA: {edu.gpa}
                    </span>
                  )}
                  {edu.honor && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      <FiAward size={12} />
                      {edu.honor}
                    </span>
                  )}
                </div>
              )}

              <ul className="space-y-2">
                {edu.highlights.map((point, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted flex items-start gap-3"
                  >
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent-light/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
