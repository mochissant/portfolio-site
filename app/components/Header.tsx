
// このファイルはサイト全体のヘッダーコンポーネントを提供します
'use client'

import { useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header>
      <div>
        <motion.button
          className="hamburger-button"
          onClick={() => setIsModalOpen(true)}
          aria-label="メニュー"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div className="hamburger-line" whileHover={{ backgroundColor: 'var(--purple)' }}></motion.div>
          <motion.div className="hamburger-line" whileHover={{ backgroundColor: 'var(--purple)' }}></motion.div>
          <motion.div className="hamburger-line" whileHover={{ backgroundColor: 'var(--purple)' }}></motion.div>
          <motion.span className="menu-text" whileHover={{ color: 'var(--purple)' }}>menu</motion.span>
        </motion.button>
        <h1>ポートフォリオ</h1>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </header>
  )
}
