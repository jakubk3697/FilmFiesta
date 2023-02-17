import React, { useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { MovieCard } from './elements/MovieCard';
import { MainNavbar } from './elements/MainNavbar';
import styles from '../assets/styles/MainPage.module.css'
import {
    getPopularMovies,
    getTopRatedMovies,
    getNowPlayingMovies,
    getUpcomingMovies,
} from '../api/moviedbAPI';
import { useQuery } from '@tanstack/react-query';

export const MainPage = () => {
    const [movieType, setMovieType] = useState('popular');

    let queryFn;
    let queryKey;

    switch (movieType) {
        case 'popular':
            queryFn = getPopularMovies;
            queryKey = ['popularMovies'];
            break;
        case 'top_rated':
            queryFn = getTopRatedMovies;
            queryKey = ['topRatedMovies'];
            break;
        case 'now_playing':
            queryFn = getNowPlayingMovies;
            queryKey = ['nowPlayingMovies'];
            break;
        case 'upcoming':
            queryFn = getUpcomingMovies;
            queryKey = ['upcomingMovies'];
            break;
        default:
            queryFn = getPopularMovies;
            queryKey = ['popularMovies'];
            break;
    }

    const { isLoading, error, data } = useQuery(queryKey, queryFn);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleMovieTypeClick = (e, type) => {
        e.preventDefault();
        setMovieType(type)
    }


    return (
        <main className={styles.container}>
            <MainNavbar
                links={[
                    { title: "Popular", url: "#", onClick: (e) => handleMovieTypeClick(e, 'popular') },
                    { title: "Top Rated", url: "#", onClick: (e) => handleMovieTypeClick(e, 'top_rated') },
                    { title: "Now Playing", url: "#", onClick: (e) => handleMovieTypeClick(e, 'now_playing') },
                    { title: "Upcoming", url: "#", onClick: (e) => handleMovieTypeClick(e, 'upcoming') },
                ]}
            />
            {data.results.map((movie) => {
                return (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        imgSrc={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750"}
                        imgAlt={movie.title}
                        genres={movie.genre_ids}
                        rating={movie.vote_average}
                        handleMovieCardClick={() => console.log("Openning new Route with movie details (not)works.")}
                    />
                )
            })}
        </main>
    )
}