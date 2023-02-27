import { Link, useNavigate } from 'react-router-dom';
import styles from '../assets/styles/AISearchbar.module.scss';

export const AISearchbar = ({ onSubmit, aiPromptRef }) => {
    let navigateTo = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        onSubmit();
        navigateTo('/movies/ai');
    }

    return (
        <div className={styles.aiBox}>
            <form className={styles.form} onSubmit={onSubmit} method={'post'}>
                <input className={styles.input} placeholder="Give some tips and get matched movies..." type="text" ref={aiPromptRef} />
                <button className={styles.submitBtn} type="submit" onClick={handleClick}>Match movies</button>
            </form>
        </div>
    )
}
