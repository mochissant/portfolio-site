import React from "react";
import styles from "../styles/iconButton.module.css";

interface IconButtonProps {
    variant?: "none" ;
    iconType?: "right" | null;
    disabled?: boolean;
    onClick?: () => void;
}

const Icons={
    right:(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  d="M16.9053 10.0947C17.6207 10.8101 18.6704 11.25 20 11.25L20 12.75H4V11.25H15.9419C15.9091 11.2189 15.8767 11.1873 15.8447 11.1553C14.8101 10.1207 14.25 8.67044 14.25 7H15.75C15.75 8.32956 16.1899 9.37925 16.9053 10.0947Z" fill="#212121"/>
        </svg> 
    )
}

const IconButton: React.FC<IconButtonProps> =({
    variant="none",
    iconType = null,
    disabled =false,
    onClick,
}) => {
    const variantClass= variant && styles[variant] ? styles[variant]: "";
    const disabledClass = disabled ? styles.disabled : "";
    const buttonClass = `${styles.iconButton} ${variantClass} ${disabledClass}`.trim();

    const getIcon =() => {
        if (!iconType)return null;
        return <span className ={styles.icon}>{Icons[iconType]}</span>
    };

    return(
        <button className={buttonClass} disabled={disabled} onClick={onClick}>
            {getIcon()}
        </button>
    );
};

export default IconButton;