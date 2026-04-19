"use client";

import { motion } from "framer-motion";
import { HiLocationMarker, HiCalendar, HiTrendingUp } from "react-icons/hi";
import { fadeInUp } from "@/utils/animations";
import SectionWrapper from "./SectionWrapper";
import portfolioData from "@/data/portfolio.json";

interface ExperienceItem {
  company: string;
  title: string;
  start_date: string;
  end_date: string;
  duration: string;
  location: string;
  highlights: string[];
  promotions?: { title: string; period: string }[];
}

export default function Experience() {
  const experience = portfolioData.experience as ExperienceItem[];
  const { education } = portfolioData;

  return (
    <SectionWrapper
      id="experience"
      title="Where I've Worked"
      subtitle="Experience"
      className="bg-surface"
    >
      <div className="space-y-5">
        {experience.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group"
          >
            <div className="rounded-xl bg-card border border-card-border p-7 sm:p-9 transition-all duration-500 hover:border-white/[0.08]">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-lg font-bold tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="text-accent text-sm font-medium mt-1">
                    {exp.title}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:text-right">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                    <HiCalendar size={12} className="text-muted/60" />
                    {exp.start_date} — {exp.end_date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase bg-white/[0.03] text-muted-light border border-glass-border rounded-md">
                    {exp.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-muted/70 mb-5">
                <HiLocationMarker size={12} />
                {exp.location}
              </div>

              {/* Promotions timeline (for Ficode) */}
              {exp.promotions && exp.promotions.length > 0 && (
                <div className="mb-6 pl-1">
                  <div className="flex items-center gap-2 mb-4">
                    <HiTrendingUp size={14} className="text-accent/70" />
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted">
                      Career Progression
                    </span>
                  </div>
                  <div className="relative ml-2">
                    <div className="absolute left-[3px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/30 via-card-border to-transparent" />
                    <div className="space-y-3">
                      {exp.promotions.map((promo, pi) => (
                        <motion.div
                          key={pi}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: pi * 0.06,
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="flex items-center gap-4 pl-5 relative"
                        >
                          <div className={`absolute left-0 w-[7px] h-[7px] rounded-full border-2 ${
                            pi === 0
                              ? "bg-accent border-accent shadow-sm shadow-accent/30"
                              : "bg-card border-card-border"
                          }`} />
                          <span className={`text-sm font-medium ${pi === 0 ? "text-foreground" : "text-muted-light"}`}>
                            {promo.title}
                          </span>
                          <span className="text-[11px] text-muted/60 tabular-nums">
                            {promo.period}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Highlights */}
              <ul className="space-y-2">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-muted-light"
                  >
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16"
      >
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-6">
          Education
        </p>
        {education.map((edu, i) => (
          <div
            key={i}
            className="rounded-xl bg-card border border-card-border p-7"
          >
            <h4 className="font-bold text-sm">{edu.institution}</h4>
            <p className="text-accent text-xs font-medium mt-1.5">
              {edu.degree} — {edu.field_of_study}
            </p>
            <p className="text-[11px] text-muted mt-2 tabular-nums">
              {edu.start_date} — {edu.end_date}
            </p>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
