import { useParams } from 'react-router';
import styles from '../../assets/styles/pages/MoviePage.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { fetchMovieByID } from '../../api/moviedbAPI';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

export const MoviePage = () => {
    const { movieId } = useParams();
    const currentPath = useLocation();

    console.log('currentPath', currentPath);
    console.log('movieId', movieId);
    const { data, isError, isSuccess, isFetching } = useQuery(['movie', { movieId }], fetchMovieByID, {});

    return (
        <>
            <h1 className={styles.h1}>Movie page with "ID: {movieId}"</h1>
        </>
    )
}