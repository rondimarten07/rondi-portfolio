"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  align?: "left" | "center";
  isInView: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  icon,
  align = "left",
  isInView,
}: Props) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col gap-3 mb-12 md:mb-16 ${
        isCenter ? "items-center text-center" : "items-start"
      }`}
    >
      <div className="flex items-center gap-2.5">
        {icon && (
          <span className="text-accent-light flex items-center justify-center">
            {icon}
          </span>
        )}
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-3xl">
        {title}
      </h2>
      {description && (
        <p
          className={`text-base text-muted leading-relaxed max-w-2xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
