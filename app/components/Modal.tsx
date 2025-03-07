
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="modal-nav">
            <Link href="/" onClick={onClose} className="modal-item">
              ホーム
            </Link>
            <Link href="/work" onClick={onClose} className="modal-item">
              作品一覧
            </Link>
            <Link href="/#about" onClick={onClose} className="modal-item">
              About
            </Link>
          </nav>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
