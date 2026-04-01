"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    company: "PT. Pilar Timur Teknologi",
    role: "Fullstack Mobile Developer",
    period: "Feb 2024 - Present",
    location: "Bandung, Indonesia",
    current: true,
    points: [
      "Built Pilar Pulsa Android app using Kotlin, Jetpack Compose, and Clean Architecture, achieving 99% app stability",
      "Developed core mobile features including transactions, top-ups, and withdrawals",
      "Participated in backend development, contributing to API design and optimization",
      "Worked on Megamaster Engine (core engine for Pilar Pulsa), adding features and fixing bugs",
      "Published the application to Google Play Store",
      "Created features for marketing and support web applications for Komatsu Indonesia",
      "Improved cybersecurity for United Tractor website",
      "Supported BTN Bank's ALM Credit Remapping project",
    ],
  },
  {
    company: "Bangkit Academy",
    role: "Mobile Development Cohort",
    period: "Feb 2023 - Jul 2023",
    location: "Bandung, Indonesia",
    badge: "Led by Google, Tokopedia, Gojek & Traveloka",
    points: [
      "Completed Android Beginner to Expert courses",
      "Built a mobile-based capstone project with a cross-functional team (Android, ML, Cloud Computing)",
      "Created multiple innovative mobile projects showcasing creativity and technical skills",
      "Applied Agile development practices and Git version control",
    ],
  },
  {
    company: "PT. Bisa Artifisial Indonesia",
    role: "Mobile Developer",
    period: "Jul 2022 - Dec 2022",
    location: "South Jakarta, Indonesia",
    points: [
      "Developed the Siakad Bisa AI application with a team of 5+ people",
      "Designed mobile architecture adhering to industry best practices",
      "3rd place in AI Creation Hackathon & 2nd place in FabCreation competition (100+ teams)",
      "Speaker at webinar on Android development for beginners",
    ],
  },
  {
    company: "DISHUB Kabupaten Majalengka",
    role: "Software Engineer",
    period: "Jan 2019 - Mar 2019",
    location: "Majalengka, Indonesia",
    points: [
      "Planned, analyzed, implemented and tested parking applications",
      "Developed CRUD and location features as Android developer",
      "Built parking cost report feature in collaboration with transportation department",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-accent-light/20">
            <FiBriefcase size={24} className="text-accent-light" />
          </div>
          <div>
            <h2 className="text-sm font-mono text-accent-light mb-1 tracking-wider uppercase">
              Work Experience
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              Where I&apos;ve{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                worked
              </span>
            </h3>
          </div>
        </motion.div>

        {/* Stepper cards */}
        <div className="relative">
          {experiences.map((exp, i) => {
            const isLast = i === experiences.length - 1;
            return (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative flex gap-6 md:gap-8 pb-10 last:pb-0"
            >
              {/* Stepper column - icon + line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                  width: "48px",
                }}
              >
                {/* Icon box */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    border: exp.current ? "2px solid var(--color-accent-light)" : "2px solid var(--color-card-border)",
                    background: exp.current ? "rgba(99,102,241,0.1)" : "var(--color-card-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: exp.current ? "0 0 15px rgba(99,102,241,0.3)" : "none",
                  }}
                >
                  <FiBriefcase size={20} style={{ color: "var(--color-accent-light)" }} />
                </div>
                {/* Line connecting to next icon */}
                {!isLast && (
                  <div
                    style={{
                      width: "2px",
                      flexGrow: 1,
                      minHeight: "40px",
                      backgroundColor: "var(--color-card-border)",
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div className={`flex-1 min-w-0 p-6 rounded-xl border transition-all duration-300 ${
                exp.current
                  ? "border-accent-light/30 bg-accent-light/5 shadow-[0_0_30px_rgba(99,102,241,0.05)]"
                  : "border-card-border bg-card-bg/30 hover:border-accent-light/20"
              }`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-lg font-bold">{exp.company}</h4>
                      {exp.current && (
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-accent-light font-medium text-sm">
                      {exp.role}
                    </p>
                    {exp.badge && (
                      <span className="inline-block mt-1.5 text-xs px-3 py-1 rounded-full bg-accent/10 text-accent-light border border-accent/20">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-xs px-3 py-1.5 rounded-lg bg-card-bg border border-card-border text-muted inline-block">
                      {exp.period}
                    </p>
                    <p className="text-xs text-muted/60 mt-1">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted flex items-start gap-3"
                    >
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent-light/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
