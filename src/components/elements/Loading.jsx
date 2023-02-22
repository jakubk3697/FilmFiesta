import styles from '../../assets/styles/elements/Loading.module.scss';

export const Loading = () => {
    return (
        <div className={styles.ldsEllipsis}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            <div className={styles.four}></div>
        </div>
    )
}