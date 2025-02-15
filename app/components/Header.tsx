
// このファイルはサイト全体のヘッダーコンポーネントを提供します
'use client'

import { useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header>
        <h1>ポートフォリオ</h1>
        <button onClick={() => setIsModalOpen(true)} >
          menu
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}
