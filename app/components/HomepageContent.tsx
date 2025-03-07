
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["logo", "graphic", "editorial", "UI", "UX", "event"];

const shuffleArray = (array: string[], seed = 1) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor((seed * (i + 1)) % (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export function HomepageContent() {
  const [shuffledWords, setShuffledWords] = useState(() => shuffleArray(words, 1));
  const [index, setIndex] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    console.log('Current index:', index);
    console.log('Current word:', shuffledWords[index]);
    
    if (index < shuffledWords.length) {
      const fadeOutTimeout = setTimeout(() => {
        setIsFadingOut(true);
      }, 1200);

      const changeWordTimeout = setTimeout(() => {
        setIsFadingOut(false);
        setIndex((prev) => prev + 1);
      }, 1600);

      return () => {
        clearTimeout(fadeOutTimeout);
        clearTimeout(changeWordTimeout);
      };
    } else {
      setAnimationFinished(true);
    }
  }, [index, shuffledWords]);

  return (
    <div>
      <div className="topContainer">
        <div className="animatedBoxContainer">
          <AnimatePresence mode="wait">
            {!animationFinished && index < shuffledWords.length && (
              <motion.div
                key={shuffledWords[index]}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="animatedWord"
              >
                {shuffledWords[index]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <p className="animatedWord">design</p>
        </div>
      </div>
      
      <div className="workContainer">
        <h2 className="h2Eg">WORK</h2>
        <Link href="/work">
          View Projects
        </Link>
      </div>

      <section id="about" className="aboutSection">
        <h2>About</h2>
        <p>自己紹介やプロフィールをここに記載します。</p>
      </section>
    </div>
  );
}
