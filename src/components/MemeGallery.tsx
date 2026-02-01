"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Meme {
  id: number;
  url: string;
  title: string;
  caption: string;
}

const memes: Meme[] = [
  {
    id: 1,
    url: "/memes/meme1.png",
    title: "Monday Blues",
    caption: "I hate Mondays... but I love lasagna more",
  },
  {
    id: 2,
    url: "/memes/meme2.jpg",
    title: "Lasagna Dreams",
    caption: "When the lasagna hits different at 3am",
  },
  {
    id: 3,
    url: "/memes/meme3.jpg",
    title: "Nap Time",
    caption: "Sleep is just death being shy",
  },
  {
    id: 4,
    url: "/memes/meme4.jpg",
    title: "Diet? Never Heard of Her",
    caption: "Calories don't count if no one sees you eat",
  },
  {
    id: 5,
    url: "/memes/meme5.jpg",
    title: "Odie Who?",
    caption: "That's a weird way to spell 'annoying'",
  },
  {
    id: 6,
    url: "/memes/meme6.jpg",
    title: "Jon's Cooking",
    caption: "I've seen things... terrible things",
  },
  {
    id: 7,
    url: "/memes/meme7.jpg",
    title: "Existential Dread",
    caption: "Life is meaningless but lasagna gives it purpose",
  },
  {
    id: 8,
    url: "/memes/meme8.jpg",
    title: "Maximum Loaf",
    caption: "I'm not fat, I'm fluffy and full of dreams",
  },
  {
    id: 9,
    url: "/memes/meme9.jpg",
    title: "Morning Person",
    caption: "Don't talk to me until I've had my 5th nap",
  },
  {
    id: 10,
    url: "/memes/meme10.jpg",
    title: "Weekend Mood",
    caption: "Finally, inner peace (and outer pizza)",
  },
  {
    id: 11,
    url: "/memes/meme11.jpg",
    title: "Self Care",
    caption: "Treating myself? I AM the treat",
  },
  {
    id: 12,
    url: "/memes/meme12.jpg",
    title: "Productivity King",
    caption: "I did nothing today and it was everything I hoped",
  },
];

function MemeCard({ meme, index }: { meme: Meme; index: number }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        rotate: Math.random() > 0.5 ? 2 : -2,
        zIndex: 10
      }}
      className="group relative cursor-pointer"
    >
      <div className="gradient-border card-glow">
        <div className="bg-light-card dark:bg-dark-card overflow-hidden">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden">
            {!isLoaded && (
              <div className="absolute inset-0 shimmer bg-garfield-lavender/20" />
            )}
            {isInView && (
              <img
                src={meme.url}
                alt={meme.title}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
              />
            )}
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/50 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium">{meme.caption}</p>
            </div>
          </div>

          {/* Title */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-garfield-purple dark:text-garfield-pink truncate">
              {meme.title}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs px-2 py-1 rounded-full bg-garfield-orange/20 text-garfield-orange">
                #garfield
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-garfield-pink/20 text-garfield-pink">
                #vibes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating emoji decoration */}
      <motion.span
        className="absolute -top-3 -right-3 text-2xl"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {["✨", "💖", "🧡", "💜", "🌟"][index % 5]}
      </motion.span>
    </motion.div>
  );
}

export default function MemeGallery() {
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

  return (
    <section id="memes" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold glow-text mb-4">
            <span className="rainbow-text">Meme Gallery</span> 🖼️
          </h2>
          <p className="text-lg text-garfield-purple/70 dark:text-garfield-pink/70 max-w-2xl mx-auto">
            The finest collection of Garfield energy on the internet.
            Curated for maximum vibes and minimal effort.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {memes.map((meme, index) => (
            <div key={meme.id} onClick={() => setSelectedMeme(meme)}>
              <MemeCard meme={meme} index={index} />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedMeme && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-bg/90 backdrop-blur-md"
              onClick={() => setSelectedMeme(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-2xl w-full gradient-border"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-light-card dark:bg-dark-card overflow-hidden">
                  <div className="relative aspect-square">
                    <img
                      src={selectedMeme.url}
                      alt={selectedMeme.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-garfield-orange mb-2">
                      {selectedMeme.title}
                    </h3>
                    <p className="text-garfield-purple dark:text-garfield-pink">
                      {selectedMeme.caption}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMeme(null)}
                  className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-garfield-pink text-white flex items-center justify-center text-xl font-bold hover:bg-garfield-hotpink transition-colors"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
