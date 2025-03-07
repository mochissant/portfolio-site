"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import projectImages from '../data/projectImages';

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
  const [wordIndex, setWordIndex] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  // プロジェクトを年月の降順でソート
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    if (a.month !== b.month) return b.month - a.month;
    return a.slug.localeCompare(b.slug);
  });
  
  // 最新の5件を取得
  const latestProjects = sortedProjects.slice(0, 5);
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    console.log('Current word index:', wordIndex);
    console.log('Current word:', shuffledWords[wordIndex]);

    if (wordIndex < shuffledWords.length) {
      const fadeOutTimeout = setTimeout(() => {
        setIsFadingOut(true);
      }, 1200);

      const changeWordTimeout = setTimeout(() => {
        setIsFadingOut(false);
        setWordIndex((prev) => prev + 1);
      }, 1600);

      return () => {
        clearTimeout(fadeOutTimeout);
        clearTimeout(changeWordTimeout);
      };
    } else {
      setAnimationFinished(true);
    }
  }, [wordIndex, shuffledWords]);
  
  // プロジェクトの前後移動の処理
  const goToPrevProject = () => {
    setProjectIndex((prev) => (prev > 0 ? prev - 1 : latestProjects.length - 1));
  };
  
  const goToNextProject = () => {
    setProjectIndex((prev) => (prev < latestProjects.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>
      <div className="topContainer">
        <div className="animatedBoxContainer">
          <AnimatePresence mode="wait">
            {!animationFinished && wordIndex < shuffledWords.length && (
              <motion.div
                key={shuffledWords[wordIndex]}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="animatedWord"
              >
                {shuffledWords[wordIndex]}
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
        <div className="workSliderContainer">
          <div className="workSliderNav left">
            <button className="workSliderArrowButton" onClick={goToPrevProject}>
              <Image 
                src="/assets/icons/left.svg" 
                alt="left arrow"
                width={24}
                height={24}
              />
            </button>
          </div>
          <div className="workCard">
            <AnimatePresence mode="wait">
              {latestProjects.length > 0 && (
                <motion.div
                  key={latestProjects[projectIndex].slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="projectCardContents"
                >
                  <div className="projectCardImage">
                    {latestProjects[projectIndex].image ? (
                      <Image
                        src={projectImages[latestProjects[projectIndex].slug]}
                        alt={latestProjects[projectIndex].title}
                        width={300}
                        height={200}
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="projectCardImagePlaceholder"></div>
                    )}
                  </div>
                  <div className="projectCardTitleArea">
                    <h3 className="projectCardTitle">{latestProjects[projectIndex].title}</h3>
                    <p className="projectCardDescription">{latestProjects[projectIndex].description.split('</')[0]}</p>
                    <div className="projectCardTagArea">
                      {latestProjects[projectIndex].tag.map((tag) => (
                        <span key={tag} className="projectCardTag">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="workSliderNav right">
            <button className="workSliderArrowButton" onClick={goToNextProject}>
              <Image 
                src="/assets/icons/right.svg" 
                alt="right arrow"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <Link href="/work" className="viewProjectsLink">
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