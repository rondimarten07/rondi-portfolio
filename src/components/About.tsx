"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiSmartphone, FiServer, FiAward } from "react-icons/fi";

const highlights = [
  {
    icon: <FiSmartphone size={24} />,
    title: "Mobile Development",
    desc: "Android (Kotlin, Jetpack Compose) & Flutter specialist",
  },
  {
    icon: <FiCode size={24} />,
    title: "Clean Architecture",
    desc: "MVVM, BLoC, and scalable app architectures",
  },
  {
    icon: <FiServer size={24} />,
    title: "Fullstack Capable",
    desc: "Backend API design, REST integration & optimization",
  },
  {
    icon: <FiAward size={24} />,
    title: "Award Winner",
    desc: "Hackathon finalist & Bangkit Academy graduate",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent-light mb-2 tracking-wider uppercase">
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              polished apps
            </span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted leading-relaxed mb-4">
              I&apos;m a Mid-Level Mobile Developer with over 3 years of experience
              designing and developing mobile applications that combine strong
              functionality with great user experience.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              I enjoy turning ideas into polished features, building efficient
              architectures, and optimizing apps for performance and scalability.
              I stay updated with modern mobile technologies and engineering
              trends.
            </p>
            <p className="text-muted leading-relaxed">
              Graduated <span className="text-foreground font-medium">Cum Laude</span> from
              Universitas Teknologi Bandung with a Bachelor of Informatics
              Engineering (GPA: 3.72/4.00). My goal is always to deliver
              solutions that meet business needs while creating meaningful value
              for users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="p-5 rounded-xl border border-card-border bg-card-bg/50 hover:border-accent-light/30 transition-all duration-300 group"
              >
                <div className="text-accent-light mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
