import { motion, type Variants } from 'motion/react';
// import { X } from 'phosphor-react';
// import GithubLogo from 'phosphor-react';
// import LinkedinLogo from 'phosphor-react';
import { OrigLink as Link } from './link';
import { navLinks } from '@/content/navlinks';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/rogeonee' },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/egor-bezriadin/',
  },
];

interface FullScreenNavProps {
  isOpen: boolean;
  onClose(): void;
}

const variants: Variants = {
  open: {
    height: '100%',
    pointerEvents: 'all',
    opacity: 1,
  },
  closed: {
    height: 0,
    pointerEvents: 'none',
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
      animate={props.isOpen ? 'open' : 'closed'}
      variants={variants}
      className="bg-secondary text-primary fixed top-0 left-0 w-screen min-h-screen py-16 md:py-32 overflow-auto"
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
            Close
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
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
