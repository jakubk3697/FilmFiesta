import styles from '../../assets/styles/elements/MovieCard.module.scss';

export const MovieCard = ({ title, imgSrc, imgAlt, genres, rating, handleMovieCardClick }) => {
    return (
        <div onClick={handleMovieCardClick} className={styles.card}>
            <div className={styles.topSection}>
                <img className={styles.img} src={imgSrc} alt={imgAlt} />
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
