import React, { useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { MovieCard } from './elements/MovieCard';
import { MainNavbar } from './elements/MainNavbar';
import { Loading } from './elements/Loading';
import styles from '../assets/styles/MainPage.module.scss'
import { fetchMovies } from '../api/moviedbAPI';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Route, Routes } from 'react-router';

export const MainPage = () => {
    const [movieType, setMovieType] = useState('popular');

    // Initial fetch strucutre with page 1
    const fetchProjects = async ({ pageParam = 1 }) => {
        const response = await fetchMovies({ queryKey: ['movies', { page: pageParam, movieType }] });
        return response;
    }

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery(['movies', { page: 1, movieType }], fetchProjects, {
        getNextPageParam: (lastPage) => lastPage.page + 1,
    });

    const handleMovieTypeClick = (type) => {
        setMovieType(type)
    }

    const movieData = data ? data.pages.flatMap((page) => page.results) : [];

    return (
        <>
            <main className={styles.main}>
                <MainNavbar
                    className={styles.navbar}
                    links={[
                        { title: "Popular", url: "popular", onClick: () => handleMovieTypeClick('popular') },
                        { title: "Top Rated", url: "top_rated", onClick: () => handleMovieTypeClick('top_rated') },
                        { title: "Now Playing", url: "now_playing", onClick: () => handleMovieTypeClick('now_playing') },
                        { title: "Upcoming", url: "upcoming", onClick: () => handleMovieTypeClick('upcoming') },
                    ]}
                />
                <div className={styles.container}>
                    <Routes>
                        <Route path="/movies/:movieGenre" element={<Movies movieData={movieData} status={status} />} />
                    </Routes>
                </div>
                <div>
                    <button
                        className={styles.loadMoreButton}
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                    >
                        {isFetchingNextPage
                            ? 'Loading more...'
                            : hasNextPage
                                ? 'Load More'
                                : 'Nothing more to load'}
                    </button>
                </div>

            </main>
        </>
    )
}

const Movies = ({ movieData, status }) => {
    switch (status) {
        case 'error':
            return console.error(error)
        case 'loading':
            return <Loading />
        case 'success':
            return (
                movieData.map((movie) => {
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
                })
            )
        default:
            return null;
    }
}