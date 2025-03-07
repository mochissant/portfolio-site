
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MochissantLogo } from "../assets/logos";
import Modal from "./Modal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header>
      <Link href="/">
        <div>
          <MochissantLogo className="headerLogo" color="var(--main-color)" />
        </div>
      </Link>
      <button onClick={toggleModalOpen}>
        <HamburgerIcon isOpen={isModalOpen} />
      </button>
      <Modal isOpen={isModalOpen} onClose={toggleModalOpen} />
    </header>
  );
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 上の線 */}
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        initial={false}
        animate={{ d: isOpen 
          ? "M20.2007 15.783L3.28626 9.6266L3.79929 8.21706L20.7138 14.3734L20.2007 15.783Z" 
          : "M21 9.75H3V8.25H21V9.75Z" 
        }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        fill="#212121"
        className="top"
      />

      {/* 下の線 */}
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        initial={false}
        animate={{ d: isOpen 
          ? "M20.7138 9.62659L3.79929 15.7829L3.28625 14.3734L20.2007 8.21705L20.7138 9.62659Z"
          : "M21 15.75H3V14.25H21V15.75Z"
        }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        fill="#212121"
        className="bottom"
      />
    </motion.svg>
  );
}
