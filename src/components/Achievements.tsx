"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiBookOpen, FiUsers } from "react-icons/fi";

const achievements = [
  {
    icon: <FiAward size={28} />,
    title: "3rd Place - AI Creation Hackathon",
    org: "Organized by Bisa AI & Huawei",
    year: "2022",
    desc: 'Application "Trenscom (Trends Spot Recommendation)" with team AMSTRIDIA AI',
  },
  {
    icon: <FiAward size={28} />,
    title: "2nd Place - Fab Creation Hackathon",
    org: "Organized by Jababeka",
    year: "2022",
    desc: 'Game "IDS (Infrastructure Building Simulation)" with team KIGAPRO. Competed against 100+ teams.',
  },
  {
    icon: <FiBookOpen size={28} />,
    title: "Bangkit Academy Graduate",
    org: "Google, Tokopedia, Gojek & Traveloka",
    year: "2023",
    desc: "Completed Android Beginner to Expert track. Built capstone with cross-functional team.",
  },
  {
    icon: <FiBookOpen size={28} />,
    title: "Cum Laude Graduate",
    org: "Universitas Teknologi Bandung",
    year: "2024",
    desc: "Bachelor of Informatics Engineering with GPA 3.72/4.00. Highest grades distinction.",
  },
  {
    icon: <FiUsers size={28} />,
    title: 'Webinar Speaker - "Android Dev for Beginners"',
    org: "Bisa AI",
    year: "2022",
    desc: "Presented to all MSIB Bisa AI students and the general public on how to become an Android developer.",
  },
  {
    icon: <FiUsers size={28} />,
    title: "Software Coordinator - Oxygen",
    org: "Universitas Teknologi Bandung",
    year: "2021 - 2022",
    desc: "Led Java & OOP workshops, mentored new members, and organized software competitions.",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-accent-light/20 to-transparent" />
      <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-accent-light/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent-light mb-2 tracking-wider uppercase">
            Achievements
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Awards &{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              recognition
            </span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group p-6 rounded-xl border border-card-border bg-card-bg/30 hover:border-accent-light/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-accent-light group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-xs font-mono text-muted/50 px-2 py-1 rounded-md bg-card-border/30">
                  {item.year}
                </span>
              </div>
              <h4 className="font-bold text-sm mb-1 leading-tight">
                {item.title}
              </h4>
              <p className="text-xs text-accent-light/70 mb-3">{item.org}</p>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
