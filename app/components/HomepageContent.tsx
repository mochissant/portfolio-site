"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 単語リスト
const words = ["logo", "graphic", "editorial", "UI", "UX", "event"];

// 配列をシャッフルする関数
const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export function HomepageContent() {
  const [shuffledWords, setShuffledWords] = useState(() => shuffleArray(words));
  const [index, setIndex] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (index < shuffledWords.length) {
      const fadeOutTimeout = setTimeout(() => {
        setIsFadingOut(true); // フェードアウト開始
      }, 1200); // 1.2秒後にフェードアウト開始

      const changeWordTimeout = setTimeout(() => {
        setIsFadingOut(false);
        setIndex((prev) => prev + 1);
      }, 1600); // 1.6秒後に次の単語へ

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
      <h1>Welcome</h1>
      <div className="topContainer">
        <div className="animatedBoxContainer">
          <AnimatePresence mode="wait">
            {!animationFinished && index < shuffledWords.length && (
              <motion.div
                key={shuffledWords[index]}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }} // exitアニメーションの時間を短縮
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
        <h2 className="h2-eg">recentory work</h2>
        <Link href="/work">
          View Projects
        </Link>
      </div>
    </div>
  );
}
