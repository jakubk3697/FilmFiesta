import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { MainNavbar } from './MainNavbar';
import { MovieCards } from './MovieCards';
import { RandomQuestions } from './RandomQuestions';
import { fetchMovies } from '../api/moviedbAPI';
import { getMoviesByAI } from '../api/openaiAPI';
import styles from '../assets/styles/MainContent.module.scss';


export const MainContent = () => {
    // const [movies, setMovies] = useState([]);
    // const [actualMovies, setActualMovies] = useState([]);
    const [movieType, setMovieType] = useState('popular');
    const [prompt, setPrompt] = useState('');
    const promptRef = useRef(null);

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

    const {
        data: aiData,
        error: aiError,
        status: aiStatus,
    } = useQuery(['aiMovies', { prompt }], getMoviesByAI, {
        enabled: prompt !== '',
    });

    const handleMovieTypeClick = (type) => {
        setMovieType(type)
    }

    const handleAISeachbarSubmit = (event) => {
        console.log('submit');
        // event.preventDefault();
        setPrompt(promptRef.current.value);
    }

    const movieData = data ? data.pages.flatMap((page) => page.results) : [];

    return (
        <>
            <main className={styles.main}>
                <RandomQuestions />
                <MainNavbar
                    links={[
                        { title: "Popular", url: "popular", onClick: () => handleMovieTypeClick('popular') },
                        { title: "Top Rated", url: "top_rated", onClick: () => handleMovieTypeClick('top_rated') },
                        { title: "Now Playing", url: "now_playing", onClick: () => handleMovieTypeClick('now_playing') },
                        { title: "Upcoming", url: "upcoming", onClick: () => handleMovieTypeClick('upcoming') },
                    ]}
                    onSubmit={handleAISeachbarSubmit}
                    aiPromptRef={promptRef}
                />
                <div className={styles.container}>
                    <MovieCards movieData={movieData} status={status} />
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

