"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-light-bg/80 dark:bg-dark-bg/80 border-b border-garfield-pink/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="text-3xl sm:text-4xl"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              🐱
            </motion.span>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold glow-text rainbow-text">
              Garfield Vibes
            </h1>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#memes">Memes</NavLink>
            <NavLink href="#comics">Comics</NavLink>
            <NavLink href="#about">About</NavLink>
          </nav>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-vaporwave p-[2px] overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full rounded-full bg-light-card dark:bg-dark-card flex items-center justify-center">
              <motion.span
                className="text-2xl sm:text-3xl"
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </motion.span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="text-lg font-semibold text-garfield-purple dark:text-garfield-pink hover:text-garfield-orange transition-colors relative group"
      whileHover={{ y: -2 }}
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-vaporwave group-hover:w-full transition-all duration-300"
      />
    </motion.a>
  );
}
