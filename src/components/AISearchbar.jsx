import { Link } from 'react-router-dom';
import styles from '../assets/styles/AISearchbar.module.scss';

export const AISearchbar = ({ onSubmit, aiPromptRef }) => {
    return (
        <div className={styles.aiBox}>
            <form className={styles.form} onSubmit={onSubmit}>
                <input className={styles.input} placeholder="Give some tips and get matched movies..." type="text" ref={aiPromptRef} />
                <button className={styles.submitBtn} type="submit">Match movies</button>
            </form>
        </div>
    )
}
