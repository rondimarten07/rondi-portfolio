"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { FiCpu } from "react-icons/fi";
import {
  SiKotlin,
  SiAndroid,
  SiFlutter,
  SiJetpackcompose,
  SiReact,
  SiNestjs,
  SiLaravel,
  SiDotnet,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiFigma,
  SiTypescript,
} from "react-icons/si";
import { FiServer, FiShield, FiZap, FiTrendingUp, FiUsers } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { GridPattern, GradientOrbs } from "./Shapes";

type Level = "Intermediate" | "Advanced" | "Expert";

type Skill = { name: string; level: Level; icon?: ReactNode; color?: string };

const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Kotlin", level: "Expert", icon: <SiKotlin />, color: "#7F52FF" },
      { name: "Jetpack Compose", level: "Expert", icon: <SiJetpackcompose />, color: "#4285F4" },
      { name: "Android SDK", level: "Expert", icon: <SiAndroid />, color: "#3DDC84" },
      { name: "Flutter", level: "Advanced", icon: <SiFlutter />, color: "#02569B" },
    ],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      { name: "Clean Architecture", level: "Expert", icon: <FiServer /> },
      { name: "MVVM", level: "Advanced", icon: <FiServer /> },
      { name: "REST API", level: "Advanced", icon: <FiServer /> },
      { name: "BLoC", level: "Intermediate", icon: <FiServer /> },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "TypeScript", level: "Advanced", icon: <SiTypescript />, color: "#3178C6" },
      { name: "React", level: "Intermediate", icon: <SiReact />, color: "#61DAFB" },
      { name: "NestJS", level: "Intermediate", icon: <SiNestjs />, color: "#E0234E" },
      { name: "Laravel", level: "Intermediate", icon: <SiLaravel />, color: "#FF2D20" },
      { name: ".NET", level: "Intermediate", icon: <SiDotnet />, color: "#512BD4" },
    ],
  },
  {
    title: "Tools & Services",
    skills: [
      { name: "Firebase", level: "Advanced", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "Git", level: "Advanced", icon: <SiGit />, color: "#F05032" },
      { name: "Postman", level: "Advanced", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Payment Gateway", level: "Advanced", icon: <FiZap /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "MySQL", level: "Advanced", icon: <SiMysql />, color: "#4479A1" },
      { name: "MongoDB", level: "Advanced", icon: <SiMongodb />, color: "#47A248" },
      { name: "Firestore", level: "Advanced", icon: <SiFirebase />, color: "#FFCA28" },
    ],
  },
  {
    title: "Craft & Process",
    skills: [
      { name: "Problem Solving", level: "Expert", icon: <FiZap /> },
      { name: "Performance Optimization", level: "Advanced", icon: <FiTrendingUp /> },
      { name: "Secure Coding", level: "Advanced", icon: <FiShield /> },
      { name: "Agile / Scrum", level: "Advanced", icon: <FiUsers /> },
      { name: "UI/UX (Figma)", level: "Intermediate", icon: <SiFigma />, color: "#F24E1E" },
    ],
  },
];

const levelStyle: Record<Level, string> = {
  Expert: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
  Advanced: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  Intermediate: "bg-amber-500/10 text-amber-500 border-amber-500/30",
};

const chipStyle: Record<Level, string> = {
  Expert: "bg-card-bg/80 text-foreground border-emerald-500/40 hover:border-emerald-500/70",
  Advanced: "bg-card-bg/80 text-foreground border-indigo-500/40 hover:border-indigo-500/70",
  Intermediate: "bg-card-bg/60 text-foreground border-amber-500/40 hover:border-amber-500/70",
};

const levelDot: Record<Level, string> = {
  Expert: "bg-emerald-500",
  Advanced: "bg-indigo-500",
  Intermediate: "bg-amber-500",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-20 md:py-28 px-6 overflow-hidden" ref={ref}>
      <GridPattern />
      <GradientOrbs />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="My tech stack"
          icon={<FiCpu size={14} />}
          isInView={isInView}
        />

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          <span className="text-xs text-muted mr-1">Proficiency:</span>
          {(["Expert", "Advanced", "Intermediate"] as Level[]).map((lvl) => (
            <span
              key={lvl}
              className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border ${levelStyle[lvl]}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${levelDot[lvl]}`} />
              {lvl}
            </span>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="group relative p-6 rounded-xl border border-card-border bg-card-bg/40 hover:bg-card-bg/60 transition-colors overflow-hidden"
            >
              {/* Hover gradient sweep */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/[0.04] group-hover:to-purple-500/[0.04] transition-colors pointer-events-none" />

              <h4 className="relative text-sm font-semibold text-foreground mb-4">
                {category.title}
              </h4>
              <div className="relative flex flex-col gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center justify-between gap-3 px-3 py-2 rounded-lg border transition-colors ${chipStyle[skill.level]}`}
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      {skill.icon && (
                        <span
                          className="text-[16px] flex items-center shrink-0"
                          style={{ color: skill.color ?? "var(--color-accent-light)" }}
                        >
                          {skill.icon}
                        </span>
                      )}
                      <span className="text-sm truncate">{skill.name}</span>
                    </span>
                    <span
                      className={`shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${levelStyle[skill.level]}`}
                    >
                      <span className={`w-1 h-1 rounded-full ${levelDot[skill.level]}`} />
                      {skill.level}
                    </span>
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
