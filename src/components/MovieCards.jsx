import { Link, useParams } from 'react-router-dom';
import { MovieCard } from './elements/MovieCard';
import { Loading } from './elements/Loading';
import styles from '../assets/styles/MovieCards.module.scss';
import { fetchGenres } from '../api/moviedbAPI';
import { useQuery } from '@tanstack/react-query';

export const MovieCards = ({ movieData, status }) => {
    const { data } = useQuery(['genres'], fetchGenres);

    // Variable with IDs to help filter duplicated movies
    let movieIDs = [];

    console.log(movieIDs);

    switch (status) {
        case 'error':
            return console.error(error)
        case 'loading':
            return <Loading />
        case 'success':
            return (
                movieData.map((movie) => {
                    if (movieIDs.includes(movie.id)) return;
                    return (
                        console.log(movieIDs),
                        <Link key={movie.id} className={styles.Link} to={`/movie/${movie.id}`}>
                            <MovieCard
                                key={movie.id && movieIDs.push(movie.id)}
                                title={movie.title}
                                imgSrc={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750"}
                                imgAlt={movie.title}
                                genres={movie.genre_ids.map((genre) => {
                                    return data.genres.find((genreData) => genreData.id === genre).name + ', ';
                                })}
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