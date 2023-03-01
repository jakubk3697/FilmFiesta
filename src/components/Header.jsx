import { useState } from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import styles from '../assets/styles/Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = ({ handleTheme }) => {

    const handleScroll = (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <header className={styles.header}>
            {/* scroll to the top after onClick Link*/}
            <Link className={styles.Link} to={'/'} onClick={handleScroll}>
                <div className={styles.leftAreaBox}>
                    <BiCameraMovie className={styles.logoIcon} />
                    <h1 className={styles.logoText}>FilmFiesta</h1>
                </div>
            </Link>
            <div className={styles.rightAreaBox}>
                <a href="https://github.com/jakubk3697" target="_blank" className={styles.githubLink}>
                    <AiFillGithub className={styles.githubIcon} />
                </a>
                <label className={styles.switch}>
                    <input type="checkbox" onChange={handleTheme} />
                    <span className={styles.slider}></span>
                </label>
            </div>
        </header>
    )
}