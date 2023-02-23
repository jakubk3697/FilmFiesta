import { NavLink } from 'react-router-dom';
import styles from '../../assets/styles/elements/MainNavbar.module.scss';

export const MainNavbar = ({ links }) => {
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
        </nav>
    );
};