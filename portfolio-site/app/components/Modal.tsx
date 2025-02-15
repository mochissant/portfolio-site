// このファイルはナビゲーションメニューのモーダルコンポーネントを提供します
'use client'

import Link from 'next/link'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        {children}
        <nav>
          <div>
            <Link href="/" onClick={onClose}>
              ホーム
            </Link>
          </div>
          <div>
            <Link href="/work" onClick={onClose}>
              作品一覧
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Modal