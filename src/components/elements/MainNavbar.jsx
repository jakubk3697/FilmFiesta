import React from 'react';
import styles from '../../assets/styles/elements/MainNavbar.module.scss';

export const MainNavbar = ({ title, links, onClick }) => {
    return (
        <nav className={styles.nav}>
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
        </nav>
    );
};