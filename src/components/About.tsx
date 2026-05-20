"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiSmartphone, FiServer, FiAward, FiUser } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import TechMarquee from "./TechMarquee";
import { DotPattern, FloatingShapes } from "./Shapes";

const highlights = [
  {
    icon: <FiSmartphone size={20} />,
    title: "Mobile Development",
    desc: "Android (Kotlin, Jetpack Compose) & Flutter specialist",
  },
  {
    icon: <FiCode size={20} />,
    title: "Clean Architecture",
    desc: "MVVM, BLoC, and scalable app architectures",
  },
  {
    icon: <FiServer size={20} />,
    title: "Fullstack Capable",
    desc: "Backend API design, REST integration & optimization",
  },
  {
    icon: <FiAward size={20} />,
    title: "Award Winner",
    desc: "Hackathon finalist & Bangkit Academy graduate",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 md:py-28 px-6 overflow-hidden" ref={ref}>
      <DotPattern />
      <FloatingShapes />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="About"
          title="Turning ideas into polished apps"
          icon={<FiUser size={14} />}
          isInView={isInView}
        />

        <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-3 space-y-4 text-muted leading-relaxed"
          >
            <p>
              I&apos;m a Mid-Level Mobile Developer with over 3 years of
              experience designing and developing applications that combine
              strong functionality with great user experience.
            </p>
            <p>
              I enjoy turning ideas into polished features, building efficient
              architectures, and optimizing apps for performance and
              scalability — staying close to modern mobile engineering trends.
            </p>
            <p>
              Graduated{" "}
              <span className="text-foreground font-medium">Cum Laude</span>{" "}
              from Universitas Teknologi Bandung with a Bachelor of Informatics
              Engineering (GPA 3.72/4.00). My goal is always to deliver
              solutions that meet business needs while creating meaningful
              value for users.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-2 grid grid-cols-2 gap-3"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="p-4 rounded-xl border border-card-border bg-card-bg/40 hover:bg-card-bg/70 transition-colors"
              >
                <div className="text-accent-light mb-3">{item.icon}</div>
                <h4 className="font-medium text-sm mb-1 text-foreground">
                  {item.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-card-border"
        >
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted mb-5">
            Tools I work with
          </p>
          <TechMarquee />
        </motion.div>
      </div>
    </section>
  );
}
