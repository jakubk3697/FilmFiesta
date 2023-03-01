import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchMovieByID } from '../../api/moviedbAPI';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from '../../assets/styles/pages/MoviePage.module.scss';

export const MoviePage = () => {
    const { movieId } = useParams();

    const { data, isLoading, error } = useQuery(['movie', movieId], () => fetchMovieByID(movieId));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const { title, poster_path, overview, release_date, vote_average, genres } = data;

    return (
        <>
            <div className={styles.container}>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {data && (
                    <div className={styles.movie}>
                        <div className={styles.poster}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                                alt={`Poster for ${data.title}`}
                            />
                        </div>
                        <div className={styles.info}>
                            <div>
                                <h1 className={styles.title}>{data.title}</h1>
                                <p className={styles.overview}>{data.overview}</p>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.detail}>
                                    <span className={styles.detailTitle}>Genres:</span>
                                    <div className={styles.detailValue}>
                                        {data.genres.map((genre) => genre.name).join(', ')}
                                    </div>
                                </div>
                                <div className={styles.detail}>
                                    <span className={styles.detailTitle}>Release Date:</span>
                                    <div className={styles.detailValue}>{data.release_date}</div>
                                </div>
                                <div className={styles.detail}>
                                    <span className={styles.detailTitle}>Runtime:</span>
                                    <div className={styles.detailValue}>{data.runtime} minutes</div>
                                </div>
                                <div className={styles.detail}>
                                    <span className={styles.detailTitle}>Language:</span>
                                    <div className={styles.detailValue}>
                                        {data.spoken_languages.map((language) => language.name).join(', ')}
                                    </div>
                                </div>
                                <div className={styles.detail}>
                                    <span className={styles.detailTitle}>Budget:</span>
                                    <div className={styles.detailValue}>${data.budget.toLocaleString()}</div>
                                </div>
                                <div className={styles.detail}>
                                    <span className={styles.detailTitle}>Revenue:</span>
                                    <div className={styles.detailValue}>${data.revenue.toLocaleString()}</div>
                                </div>
                                <div className={styles.detail}>
                                    <span className={styles.detailTitle}>Rating:</span>
                                    <div className={styles.detailValue}>{data.vote_average}/10</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
