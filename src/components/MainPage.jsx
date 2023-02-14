import React, { useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { getMovies } from '../api/moviedbAPI';
import { MovieCard } from './elements/MovieCard';
import styles from '../assets/styles/MainPage.module.css'
import { useQuery } from '@tanstack/react-query';

export const MainPage = () => {
    const [title, setTitle] = useState();
    const moviesQuery = useQuery({
        queryKey: ['movies'],
        queryFn: () => getMovies('harry potter'),
    });

    if (moviesQuery.isLoading) return <p>Loading...</p>;
    if (moviesQuery.isError) return <p>Error: {error.message}</p>;

    return (
        <main className={styles.container}>
            {moviesQuery.data.map((movie) => {
                
                return (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        imgSrc={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750"}
                        imgAlt={movie.title}
                        genres={movie.genre_ids}
                        rating={movie.vote_average}
                        handleMovieCardClick={() => console.log("clicked")}
                    />
                )
            })}
        </main>
    )
}