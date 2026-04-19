"use client";

import { motion } from "framer-motion";
import {
  SiFlutter,
  SiDart,
  SiFastapi,
  SiKotlin,
  SiSwift,
  SiFirebase,
  SiTypescript,
  SiPython,
  SiGraphql,
  SiGit,
  SiPostman,
  SiSqlite,
  SiFigma,
  SiStripe,
  SiGooglemaps,
  SiGithubactions,
} from "react-icons/si";
import { FaApple, FaAndroid } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import SectionWrapper from "./SectionWrapper";
import portfolioData from "@/data/portfolio.json";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  SiFlutter,
  SiDart,
  SiFastapi,
  SiKotlin,
  SiSwift,
  SiFirebase,
  SiTypescript,
  SiPython,
  SiGraphql,
  SiGit,
  SiMicrosoft: VscAzure,
  SiPostman,
  SiSqlite,
  SiFigma,
  SiStripe,
  SiGooglemaps,
  SiGithubactions,
  SiApple: FaApple,
  SiAndroid: FaAndroid,
};

export default function About() {
  const { summary, top_skills, skill_categories } = portfolioData;

  return (
    <SectionWrapper id="about" title="About Me" subtitle="Background">
      <div className="space-y-16">
        {/* Summary */}
        <motion.div variants={fadeInUp} className="max-w-3xl space-y-6">
          <p className="text-muted-light text-lg leading-relaxed">
            {summary}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-500/5 border border-green-500/10 text-green-400/80 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-md bg-white/[0.02] border border-glass-border text-muted text-xs font-medium">
              Bangalore, India
            </span>
          </div>
        </motion.div>

        {/* Skills by category */}
        <motion.div variants={staggerContainer}>
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-8"
          >
            Tech Stack
          </motion.p>

          <div className="space-y-6">
            {skill_categories.map((cat) => {
              const skills = top_skills.filter((s) => s.category === cat.key);
              if (skills.length === 0) return null;
              return (
                <motion.div key={cat.key} variants={fadeInUp}>
                  <p className="text-[11px] font-medium tracking-wider uppercase text-muted/50 mb-3">
                    {cat.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => {
                      const IconComponent = iconMap[skill.icon];
                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-glass-border bg-white/[0.01] transition-all duration-300 cursor-default"
                        >
                          {IconComponent && (
                            <IconComponent size={14} className="text-muted/70 flex-shrink-0" />
                          )}
                          <span className="text-xs text-muted-light font-medium">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
