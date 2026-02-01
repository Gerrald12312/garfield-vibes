"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-30 dark:opacity-20" />
      <div className="absolute inset-0 retro-grid" />

      {/* Floating Elements */}
      <FloatingEmoji emoji="🐱" className="top-1/4 left-1/4" delay={0} />
      <FloatingEmoji emoji="🍝" className="top-1/3 right-1/4" delay={0.5} />
      <FloatingEmoji emoji="💤" className="bottom-1/4 left-1/3" delay={1} />
      <FloatingEmoji emoji="🧡" className="bottom-1/3 right-1/3" delay={1.5} />
      <FloatingEmoji emoji="☕" className="top-1/2 left-1/6" delay={2} />
      <FloatingEmoji emoji="📺" className="top-2/3 right-1/6" delay={2.5} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="glow-text rainbow-text">GARFIELD</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-garfield-purple dark:text-garfield-pink mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            ✨ VIBES ✨
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-garfield-purple/70 dark:text-garfield-pink/70 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Your daily dose of lasagna-loving, Monday-hating,
            existential cat energy. Maximum aesthetic. Zero effort.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#memes"
              className="px-8 py-4 rounded-full bg-gradient-vaporwave text-white font-bold text-lg shadow-neon-orange hover:shadow-neon-pink transition-shadow"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Memes 🖼️
            </motion.a>
            <motion.a
              href="#comics"
              className="px-8 py-4 rounded-full border-2 border-garfield-pink text-garfield-pink font-bold text-lg hover:bg-garfield-pink hover:text-white transition-all"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Comics 📰
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { delay: 1.5, duration: 2, repeat: Infinity }
          }}
        >
          <span className="text-3xl">👇</span>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingEmoji({
  emoji,
  className,
  delay
}: {
  emoji: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.span
      className={`absolute text-4xl sm:text-5xl md:text-6xl opacity-60 pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 0.6,
        scale: 1,
        y: [0, -30, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: { delay: delay + 0.5, duration: 6, repeat: Infinity },
        rotate: { delay: delay + 0.5, duration: 8, repeat: Infinity }
      }}
    >
      {emoji}
    </motion.span>
  );
}
