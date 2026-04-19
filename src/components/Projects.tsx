"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
import { fadeInUp } from "@/utils/animations";
import SectionWrapper from "./SectionWrapper";
import portfolioData from "@/data/portfolio.json";

const categories = ["All", "Enterprise", "Mobile", "IoT"];
const INITIAL_COUNT = 6;

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_COUNT);

  const hasMore = filteredProjects.length > INITIAL_COUNT;

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setShowAll(false);
  };

  return (
    <SectionWrapper id="projects" title="Selected Work" subtitle="Projects">
      {/* Filter + count */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-wrap items-center gap-3 mb-14"
      >
        <div className="flex gap-1">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`relative px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-md transition-colors duration-300 ${
                  activeFilter === cat
                    ? "text-white"
                    : "text-muted hover:text-muted-light"
                }`}
              >
                {activeFilter === cat && (
                  <motion.span
                    layoutId="projectTab"
                    className="absolute inset-0 bg-white/[0.08] rounded-md"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">
                  {cat}
                  <span className="ml-1.5 text-[10px] text-muted/60">{count}</span>
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      <motion.div layout className="grid md:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="relative h-full rounded-xl bg-card border border-card-border p-7 sm:p-8 transition-all duration-500 hover:border-white/[0.08] hover:bg-card-hover flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted mt-0.5 truncate">
                      {project.subtitle}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-md ${
                      project.status === "Live"
                        ? "bg-green-500/8 text-green-400/90 border border-green-500/15"
                        : project.status === "In Production"
                        ? "bg-blue-500/8 text-blue-400/90 border border-blue-500/15"
                        : "bg-white/[0.03] text-muted border border-glass-border"
                    }`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full ${
                        project.status === "Live"
                          ? "bg-green-400"
                          : project.status === "In Production"
                          ? "bg-blue-400"
                          : "bg-muted"
                      }`}
                    />
                    {project.status}
                  </span>
                </div>

                {/* Company + Period */}
                <div className="flex items-center gap-3 mb-4 text-[11px] text-muted/60">
                  <span>{project.company}</span>
                  <span className="w-px h-3 bg-glass-border" />
                  <span className="tabular-nums">{project.period}</span>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-muted-light">
                      <span className="mt-[6px] w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech_stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-medium bg-white/[0.03] text-muted rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech_stack.length > 5 && (
                    <span className="px-2 py-0.5 text-[10px] font-medium text-muted/50 rounded">
                      +{project.tech_stack.length - 5}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-glass-border mt-auto">
                  <span className="text-[10px] text-muted/40 uppercase tracking-wider">
                    {project.platform.join(" · ")}
                  </span>
                  {project.live_url && project.live_url !== "#" && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-light hover:text-accent transition-colors duration-300"
                    >
                      View
                      <HiArrowRight size={11} className="-rotate-45" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show More / Less */}
      {hasMore && !showAll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted-light hover:text-foreground border border-glass-border hover:border-white/10 rounded-lg transition-all duration-300"
          >
            Show All Projects ({filteredProjects.length})
            <HiChevronDown size={16} />
          </button>
        </motion.div>
      )}
      {showAll && hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => setShowAll(false)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted hover:text-muted-light transition-colors duration-300"
          >
            Show Less
            <HiChevronDown size={16} className="rotate-180" />
          </button>
        </motion.div>
      )}
    </SectionWrapper>
  );
}
