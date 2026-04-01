"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const categories = ["All", "Mobile", "Web", "Design", "Game"] as const;
type Category = (typeof categories)[number];

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
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<Category>("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

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
              className="group rounded-xl border border-card-border bg-card-bg/30 overflow-hidden hover:border-accent-light/30 transition-all duration-300 hover:-translate-y-1"
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-muted hover:text-accent-light transition-colors"
                  >
                    {project.github ? <FiGithub size={16} /> : <FiExternalLink size={16} />}
                  </a>
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
    </section>
  );
}
