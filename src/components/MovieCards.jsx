import { Link, useParams } from 'react-router-dom';
import { MovieCard } from './elements/MovieCard';
import { Loading } from './elements/Loading';
import styles from '../assets/styles/MovieCards.module.scss';

export const MovieCards = ({ movieData, status }) => {
    switch (status) {
        case 'error':
            return console.error(error)
        case 'loading':
            return <Loading />
        case 'success':
            return (
                movieData.map((movie) => {
                    return (
                        <Link key={movie.id} className={styles.Link} to={`/movie/${movie.id}`}>
                            <MovieCard
                                key={movie.id}
                                title={movie.title}
                                imgSrc={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750"}
                                imgAlt={movie.title}
                                genres={movie.genre_ids}
                                rating={movie.vote_average}
                            />
                        </Link>
                    )
                })
            )
        default:
            return null;
    }
}