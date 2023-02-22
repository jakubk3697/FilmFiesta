import React, { useEffect, useState, useRef } from 'react';
import { MainNavbar } from './elements/MainNavbar';
import { MovieCards } from './MovieCards';
import { fetchMovies } from '../api/moviedbAPI';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import styles from '../assets/styles/MainPage.module.scss'

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
                        <Route path="/movies/:movieGenre" element={<MovieCards movieData={movieData} status={status} />} />
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

