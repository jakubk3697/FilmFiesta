import styles from '../assets/styles/AISearchbar.module.scss';

export const AISearchbar = ({ onSubmit, onChange, value }) => {
    return (
        <div className={styles.aiBox}>
            <form className={styles.form} onSubmit={onSubmit}>
                <input className={styles.input} placeholder="Please, write some tips to get few movies..." type="text" value={value} onChange={onChange} />
                <button className={styles.submitBtn} type="submit">Submit</button>
            </form>
        </div>
    )
}