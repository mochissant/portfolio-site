"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import projectImages from '../data/projectImages';

// トップページのアニメーションに使用する単語リスト
const words = ["logo", "graphic", "editorial", "UI", "UX", "event"];

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

  /**
   * 単語アニメーションのタイミング制御
   * 単語を表示し、一定時間後にフェードアウトさせ、次の単語に切り替える
   */
  useEffect(() => {
    console.log('Current word index:', wordIndex);
    console.log('Current word:', shuffledWords[wordIndex]);

    if (wordIndex < shuffledWords.length) {
      // 1.2秒後に単語をフェードアウトさせる
      const fadeOutTimeout = setTimeout(() => {
        setIsFadingOut(true);
      }, 1200);

      // 1.6秒後に次の単語に切り替える
      const changeWordTimeout = setTimeout(() => {
        setIsFadingOut(false);
        setWordIndex((prev) => prev + 1);
      }, 1600);

      // コンポーネントのアンマウント時にタイマーをクリア
      return () => {
        clearTimeout(fadeOutTimeout);
        clearTimeout(changeWordTimeout);
      };
    } else {
      // すべての単語が表示し終わったらアニメーション完了
      setAnimationFinished(true);
    }
  }, [wordIndex, shuffledWords]);
  
  /**
   * プロジェクトスライダーの移動制御関数
   */
  // 前のプロジェクトに移動（循環する）
  const goToPrevProject = () => {
    setProjectIndex((prev) => (prev > 0 ? prev - 1 : latestProjects.length - 1));
  };
  
  // 次のプロジェクトに移動（循環する）
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
            {/* プロジェクトカードの表示 - AnimatePresenceでアニメーション付き切り替え */}
            <AnimatePresence mode="wait">
              {latestProjects.length > 0 && (
                <motion.div
                  key={latestProjects[projectIndex].slug} // keyを指定してReactが変更を検知できるようにする
                  initial={{ opacity: 0 }} // 初期状態は透明
                  animate={{ opacity: 1 }} // 表示状態
                  exit={{ opacity: 0 }} // 消える際のアニメーション
                  transition={{ duration: 0.3 }} // アニメーション時間
                  className="projectCardContents"
                >
                  {/* プロジェクト画像エリア */}
                  <div className="projectCardImage">
                    {latestProjects[projectIndex].image ? (
                      // 画像がある場合はNext.jsのImageコンポーネントで表示
                      <Image
                        src={projectImages[latestProjects[projectIndex].slug]}
                        alt={latestProjects[projectIndex].title}
                        width={300}
                        height={200}
                        style={{ objectFit: 'cover' }} // 画像のサイズ調整
                      />
                    ) : (
                      // 画像がない場合はプレースホルダーを表示
                      <div className="projectCardImagePlaceholder"></div>
                    )}
                  </div>
                  {/* プロジェクト情報エリア */}
                  <div className="projectCardTitleArea">
                    <h3 className="projectCardTitle">{latestProjects[projectIndex].title}</h3>
                    {/* 説明文からHTMLタグを除去して表示 */}
                    <p className="projectCardDescription">{latestProjects[projectIndex].description.split('</')[0]}</p>
                    {/* タグエリア - 各タグを#付きで表示 */}
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