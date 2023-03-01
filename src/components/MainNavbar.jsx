import { NavLink } from 'react-router-dom';
import styles from '../assets/styles/MainNavbar.module.scss';
import { AISearchbar } from './AISearchbar';

export const MainNavbar = ({ links, onSubmit, aiPromptRef, matchBtnDisabled, isInputErr }) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {links.map((link, index) => (
                    <li key={link.url} className={styles.li}>
                        <NavLink
                            className={
                                ({ isActive }) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
                            }
                            onClick={link.onClick}
                            to={`/movies/${link.url}`}
                        >
                            {link.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <AISearchbar
                onSubmit={onSubmit}
                aiPromptRef={aiPromptRef}
                matchBtnDisabled={matchBtnDisabled}
                isInputErr={isInputErr}
            />
        </nav>
    );
};