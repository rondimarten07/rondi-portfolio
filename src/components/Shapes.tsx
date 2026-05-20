"use client";

import { motion } from "framer-motion";

/* ============================================================
 * Decorative SVG shapes. All shapes are pointer-events-none and
 * use accent-light / indigo / purple tones with low opacity so they
 * read as background texture in both light & dark mode.
 * ============================================================ */

export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06] ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
      }}
    />
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-[0.07] dark:opacity-[0.1] ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(var(--color-foreground) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        maskImage:
          "radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 80%)",
      }}
    />
  );
}

/** Floating geometric shapes (triangle, circle, square) */
export function FloatingShapes({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute top-10 right-[8%] w-16 h-16 md:w-24 md:h-24 text-indigo-500/15 dark:text-indigo-400/15"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <polygon points="50,5 95,90 5,90" fill="currentColor" />
      </motion.svg>

      <motion.svg
        viewBox="0 0 100 100"
        className="absolute bottom-[12%] left-[6%] w-12 h-12 md:w-20 md:h-20 text-purple-500/15 dark:text-purple-400/15"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <rect x="10" y="10" width="80" height="80" rx="12" fill="currentColor" />
      </motion.svg>

      <motion.svg
        viewBox="0 0 100 100"
        className="absolute top-1/3 left-[15%] w-8 h-8 md:w-12 md:h-12 text-emerald-500/15 dark:text-emerald-400/15"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="50" cy="50" r="45" fill="currentColor" />
      </motion.svg>

      <motion.svg
        viewBox="0 0 100 100"
        className="absolute bottom-1/3 right-[14%] w-10 h-10 md:w-16 md:h-16 text-amber-500/15 dark:text-amber-400/15"
        animate={{ y: [0, 15, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="50,15 85,50 50,85 15,50" fill="currentColor" />
      </motion.svg>
    </div>
  );
}

/** Subtle gradient blur orbs */
export function GradientOrbs({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
    </div>
  );
}

/** Decorative corner brackets — code-editor feel */
export function CornerBrackets({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden
    >
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-accent-light/20 rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-accent-light/20 rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-accent-light/20 rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-accent-light/20 rounded-br-lg" />
    </div>
  );
}

/** Diagonal lines stripe pattern */
export function DiagonalStripes({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06] ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, var(--color-foreground) 0, var(--color-foreground) 1px, transparent 1px, transparent 14px)",
      }}
    />
  );
}
