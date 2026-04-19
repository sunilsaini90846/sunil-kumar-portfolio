"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import portfolioData from "@/data/portfolio.json";

export default function Footer() {
  const { contact, name } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-xs text-muted/60">
            &copy; {currentYear} {name}
          </div>
          <div className="flex items-center gap-5">
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted/50 hover:text-muted-light transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
            )}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted/50 hover:text-muted-light transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-muted/50 hover:text-muted-light transition-colors duration-300"
              aria-label="Email"
            >
              <HiMail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
