"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiBookOpen, FiUsers, FiStar } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { DiagonalStripes, FloatingShapes } from "./Shapes";

const achievements = [
  {
    icon: <FiAward size={20} />,
    title: "3rd Place — AI Creation Hackathon",
    org: "Bisa AI × Huawei",
    year: "2022",
    desc: 'Built "Trenscom (Trends Spot Recommendation)" with team AMSTRIDIA AI.',
  },
  {
    icon: <FiAward size={20} />,
    title: "2nd Place — Fab Creation Hackathon",
    org: "Jababeka",
    year: "2022",
    desc: 'Game "IDS (Infrastructure Building Simulation)" with team KIGAPRO. Competed against 100+ teams.',
  },
  {
    icon: <FiBookOpen size={20} />,
    title: "Bangkit Academy Graduate",
    org: "Google, Tokopedia, Gojek & Traveloka",
    year: "2023",
    desc: "Completed Android Beginner to Expert track. Built capstone with cross-functional team.",
  },
  {
    icon: <FiBookOpen size={20} />,
    title: "Cum Laude Graduate",
    org: "Universitas Teknologi Bandung",
    year: "2024",
    desc: "Bachelor of Informatics Engineering with GPA 3.72/4.00. Highest grades distinction.",
  },
  {
    icon: <FiUsers size={20} />,
    title: "Webinar Speaker — Android Dev for Beginners",
    org: "Bisa AI",
    year: "2022",
    desc: "Presented to MSIB Bisa AI students and the general public on becoming an Android developer.",
  },
  {
    icon: <FiUsers size={20} />,
    title: "Software Coordinator — Oxygen",
    org: "Universitas Teknologi Bandung",
    year: "2021 — 2022",
    desc: "Led Java & OOP workshops, mentored new members, and organized software competitions.",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative py-20 md:py-28 px-6 overflow-hidden" ref={ref}>
      <DiagonalStripes />
      <FloatingShapes />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Achievements"
          title="Awards & recognition"
          icon={<FiStar size={14} />}
          isInView={isInView}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="p-6 rounded-xl border border-card-border bg-card-bg/40 hover:bg-card-bg/60 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg border border-card-border bg-card-bg/80 flex items-center justify-center text-accent-light">
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono text-muted">
                  {item.year}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-1 leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-accent-light/80 mb-3">{item.org}</p>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
