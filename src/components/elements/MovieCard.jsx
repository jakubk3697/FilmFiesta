import React from 'react';
import styles from '../../assets/styles/elements/MovieCard.module.css';

export const MovieCard = ({ title, textBody, btnName, handleCardClick }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <img className={styles.img} src="https://picsum.photos/200/300" alt="random image" />
            </div>
            <div className={styles.cardDetails}>
                <p className={styles.textTitle}>{title}</p>
                <p className={styles.textBody}>{textBody}</p>
            <button
                className={styles.cardButton}
                onClick={(e) => handleCardClick(e)}
            >
                {btnName}
            </button>
            </div>
        </div>
    );
}
