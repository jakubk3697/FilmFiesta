import { Link } from 'react-router-dom';
import styles from '../assets/styles/AISearchbar.module.scss';

export const AISearchbar = ({ onSubmit, aiPromptRef }) => {
    return (
        <div className={styles.aiBox}>
            <form className={styles.form} onSubmit={onSubmit}>
                <input className={styles.input} placeholder="Give some tips and get matched movies..." type="text" ref={aiPromptRef} />
                {/* let below function to change route and submit form */}
                
                <Link to={'/movies/ai'}>
                    <button className={styles.submitBtn} type="submit">Match movies</button>
                </Link>
            </form>
        </div>
    )
}
