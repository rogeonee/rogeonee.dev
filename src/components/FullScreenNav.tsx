import { motion, type Variants } from "framer-motion";
import { X } from "@phosphor-icons/react";
import { GithubLogo } from "./icons/github-logo";
import { LinkedinLogo } from "./icons/linkedin-logo";

const navLinks = [
    { name: "Home", pathname: "/" },
    { name: "About", pathname: "/about" },
    { name: "Contact", pathname: "/#contact" },
    { name: "Projects", pathname: "/projects" },
];

const socialLinks = [
    { name: "GitHub", url: "https://github.com/rogeonee", icon: GithubLogo },
    { name: "LinkedIn", url: "https://linkedin.com/in/egor-bezriadin/", icon: LinkedinLogo },
];

const variants: Variants = {
    open: {
      height: "100%",
      pointerEvents: "all",
      opacity: 1,
    },
    closed: {
      height: 0,
      pointerEvents: "none",
      opacity: 0,
    },
};

export function FullScreenNav({ isOpen, onClose }) {
    return (
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="bg-secondary text-primary fixed top-0 left-0 w-screen min-h-screen py-10 md:py-32 overflow-auto"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-0">
          <div className="flex flex-row justify-between">
            <ul className="flex flex-col gap-y-8">
              {navLinks.map((link) => (
                <li key={link.pathname}>
                  <a
                    onClick={(e) => {
                      onClose();
                      window.history.pushState({}, '', link.pathname);
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold hover:text-accent transition"
                    href={link.pathname}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
  
            <motion.button
              aria-label="Close Menu"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.92 }}
              onClick={onClose}
              className="h-16 group"
            >
              <X className="h-16 w-16 group-hover:fill-accent transition" />
            </motion.button>
          </div>
  
          <ul className="mt-20 md:mt-32 flex flex-row gap-10">
            {socialLinks.map((link) => (
              <li key={link.url}>
                <a
                  aria-label={link.name}
                  onClick={(e) => {
                    onClose();
                    window.location.href = link.url;
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <link.icon className="w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 hover:fill-accent transition" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
}