"use client";

import { motion } from "framer-motion";
import { HiShieldCheck } from "react-icons/hi";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import SectionWrapper from "./SectionWrapper";
import portfolioData from "@/data/portfolio.json";

export default function IntuneSection() {
  const { intune_section } = portfolioData;

  return (
    <SectionWrapper
      id="intune"
      title={intune_section.title}
      subtitle={intune_section.subtitle}
      className="bg-surface"
    >
      <div className="space-y-14">
        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-muted-light text-lg leading-relaxed max-w-3xl"
        >
          {intune_section.description}
        </motion.p>

        {/* Capabilities grid */}
        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {intune_section.capabilities.map((cap, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group rounded-xl bg-card border border-card-border p-6 sm:p-7 transition-all duration-500 hover:border-white/[0.08] hover:bg-card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 text-accent">
                  <HiShieldCheck size={18} />
                </span>
                <h3 className="text-sm font-bold tracking-tight">
                  {cap.title}
                </h3>
              </div>
              <p className="text-[13px] text-muted leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech badges */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 pt-4">
          {["Microsoft Intune SDK", "Azure AD", "Kotlin (Android)", "Swift (iOS)", "Platform Channels", "MAM / MDM", "Conditional Access", "App Config"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-[11px] font-medium bg-accent/5 border border-accent/10 text-accent/80 rounded-md"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
