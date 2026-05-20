import { ReactNode } from "react";
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
  SiUnity,
  SiSharp,
  SiSwagger,
  SiWhatsapp,
} from "react-icons/si";

export type TechMeta = { icon: ReactNode; color: string };

const map: Record<string, TechMeta> = {
  kotlin: { icon: <SiKotlin />, color: "#7F52FF" },
  "jetpack compose": { icon: <SiJetpackcompose />, color: "#4285F4" },
  android: { icon: <SiAndroid />, color: "#3DDC84" },
  "android native": { icon: <SiAndroid />, color: "#3DDC84" },
  flutter: { icon: <SiFlutter />, color: "#02569B" },
  dart: { icon: <SiDart />, color: "#0175C2" },
  typescript: { icon: <SiTypescript />, color: "#3178C6" },
  react: { icon: <SiReact />, color: "#61DAFB" },
  "next.js": { icon: <SiNextdotjs />, color: "currentColor" },
  nextjs: { icon: <SiNextdotjs />, color: "currentColor" },
  tailwind: { icon: <SiTailwindcss />, color: "#38BDF8" },
  laravel: { icon: <SiLaravel />, color: "#FF2D20" },
  nestjs: { icon: <SiNestjs />, color: "#E0234E" },
  ".net": { icon: <SiDotnet />, color: "#512BD4" },
  firebase: { icon: <SiFirebase />, color: "#FFCA28" },
  postgresql: { icon: <SiPostgresql />, color: "#4169E1" },
  mysql: { icon: <SiMysql />, color: "#4479A1" },
  mongodb: { icon: <SiMongodb />, color: "#47A248" },
  git: { icon: <SiGit />, color: "#F05032" },
  gitlab: { icon: <SiGitlab />, color: "#FC6D26" },
  figma: { icon: <SiFigma />, color: "#F24E1E" },
  unity: { icon: <SiUnity />, color: "currentColor" },
  "c#": { icon: <SiSharp />, color: "#9B4F96" },
  swagger: { icon: <SiSwagger />, color: "#85EA2D" },
  "whatsapp api": { icon: <SiWhatsapp />, color: "#25D366" },
};

export function getTechMeta(name: string): TechMeta | null {
  return map[name.toLowerCase()] ?? null;
}
