
// このファイルはサイト全体のヘッダーコンポーネントを提供します
'use client'

import { useState } from 'react';
import Modal from './Modal';
import Link from 'next/link'
import { motion, useTransform, useMotionValue } from "framer-motion";
import { MochissantLogo } from '@/app/assets/logos';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }
  
  return (
    <header>
        <Link href="/" className="moveHeader header-h1">
          <div className="moveHeader">
            <MochissantLogo className="h-6" color="var(--main-color)" />
          </div>
        </Link>
      <button onClick={toggleModalOpen}>
  {isModalOpen ? <CloseIcon /> : <MenuIcon />}
</button>
      <Modal isOpen={isModalOpen} onClose={toggleModalOpen} />
    </header>
  )
}
