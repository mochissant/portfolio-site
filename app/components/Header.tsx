'use client';
import styles from "../styles/header.module.css";
import Image from 'next/image';
//import {useState} from "react";

export default function Header(){
    //const [isOpen, setIsOpen] = useState();

    return(
        <header className={styles.header}>
            <Image src="/logo/mochissant-logo.svg" alt="もちわっさん" priority className={styles.logo} />
        </header>
    );
}