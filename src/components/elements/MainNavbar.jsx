import React from 'react';
import styles from '../../assets/styles/elements/MainNavbar.module.css';

export const MainNavbar = ({ title, links, onClick }) => {
    return (
        <ul className={styles.ul}>
            {links.map((link, index) => (
                <li key={index} className={styles.li}>
                    <a
                        className={styles.a}
                        href={link.url}
                        onClick={(e) => link.onClick(e)}
                    >
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};