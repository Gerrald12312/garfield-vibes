"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Comic {
  date: string;
  imageUrl: string;
  title: string;
}

function getRandomDate(): string {
  const start = new Date(1978, 5, 19); // Garfield started June 19, 1978
  const end = new Date();
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomDate.toISOString().split("T")[0];
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ComicViewer() {
  const [comic, setComic] = useState<Comic | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomComic = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const randomDate = getRandomDate();

      // Using a placeholder approach since GoComics doesn't have a public API
      // In production, you'd use a backend proxy or official API
      const imageUrl = `https://picsum.photos/seed/comic${randomDate}/900/300`;

      setComic({
        date: randomDate,
        imageUrl,
        title: `Garfield - ${formatDate(randomDate)}`,
      });
    } catch {
      setError("Failed to fetch comic. Try again!");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section id="comics" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 retro-grid opacity-50" />
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-20"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        🐱
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-6xl opacity-20"
        animate={{ rotate: -360, y: [0, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        🍝
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold glow-text mb-4">
            <span className="rainbow-text">Random Comic</span> 📰
          </h2>
          <p className="text-lg text-garfield-purple/70 dark:text-garfield-pink/70 max-w-2xl mx-auto mb-8">
            Spin the wheel of Garfield destiny! Every click reveals a classic strip
            from the archives (1978 - present).
          </p>

          {/* Fetch Button */}
          <motion.button
            onClick={fetchRandomComic}
            disabled={loading}
            className="relative px-8 py-4 rounded-full bg-gradient-vaporwave text-white font-bold text-lg shadow-neon-pink disabled:opacity-50 overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-y2k opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative flex items-center gap-2">
              {loading ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    🎰
                  </motion.span>
                  Loading...
                </>
              ) : (
                <>
                  <span className="text-xl">🎲</span>
                  Get Random Comic
                </>
              )}
            </span>
          </motion.button>
        </motion.div>

        {/* Comic Display */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-8"
            >
              <p className="text-red-500 dark:text-red-400 text-lg">
                😿 {error}
              </p>
            </motion.div>
          )}

          {comic && !loading && (
            <motion.div
              key={comic.date}
              initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              transition={{ type: "spring", damping: 20 }}
              className="gradient-border card-glow"
            >
              <div className="bg-light-card dark:bg-dark-card overflow-hidden">
                {/* Comic Header */}
                <div className="p-4 sm:p-6 border-b border-garfield-pink/20">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-garfield-orange">
                      {comic.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-garfield-purple/20 text-garfield-purple dark:text-garfield-lavender text-sm">
                      📅 {formatDate(comic.date)}
                    </span>
                  </div>
                </div>

                {/* Comic Image */}
                <div className="relative aspect-[3/1] bg-white">
                  <Image
                    src={comic.imageUrl}
                    alt={comic.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 900px"
                  />
                </div>

                {/* Comic Footer */}
                <div className="p-4 sm:p-6 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl"
                      title="Love it!"
                    >
                      💖
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl"
                      title="Share"
                    >
                      🔗
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl"
                      title="Save"
                    >
                      💾
                    </motion.button>
                  </div>
                  <p className="text-sm text-garfield-purple/60 dark:text-garfield-pink/60">
                    © Paws, Inc. • Jim Davis
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {!comic && !loading && !error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <motion.div
                className="text-8xl mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🐱
              </motion.div>
              <p className="text-xl text-garfield-purple/60 dark:text-garfield-pink/60">
                Click the button above to discover a random Garfield comic!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { emoji: "📅", stat: "17,000+", label: "Comics Published" },
            { emoji: "🌍", stat: "2,500+", label: "Newspapers Worldwide" },
            { emoji: "🎂", stat: "1978", label: "Year Created" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center p-6 rounded-2xl bg-light-card/50 dark:bg-dark-card/50 backdrop-blur-sm border border-garfield-pink/20"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-4xl mb-2 block">{item.emoji}</span>
              <p className="text-3xl font-bold text-garfield-orange mb-1">
                {item.stat}
              </p>
              <p className="text-sm text-garfield-purple/60 dark:text-garfield-pink/60">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
