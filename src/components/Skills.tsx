"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Level = "Intermediate" | "Advanced" | "Expert";

const levelWidth: Record<Level, number> = {
  Intermediate: 55,
  Advanced: 75,
  Expert: 92,
};

const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Kotlin", level: "Expert" as Level },
      { name: "Jetpack Compose", level: "Expert" as Level },
      { name: "Flutter", level: "Advanced" as Level },
      { name: "Android SDK", level: "Expert" as Level },
    ],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      { name: "Clean Architecture", level: "Expert" as Level },
      { name: "MVVM", level: "Advanced" as Level },
      { name: "BLoC", level: "Intermediate" as Level },
      { name: "REST API", level: "Advanced" as Level },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Laravel", level: "Intermediate" as Level },
      { name: "React", level: "Intermediate" as Level },
      { name: "NestJS", level: "Intermediate" as Level },
      { name: ".NET", level: "Intermediate" as Level },
    ],
  },
  {
    title: "Tools & Services",
    skills: [
      { name: "Firebase", level: "Advanced" as Level },
      { name: "Git / GitLab CI/CD", level: "Advanced" as Level },
      { name: "Postman", level: "Advanced" as Level },
      { name: "Payment Gateway", level: "Advanced" as Level },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL (MySQL / PostgreSQL)", level: "Advanced" as Level },
      { name: "NoSQL (MongoDB / Firestore)", level: "Advanced" as Level },
      { name: "Figma", level: "Intermediate" as Level },
      { name: "Agile / Scrum", level: "Advanced" as Level },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "UI/UX Design", level: "Intermediate" as Level },
      { name: "Performance Optimization", level: "Advanced" as Level },
      { name: "Secure Coding", level: "Advanced" as Level },
      { name: "Problem Solving", level: "Expert" as Level },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, var(--color-foreground) 1px, transparent 1px), linear-gradient(-45deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent-light mb-2 tracking-wider uppercase">
            Skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              tech stack
            </span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="p-6 rounded-xl border border-card-border bg-card-bg/30"
            >
              <h4 className="font-semibold mb-5 text-foreground">
                {category.title}
              </h4>
              <div className="space-y-4">
                {category.skills.map((skill, j) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-muted">{skill.name}</span>
                      <span className={`text-xs font-medium ${
                        skill.level === "Expert"
                          ? "text-purple-400"
                          : skill.level === "Advanced"
                          ? "text-indigo-400"
                          : "text-blue-400"
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-card-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${levelWidth[skill.level]}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: 0.5 + i * 0.1 + j * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
