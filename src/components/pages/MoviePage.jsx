import { useParams } from 'react-router';
import styles from '../../assets/styles/pages/MoviePage.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const MoviePage = () => {
    const { movieId } = useParams();

    return (
        <>
            <h1 className={styles.h1}>Movie page with "ID: {movieId}"</h1>
        </>
    )
}