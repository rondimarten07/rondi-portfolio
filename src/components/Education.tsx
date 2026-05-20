"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBookOpen, FiAward } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { GridPattern } from "./Shapes";

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
    <section id="education" className="relative py-20 md:py-28 px-6 overflow-hidden" ref={ref}>
      <GridPattern />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Education"
          title="Where I've studied"
          icon={<FiBookOpen size={14} />}
          isInView={isInView}
        />

        <div className="grid md:grid-cols-2 gap-5">
          {educations.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="p-6 rounded-xl border border-card-border bg-card-bg/40 hover:bg-card-bg/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
                    {edu.school}
                  </h4>
                  <p className="text-accent-light text-sm font-medium">
                    {edu.degree}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-muted whitespace-nowrap">
                  {edu.period}
                </span>
              </div>

              <p className="text-[11px] text-muted/60 mb-4">{edu.location}</p>

              {(edu.gpa || edu.honor) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {edu.gpa && (
                    <span className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-full bg-card-bg border border-card-border text-muted">
                      GPA {edu.gpa}
                    </span>
                  )}
                  {edu.honor && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      <FiAward size={11} />
                      {edu.honor}
                    </span>
                  )}
                </div>
              )}

              <ul className="space-y-2">
                {edu.highlights.map((point, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-accent-light/60" />
                    <span>{point}</span>
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
