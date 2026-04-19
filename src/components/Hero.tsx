"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import portfolioData from "@/data/portfolio.json";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      delay: 1.2,
      ease: [0.16, 1, 0.3, 1],
    });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const { name, current_title, stats } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };
    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/[0.07] rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ x: mousePos.x * -0.3, y: mousePos.y * -0.3 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/[0.05] rounded-full blur-[140px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full py-32 md:py-40">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-light border border-glass-border rounded-full bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Available for work
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight"
          >
            I craft{" "}
            <span className="bg-gradient-to-r from-accent via-accent-light to-purple-400 bg-clip-text text-transparent">
              cross-platform
            </span>{" "}
            apps that enterprises rely on.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-muted text-lg sm:text-xl max-w-2xl leading-relaxed"
          >
            {name} — {current_title}.{" "}
            <span className="text-muted-light">
              7+ years shipping production Flutter apps for companies like Tata Communications, Myntra, and Spire.AI — from IoT to AI-powered enterprise platforms.
            </span>
          </motion.p>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent hover:bg-accent-light text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
          >
            View My Work
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-muted-light hover:text-foreground border border-glass-border hover:border-white/10 rounded-lg transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-muted hover:text-accent transition-all duration-300"
          >
            LinkedIn
            <HiArrowRight className="-rotate-45" size={14} />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-24 md:mt-32"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-glass-border rounded-xl overflow-hidden border border-glass-border">
            {stats.map((stat, i) => {
              const numericVal = parseInt(stat.value);
              const suffix = stat.value.replace(/\d/g, "");
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-card px-6 py-8 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                    {isNaN(numericVal) ? (
                      stat.value
                    ) : (
                      <AnimatedCounter value={numericVal} suffix={suffix} />
                    )}
                  </div>
                  <div className="mt-2 text-xs text-muted tracking-wider uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-glass-border flex items-start justify-center p-1.5"
        >
          <div className="w-0.5 h-1.5 bg-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
