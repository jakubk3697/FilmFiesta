import React, { useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { getMovies } from '../api/moviedbAPI';
import { MovieCard } from './elements/MovieCard';
import styles from '../assets/styles/MainPage.module.css'

export const MainPage = () => {
    const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     let abortFetching = false;
    //     const startFetching = async () => {
    //         const movies = await getMovies("popular");
    //         !abortFetching && setMovies(movies);
    //     }
    //     startFetching();

    //     return () => {
    //         abortFetching = true;
    //     }
    // }, []);


    return (
        <main className={styles.container}>
            <MovieCard
                title="Example film title"
                genres="Action, Adventure, Fantasy"
                rating={5.4}
            />
            {/* CARD */}
            {/* CARD */}
        </main>
    )
}