import styles from '../../assets/styles/elements/MovieCard.module.scss';

export const MovieCard = ({ title, imgSrc, imgAlt, genres, rating }) => {
    return (
        <div className={styles.card}>
            <div className={styles.topSection}>
                <img className={styles.img} src={imgSrc} alt={imgAlt} onError={(e) => e.target.src = "https://via.placeholder.com/500x750"} />
                <p className={styles.ratingBox}>
                    <span className={styles.rating}>{rating.toFixed(1)}</span>
                </p>
            </div>
            <div className={styles.bottomSection}>
                <p className={styles.textTitle}>{title}</p>
                <p className={styles.genres}>{genres}</p>
            </div>
        </div>
    );
}
