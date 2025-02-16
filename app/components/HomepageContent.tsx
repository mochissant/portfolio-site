
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { LayoutGroup, motion } from 'framer-motion';

export function HomepageContent() {
  const words = ["logo", "graphic", "editorial", "UI", "UX", "event"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
          >
            {words[index]}
          </motion.span>
        </motion.div>
      </div>
      <div>
        <Link href="/work">
          View Projects
        </Link>
      </div>
    </div>
  );
}
