"use client";

import { motion } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiArrowRight,
} from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { fadeInUp } from "@/utils/animations";
import SectionWrapper from "./SectionWrapper";
import portfolioData from "@/data/portfolio.json";

export default function Contact() {
  const { contact, name } = portfolioData;

  return (
    <SectionWrapper id="contact" subtitle="Contact">
      <div className="max-w-3xl">
        {/* Headline */}
        <motion.div variants={fadeInUp} className="mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-tight">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-muted-light text-lg leading-relaxed max-w-xl">
            I&apos;m always open to discussing new opportunities, product ideas,
            or ways I can help your team ship faster.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div variants={fadeInUp} className="mb-14">
          <a
            href={`mailto:${contact.email}?subject=Hello ${name.split(" ")[0]} — Let's Talk&body=Hi ${name.split(" ")[0]},%0D%0A%0D%0AI'd love to discuss a potential project with you.%0D%0A%0D%0ABest regards`}
            className="group inline-flex items-center gap-4 px-8 py-5 rounded-xl bg-accent hover:bg-accent-light text-white transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
          >
            <HiMail size={22} />
            <div className="text-left">
              <div className="text-sm font-semibold">Send me an email</div>
              <div className="text-xs text-white/60 mt-0.5">{contact.email}</div>
            </div>
            <HiArrowRight
              size={16}
              className="ml-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Contact details + socials */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 pt-8 border-t border-glass-border"
        >
          <a
            href={`tel:+91${contact.phone}`}
            className="flex items-center gap-2.5 text-sm text-muted hover:text-muted-light transition-colors duration-300"
          >
            <HiPhone size={14} className="text-muted/60" />
            +91 {contact.phone}
          </a>
          <div className="flex items-center gap-2.5 text-sm text-muted">
            <HiLocationMarker size={14} className="text-muted/60" />
            {contact.location}
          </div>

          <div className="sm:ml-auto flex items-center gap-2">
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted/50 hover:text-muted-light hover:bg-white/[0.03] transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={17} />
              </a>
            )}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted/50 hover:text-muted-light hover:bg-white/[0.03] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
