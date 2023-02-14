import React from 'react';
import styles from '../../assets/styles/elements/MovieCard.module.css';

export const MovieCard = ({ title, imgSrc, genres, rating, handleMovieCardClick }) => {
    return (
        <div onClick={handleMovieCardClick} className={styles.card}>
            <div className={styles.topSection}>
                <img className={styles.img} src={imgSrc} />
                <p className={styles.ratingBox}>
                    <span className={styles.rating}>{rating}</span>
                </p>
            </div>
            <div className={styles.bottomSection}>
                <p className={styles.textTitle}>{title}</p>
                <p className={styles.genres}>{genres}</p>
            </div>
        </div>
    );
}
