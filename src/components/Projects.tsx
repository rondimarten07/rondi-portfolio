"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiX, FiLayers, FiArrowUpRight } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { getTechMeta } from "@/lib/techMeta";

const categories = ["All", "Mobile", "Web", "Design", "Game"] as const;
type Category = (typeof categories)[number];
type Project = (typeof projects)[number];

const categoryStyle: Record<Exclude<Category, "All">, string> = {
  Mobile: "bg-indigo-500/15 text-indigo-400 border-indigo-500/40",
  Web: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40",
  Design: "bg-pink-500/15 text-pink-400 border-pink-500/40",
  Game: "bg-amber-500/15 text-amber-400 border-amber-500/40",
};

const projects = [
  {
    title: "PulzZ X",
    desc: "Smart payment app for top-ups, data packages, electricity tokens, bill payments, game vouchers, and e-wallet balance — all in one fast and affordable app.",
    image: "/projects/pulzx.png",
    tech: ["Kotlin", "MVVM", "Android Native"],
    category: "Mobile" as Category,
    link: "https://play.google.com/store/apps/details?id=co.id.pixel.mobile",
  },
  {
    title: "BaGi",
    desc: "Platform for sharing reusable secondhand goods, powered by ML-based item condition detection. Built to reduce waste and support sustainable development goals.",
    image: "/projects/bagi.png",
    tech: ["Kotlin", "MVVM", "Hilt", "Retrofit", "ML Model"],
    category: "Mobile" as Category,
    link: "https://github.com/rondimarten07/Apps-BaGi/tree/mobile-development",
    github: true,
  },
  {
    title: "FavMovies",
    desc: "Movie discovery app showcasing trending films with favorites feature. Built with Clean Architecture, dependency injection, and CI/CD pipeline.",
    image: "/projects/favmovies.jpg",
    tech: ["Kotlin", "Clean Architecture", "Koin", "Room", "CI/CD"],
    category: "Mobile" as Category,
    link: "https://github.com/rondimarten07/FavoriteMovies",
    github: true,
  },
  {
    title: "Ron Eshop",
    desc: "E-commerce mobile app focused on electronics sales with a clean shopping experience built in Flutter.",
    image: "/projects/roneshop.png",
    tech: ["Flutter"],
    category: "Mobile" as Category,
    link: "https://github.com/rondimarten07/flutter_uts_rondi",
    github: true,
  },
{
    title: "hairGO",
    desc: "UI/UX design for a contactless barbershop booking app — skip the queue and book from home. Designed during the COVID-19 pandemic.",
    image: "/projects/hairgo.png",
    tech: ["Figma", "UI/UX"],
    category: "Design" as Category,
    link: "https://bisa.design/portofolio/detail/MTAwOQ",
  },
  {
    title: "Trash Force",
    desc: "Educational game that teaches players to sort waste by type, promoting proper recycling habits through interactive gameplay.",
    image: "/projects/trashforce.jpg",
    tech: ["C#", "Unity"],
    category: "Game" as Category,
    link: "https://arleigh.itch.io/trash-force",
  },
  {
    title: "BTN Logmind",
    desc: "Internal data management platform for Bank BTN unifying ALM, SBU, Data Parameter, Blast Campaign, Patching Data, Ticketing, and a customer-portfolio chatbot in one console. Contributed end-to-end to the ALM and Data Parameter modules.",
    image: "/projects/bank-btn.png",
    tech: ["Web", "Banking", "Chatbot", "Internal Platform"],
    category: "Web" as Category,
  },
  {
    title: "Rowawi Clinic System",
    desc: "End-to-end clinic ERP for Klinik Rowawi, a leading Bandung specialist clinic in dermatology, aesthetic dermatology, and venereology. Handles reservations, billing, pharmacy, cashier, patient deposits, master data, and satisfaction surveys in one platform.",
    image: "/projects/sim-rowawi.png",
    tech: ["Web", "Healthcare ERP", "Reservation", "Billing"],
    category: "Web" as Category,
  },
  {
    title: "CafeMatch",
    desc: "Cafe discovery platform — explore Bandung's coffee scene with a map-based search, vibe-tagged filters (work, meeting, brunch, dates), accessibility filters, plus social features for check-ins and interactions.",
    image: "/projects/cafe-match.png",
    tech: ["Web", "Geolocation", "Social", "Check-in"],
    category: "Web" as Category,
  },
  {
    title: "Engine OTP",
    desc: "WhatsApp-based OTP gateway distributing one-time passwords to downstream products via per-app API keys. Includes delivery logs, Swagger-documented endpoints, and live connection status monitoring.",
    image: "/projects/engine-otp.png",
    tech: ["Backend", "WhatsApp API", "Swagger", "Multi-tenant"],
    category: "Web" as Category,
  },
  {
    title: "ESS Komatsu",
    desc: "Komatsu Indonesia's Employee Self-Service portal — a unified HR & operations platform covering attendance, leave, medical claims, asset management, room booking, invoices, travel requests, and ICT support.",
    image: "/projects/ess-komatsu.png",
    tech: ["Web", "ERP", "HRIS", "Enterprise"],
    category: "Web" as Category,
  },
  {
    title: "Sheerly",
    desc: "Finance dashboard reconciling marketplace revenue for online sellers — tracks gross sales, platform fees, refunds, net income, and cash projections, with deep CoA breakdowns for TikTok Shop and Shopee.",
    image: "/projects/sheerly.png",
    tech: ["Web", "Finance", "Shopee API", "TikTok API"],
    category: "Web" as Category,
  },
  {
    title: "TelU-X",
    desc: "Telkom University's flagship e-learning platform — a Udemy-style course marketplace with 80+ courses, 2,500+ active students, and 24/7 learning access through structured curricula led by university instructors.",
    image: "/projects/telux.png",
    tech: ["Web", "E-Learning", "EdTech"],
    category: "Web" as Category,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomed) setZoomed(false);
        else setSelected(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, zoomed]);

  useEffect(() => {
    if (!selected) setZoomed(false);
  }, [selected]);

  return (
    <section id="projects" className="relative py-20 md:py-28 px-6" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built"
          icon={<FiLayers size={14} />}
          isInView={isInView}
        />

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => {
            const isActive = filter === cat;
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-[0_4px_16px_rgba(99,102,241,0.35)]"
                    : "border-card-border text-muted hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {cat}
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full tabular-nums ${
                    isActive
                      ? "bg-white/25 text-white"
                      : "bg-card-bg text-muted/70 border border-card-border"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              onClick={() => setSelected(project)}
              className="group relative rounded-2xl border border-card-border bg-card-bg/40 overflow-hidden hover:border-accent-light/50 hover:bg-card-bg/70 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Outer hover glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-indigo-500/30 group-hover:via-purple-500/20 group-hover:to-indigo-500/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none -z-10" />

              {/* Top accent line */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-accent-light/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Browser-style image frame */}
              <div className="relative">
                {/* Window chrome bar */}
                <div className="flex items-center gap-1.5 px-3.5 py-2 border-b border-card-border bg-card-bg/60">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-auto text-[10px] font-mono text-muted/60 truncate">
                    {project.title.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden border-b border-card-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                  />
                  {/* Hover dark overlay + reveal CTA */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full bg-accent-light text-white shadow-lg">
                      View details
                      <FiArrowUpRight size={12} />
                    </span>
                  </div>
                  {/* Category badge — color per category, theme-neutral */}
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md border shadow-sm ${
                      categoryStyle[project.category as Exclude<Category, "All">]
                    }`}
                  >
                    {project.category}
                  </span>
                  {/* External link on image */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 w-7 h-7 rounded-full bg-card-bg/95 backdrop-blur-md border border-card-border text-foreground hover:text-accent-light hover:border-accent-light/50 flex items-center justify-center transition-colors shadow-sm"
                      aria-label="Open project"
                    >
                      {project.github ? <FiGithub size={12} /> : <FiExternalLink size={12} />}
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-semibold text-base text-foreground mb-2 group-hover:text-accent-light transition-colors flex items-center gap-1.5">
                  {project.title}
                  <FiArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                  />
                </h4>
                <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3 flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => {
                    const meta = getTechMeta(t);
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-md bg-card-bg/80 text-foreground/80 border border-card-border"
                      >
                        {meta && (
                          <span
                            className="text-[11px] flex items-center"
                            style={{ color: meta.color }}
                          >
                            {meta.icon}
                          </span>
                        )}
                        {t}
                      </span>
                    );
                  })}
                  {project.tech.length > 4 && (
                    <span className="inline-flex items-center text-[10px] font-medium px-2 py-1 rounded-md text-muted border border-dashed border-card-border">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: "var(--color-background)" }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-card-border shadow-2xl"
            >
              {/* Sticky header bar */}
              <div
                style={{ background: "var(--color-card-bg)" }}
                className="sticky top-0 z-10 flex items-center justify-between gap-3 px-5 py-3.5 border-b border-card-border"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border shrink-0 ${
                      categoryStyle[selected.category as Exclude<Category, "All">]
                    }`}
                  >
                    {selected.category}
                  </span>
                  <span className="text-sm font-semibold text-foreground truncate">
                    {selected.title}
                  </span>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-card-bg transition-colors cursor-pointer"
                >
                  <FiX size={18} />
                </button>
              </div>

              {/* Image (click to zoom) */}
              <button
                type="button"
                onClick={() => setZoomed(true)}
                aria-label="View full-size image"
                style={{ background: "var(--color-card-bg)" }}
                className="group/img relative block w-full h-64 md:h-80 overflow-hidden cursor-zoom-in border-b border-card-border"
              >
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.03]"
                />
                <span
                  style={{ background: "var(--color-card-bg)" }}
                  className="absolute bottom-3 right-3 text-[10px] font-medium px-2.5 py-1 rounded-full text-foreground border border-card-border opacity-0 group-hover/img:opacity-100 transition-opacity shadow-sm"
                >
                  Click to zoom
                </span>
              </button>

              {/* Content */}
              <div
                style={{ background: "var(--color-background)" }}
                className="p-6 md:p-8"
              >
                <p className="text-base text-muted leading-relaxed mb-6">
                  {selected.desc}
                </p>

                <div className="mb-6">
                  <h5 className="text-xs font-mono text-muted mb-3 tracking-[0.25em] uppercase">
                    Tech Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => {
                      const meta = getTechMeta(t);
                      return (
                        <span
                          key={t}
                          style={{ background: "var(--color-card-bg)" }}
                          className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg text-foreground border border-card-border"
                        >
                          {meta && (
                            <span
                              className="text-base flex items-center"
                              style={{ color: meta.color }}
                            >
                              {meta.icon}
                            </span>
                          )}
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium hover:shadow-[0_8px_24px_rgba(99,102,241,0.4)] transition-shadow"
                  >
                    {selected.github ? <FiGithub size={16} /> : <FiExternalLink size={16} />}
                    {selected.github ? "View on GitHub" : "Open Project"}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image lightbox */}
      <AnimatePresence>
        {selected && zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setZoomed(false)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomed(false);
              }}
              aria-label="Close image"
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <FiX size={20} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
