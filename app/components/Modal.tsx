
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <nav className="modal-nav">
        <Link href="/" onClick={onClose}>
          ホーム
        </Link>
        <Link href="/work" onClick={onClose}>
          作品一覧
        </Link>
      </nav>
      {children}
    </motion.div>
  )
}

export default Modal
