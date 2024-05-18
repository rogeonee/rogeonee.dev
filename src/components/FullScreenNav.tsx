import { motion, type Variants } from "framer-motion";
import { X } from "@phosphor-icons/react/dist/csr/X";
import { GithubLogo } from "./icons/github-logo";
import { LinkedinLogo } from "./icons/linkedin-logo";
import { Link } from "./Link.tsx";

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

interface FullScreenNavProps {
  isOpen: boolean;
  onClose(): void;
}

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

export function FullScreenNav(props: FullScreenNavProps) {
  if (!props.isOpen) {
    return null;
  }
  
  return (
    <motion.div
      initial="closed"
      animate={props.isOpen ? "open" : "closed"}
      variants={variants}
      className="bg-secondary text-primary fixed top-0 left-0 w-screen min-h-screen py-10 md:py-32 overflow-auto"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-0">
        <div className="flex flex-row justify-between">
          <ul className="flex flex-col gap-y-8">
            {navLinks.map((link) => (
              <li key={link.pathname}>
                <Link 
                  href={link.pathname}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold hover:text-accent transition"
                  onClick={() => {
                    props.onClose();
                  }}
                  override={true}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <motion.button
            aria-label="Close Menu"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.92 }}
            onClick={props.onClose}
            className="h-16 group"
          >
            <X className="h-16 w-16 group-hover:fill-accent transition" />
          </motion.button>
        </div>

        <ul className="mt-20 md:mt-32 flex flex-row gap-10">
          {socialLinks.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                aria-label={link.name}
                onClick={() => {
                  props.onClose();
                }}
                override={true}
              >
                <link.icon className="w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 hover:fill-accent transition" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}