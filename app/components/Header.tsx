'use client';
import styles from "../styles/header.module.css";
//import {useState} from "react";

export default function Header(){
    //const [isOpen, setIsOpen] = useState();

    return(
        <header className={styles.header}>
            <img src="/logo/mochissant-logo.svg" alt="もちわっさん" className={styles.logo} />
        </header>
    );
}