"use client";

import {
  SiKotlin,
  SiAndroid,
  SiFlutter,
  SiDart,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiNestjs,
  SiDotnet,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGitlab,
  SiFigma,
  SiJetpackcompose,
} from "react-icons/si";
import type { ReactNode } from "react";

type Item = { icon: ReactNode; name: string; color: string };

const items: Item[] = [
  { icon: <SiKotlin size={22} />, name: "Kotlin", color: "#7F52FF" },
  { icon: <SiJetpackcompose size={22} />, name: "Jetpack Compose", color: "#4285F4" },
  { icon: <SiAndroid size={22} />, name: "Android", color: "#3DDC84" },
  { icon: <SiFlutter size={22} />, name: "Flutter", color: "#02569B" },
  { icon: <SiDart size={22} />, name: "Dart", color: "#0175C2" },
  { icon: <SiTypescript size={22} />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiReact size={22} />, name: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs size={22} />, name: "Next.js", color: "currentColor" },
  { icon: <SiTailwindcss size={22} />, name: "Tailwind", color: "#38BDF8" },
  { icon: <SiLaravel size={22} />, name: "Laravel", color: "#FF2D20" },
  { icon: <SiNestjs size={22} />, name: "NestJS", color: "#E0234E" },
  { icon: <SiDotnet size={22} />, name: ".NET", color: "#512BD4" },
  { icon: <SiFirebase size={22} />, name: "Firebase", color: "#FFCA28" },
  { icon: <SiPostgresql size={22} />, name: "PostgreSQL", color: "#4169E1" },
  { icon: <SiMysql size={22} />, name: "MySQL", color: "#4479A1" },
  { icon: <SiMongodb size={22} />, name: "MongoDB", color: "#47A248" },
  { icon: <SiGit size={22} />, name: "Git", color: "#F05032" },
  { icon: <SiGitlab size={22} />, name: "GitLab CI", color: "#FC6D26" },
  { icon: <SiFigma size={22} />, name: "Figma", color: "#F24E1E" },
];

export default function TechMarquee() {
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex gap-3 animate-marquee whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item.name}-${i}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border bg-card-bg/40 text-sm text-foreground hover:border-accent-light/40 hover:bg-card-bg/70 transition-colors shrink-0"
          >
            <span style={{ color: item.color }}>{item.icon}</span>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
