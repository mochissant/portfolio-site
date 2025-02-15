
// このファイルはサイト全体のヘッダーコンポーネントを提供します
'use client'

import { useState } from 'react';
import Modal from './Modal';
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModalOpen = () =>{isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)}
  
  return (
    <header>
        <h1>
          <Link href ="/">ポートフォリオ</Link>          </h1>
        <button onClick={toggleModalOpen} >
          menu
        </button>
        <Modal isOpen={isModalOpen} onClose={toggleModalOpen} />
    </header>
  )
}
