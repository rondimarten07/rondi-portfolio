"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

const categories = ["All", "Mobile", "Web", "Design", "Game"] as const;
type Category = (typeof categories)[number];
type Project = (typeof projects)[number];

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

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent-light mb-2 tracking-wider uppercase">
            Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              built
            </span>
          </h3>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                    : "border border-card-border text-muted hover:text-foreground hover:border-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              onClick={() => setSelected(project)}
              className="group rounded-xl border border-card-border bg-card-bg/30 overflow-hidden hover:border-accent-light/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/40 text-white/80 backdrop-blur-sm border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-base">{project.title}</h4>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg text-muted hover:text-accent-light transition-colors"
                    >
                      {project.github ? <FiGithub size={16} /> : <FiExternalLink size={16} />}
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent-light/10 text-accent-light border border-accent-light/20"
                    >
                      {t}
                    </span>
                  ))}
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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-card-border bg-background shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/40 backdrop-blur-sm text-white/80 hover:bg-black/60 hover:text-white transition-colors cursor-pointer"
              >
                <FiX size={18} />
              </button>

              {/* Image */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-t-2xl">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/50 text-white/90 backdrop-blur-sm border border-white/10">
                  {selected.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h4 className="text-2xl md:text-3xl font-bold">{selected.title}</h4>
                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-shadow"
                    >
                      {selected.github ? <FiGithub size={16} /> : <FiExternalLink size={16} />}
                      {selected.github ? "View on GitHub" : "Open Project"}
                    </a>
                  )}
                </div>

                <p className="text-base text-muted leading-relaxed mb-6">
                  {selected.desc}
                </p>

                <div>
                  <h5 className="text-xs font-mono text-accent-light mb-3 tracking-wider uppercase">
                    Tech Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-accent-light/10 text-accent-light border border-accent-light/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
