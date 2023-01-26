import React, { useState } from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import styles from '../assets/styles/Header.module.css';

export const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <header className={styles.header}>
            <div className={styles.leftAreaBox}>
                <BiCameraMovie className={styles.logoIcon} />
                <h1 className={styles.logoText}>FilmFiesta</h1>
            </div>
            <div className={styles.rightAreaBox}>
                <a href="https://github.com/jakubk3697" target="_blank" className={styles.githubLink}>
                    <AiFillGithub className={styles.githubIcon} />
                </a>
                <label className={styles.switch}>
                    <input type="checkbox" value={isDarkMode} onChange={handleDarkMode} />
                    <span className={styles.slider}></span>
                </label>
            </div>
        </header>
    )
}