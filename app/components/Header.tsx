
// このファイルはサイト全体のヘッダーコンポーネントを提供します
'use client'

import { useState } from 'react';
import Modal from './Modal';
import Link from 'next/link'
import { motion, useTransform, useMotionValue } from "framer-motion";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  // Motion Valueでスケールを管理
  const scaleX = useMotionValue(0.6);

  // スケールに連動してmochissantのx位置を変換
  const textX = useTransform(scaleX, [0.6, 1], [-50, 0]);
  // スケール0.6のとき -50px、スケール1のとき 0pxに移動
  
  return (
    <header>
        <Link href="/">
          <div className="moveHeader">
            <motion.div
              className="header-box"
              style={{ scaleX, transformOrigin: "left" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }} // Closing the transition property correctly
            ></motion.div>
            {/* mochissantの位置をheader-boxのスケールに連動 */}
            <motion.h1
              className="header-h1"
              style={{ x: textX }} // スケールに応じてx座標が変化
              transition={{ duration: 0.5, ease: "easeOut" }}
            >mochissant</motion.h1>
          </div>
        </Link>
      <button onClick={toggleModalOpen}>menu</button>
      <Modal isOpen={isModalOpen} onClose={toggleModalOpen} />
    </header>
  )
}
