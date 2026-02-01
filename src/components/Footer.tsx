'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const garfieldWisdom = [
  "I hate Mondays.",
  "Diet is 'die' with a 't'.",
  "Love me, feed me, never leave me.",
  "I'm not overweight. I'm undertall.",
  "Big, fat, hairy deal.",
  "Sleep is beautiful. Never wake up.",
  "I never met a lasagna I didn't like.",
  "Exercise? I thought you said extra fries!",
  "The only thing active about me is my imagination.",
  "If you want to appear smarter, hang around someone stupider.",
];

const quickLinks = [
  { name: 'Memes', href: '#memes' },
  { name: 'Comics', href: '#comics' },
  { name: 'About', href: '#about' },
];

export default function Footer() {
  const [wisdom, setWisdom] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWisdom(garfieldWisdom[Math.floor(Math.random() * garfieldWisdom.length)]);
  }, []);

  const refreshWisdom = () => {
    setWisdom(garfieldWisdom[Math.floor(Math.random() * garfieldWisdom.length)]);
  };

  return (
    <footer id="about" className="relative bg-gradient-to-t from-black via-garfield-purple/20 to-transparent pt-16 pb-8">
      {/* Retro grid overlay */}
      <div className="absolute inset-0 retro-grid opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Garfield Wisdom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-garfield-pink mb-4 font-comic">
            🐱 Garfield&apos;s Wisdom 🐱
          </h3>
          <motion.blockquote
            key={wisdom}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xl md:text-2xl italic text-garfield-orange font-comic max-w-2xl mx-auto"
          >
            &ldquo;{mounted ? wisdom : '...'}&rdquo;
          </motion.blockquote>
          <motion.button
            onClick={refreshWisdom}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 px-4 py-2 bg-garfield-orange/20 border border-garfield-orange rounded-full text-garfield-orange hover:bg-garfield-orange hover:text-black transition-colors font-comic"
          >
            ✨ More Wisdom ✨
          </motion.button>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-xl font-bold text-garfield-cyan mb-3 font-comic">About</h4>
            <p className="text-gray-400 leading-relaxed">
              A Y2K/vaporwave tribute to the world&apos;s most relatable cat. 
              Celebrating laziness, lasagna, and the eternal hatred of Mondays since 1978.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-xl font-bold text-garfield-cyan mb-3 font-comic">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-garfield-pink transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vibes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-xl font-bold text-garfield-cyan mb-3 font-comic">Vibes Only</h4>
            <div className="text-3xl space-x-2">
              <span className="hover:animate-bounce inline-block cursor-pointer">🍝</span>
              <span className="hover:animate-bounce inline-block cursor-pointer">😴</span>
              <span className="hover:animate-bounce inline-block cursor-pointer">🐱</span>
              <span className="hover:animate-bounce inline-block cursor-pointer">💜</span>
              <span className="hover:animate-bounce inline-block cursor-pointer">✨</span>
            </div>
            <p className="text-gray-500 text-sm mt-3">No Mondays allowed</p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-garfield-purple/30 pt-6 text-center"
        >
          <p className="text-gray-500 text-sm font-comic">
            Made with 🧡 and lots of lasagna • {new Date().getFullYear()}
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Garfield © Paws, Inc. This is a fan tribute site.
          </p>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-10 text-4xl opacity-30 hidden md:block"
      >
        🍕
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 right-10 text-4xl opacity-30 hidden md:block"
      >
        💤
      </motion.div>
    </footer>
  );
}
