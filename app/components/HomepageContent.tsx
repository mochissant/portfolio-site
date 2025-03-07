'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { words } from '../data/words';
import { projects } from '../data/projects';
import projectImages from '../data/projectImages';
import '../styles/home.css';

/**
 * 配列をシャッフルする関数
 * @param array シャッフルする配列
 * @param seed シード値（同じシード値なら同じ結果になる）
 * @returns シャッフルされた新しい配列
 */
const shuffleArray = (array: string[], seed = 1) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor((seed * (i + 1)) % (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export function HomepageContent() {
  // アニメーション表示用の状態管理
  const [shuffledWords, setShuffledWords] = useState(() => shuffleArray(words, 1));
  const [wordIndex, setWordIndex] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // プロジェクトデータを年月の降順でソート（最新順）
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year; // 年で降順
    if (a.month !== b.month) return b.month - a.month; // 月で降順
    return a.slug.localeCompare(b.slug); // 同じ年月ならスラッグでソート
  });

  // 最新の5件のプロジェクトのみを表示用に取得
  const latestProjects = sortedProjects.slice(0, 5);
  const [projectIndex, setProjectIndex] = useState(0); // 現在表示中のプロジェクトインデックス

  return (
    <div>
      <div className="topContainer">
        <div className="animatedBoxContainer">
          <AnimatePresence mode="wait">
            {!animationFinished && (
              <motion.div
                key={wordIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="animatedBox"
              >
                {shuffledWords[wordIndex]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mainContent">
        <h2>最新のプロジェクト</h2>
        <div className="latestProjectsContainer">
          {latestProjects.map((project, index) => (
            <div key={project.slug} className="projectCard">
              <div className="projectCardImage">
                {project.image !== null ? (
                  <img
                    src={projectImages[project.slug]}
                    alt={project.title}
                    width={150}
                    height={100}
                  />
                ) : (
                  <div className="projectCardImagePlaceholder"></div>
                )}
              </div>
              <div className="projectCardInfo">
                <h3>{project.title}</h3>
                <p className="projectCardDate">{project.year}年{project.month}月</p>
                <p className="projectCardDescription">{project.description.substring(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}