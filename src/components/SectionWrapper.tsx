"use client";

import { motion } from "framer-motion";
import { staggerContainer, lineReveal } from "@/utils/animations";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  title,
  subtitle,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-28 md:py-36 ${className}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        className="max-w-6xl mx-auto px-5 sm:px-8"
      >
        {(title || subtitle) && (
          <div className="mb-20 max-w-2xl">
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              >
                {subtitle}
              </motion.p>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-tight"
              >
                {title}
              </motion.h2>
            )}
            <motion.div
              variants={lineReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 h-px w-20 bg-accent/40"
            />
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
