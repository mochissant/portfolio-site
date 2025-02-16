
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
  
  return (
    <header>
        <Link href="/" className="moveHeader header-h1">
          <div className="moveHeader">
            <h1 className="header-h1">mochissant</h1>
          </div>
        </Link>
      <button onClick={toggleModalOpen}>{isModalOpen ? "close" : "menu"}</button>
      <Modal isOpen={isModalOpen} onClose={toggleModalOpen} />
    </header>
  )
}
