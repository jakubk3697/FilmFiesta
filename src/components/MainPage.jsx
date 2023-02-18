import React, { useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { MovieCard } from './elements/MovieCard';
import { MainNavbar } from './elements/MainNavbar';
import { Loading } from './elements/Loading';
import styles from '../assets/styles/MainPage.module.scss'
import { fetchMovies } from '../api/moviedbAPI';
import { useInfiniteQuery } from '@tanstack/react-query';

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
    } = useInfiniteQuery(['movies', { page: 1, movieType }], fetchProjects, {
        getNextPageParam: (lastPage) => lastPage.page + 1,
    });

    if (error) return alert(error.message);
    if (!data) return <Loading />;

    const movieData = data.pages.flatMap((page) => page.results);


    const handleMovieTypeClick = (e, type) => {
        e.preventDefault();
        setMovieType(type)
    }

    return (
        <>
            <main className={styles.main}>
                <MainNavbar
                    className={styles.navbar}
                    links={[
                        { title: "Popular", url: "#", onClick: (e) => handleMovieTypeClick(e, 'popular') },
                        { title: "Top Rated", url: "#", onClick: (e) => handleMovieTypeClick(e, 'top_rated') },
                        { title: "Now Playing", url: "#", onClick: (e) => handleMovieTypeClick(e, 'now_playing') },
                        { title: "Upcoming", url: "#", onClick: (e) => handleMovieTypeClick(e, 'upcoming') },
                    ]}
                />
                <div className={styles.container}>
                    {movieData.map((movie) => {
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