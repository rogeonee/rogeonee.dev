import React from "react";
import classNames from "classnames";
import { motion, type Variants } from "framer-motion";
import { FullScreenNav } from "./FullScreenNav";
import { Link } from "./Link.tsx";

const navLinks = [
  { name: "Home", pathname: "/" },
  { name: "About", pathname: "/#about" },
  { name: "Projects", pathname: "/#projects" },
  { name: "Contact", pathname: "/#contact" },
];

const variants: Variants = {
  initial: {
    opacity: 0,
    width: 0,
  },
  hover: {
    opacity: 0.5,
    width: "60%",
  },
  active: {
    opacity: 1,
    width: "50%",
  },
};

export function Header() {
  // Track current pathname
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Update path on change
  React.useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for changes in history to update pathname
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  return (
    <header className="w-full py-7 px-5 md:px-0 sticky top-0 bg-primary z-50">
      <nav className="w-full mx-auto flex items-center justify-between font-poppins max-w-6xl">
        <ul className="flex items-center gap-5">
          {navLinks.map((link) => {
            const isRouteActive = currentPath === link.pathname;

            return (
              <motion.li
                initial="initial"
                whileHover="hover"
                animate={isRouteActive ? "active" : "initial"}
                key={link.pathname}
                style={{ position: "relative" }}
              >
                <Link
                  className={classNames("relative block", isRouteActive && "font-semibold")}
                  href={link.pathname}
                  onClick={() => {
                    if (window.location.pathname !== link.pathname) {
                      window.history.pushState({}, "", link.pathname);
                      window.dispatchEvent(new Event("popstate"));
                    }
                  }}
                  override={true}
                >
                  {link.name}
                </Link>
                <motion.span
                  variants={variants}
                  className="absolute block left-0 -bottom-1 w-1/2 h-[2px] bg-secondary rounded-2xl"
                  style={{ backgroundColor: "black" }}
                />
              </motion.li>
            );
          })}
        </ul>

        <button
          aria-label="Open Menu"
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col items-end gap-y-1.5 w-8 md:w-10 hover:gap-y-2 transition-all ease-in-out duration-100 group"
        >
          <span
            className="h-0.5 bg-secondary group-hover:bg-accent w-full"
            style={{ backgroundColor: "black" }}
          />
          <span
            className="h-0.5 bg-secondary group-hover:bg-accent w-2/3"
            style={{ backgroundColor: "black" }}
          />
          <span
            className="h-0.5 bg-secondary group-hover:bg-accent w-full"
            style={{ backgroundColor: "black" }}
          />
        </button>
      </nav>

      <FullScreenNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
