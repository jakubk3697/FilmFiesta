import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { MainNavbar } from './MainNavbar';
import { MovieCards } from './MovieCards';
import { RandomQuestions } from './RandomQuestions';
import { fetchMovies } from '../api/moviedbAPI';
import { getMoviesByAI } from '../api/openaiAPI';
import { useLocation, useNavigate } from 'react-router-dom'
import styles from '../assets/styles/MainContent.module.scss';

export const MainContent = () => {
    const [movieType, setMovieType] = useState('popular');
    const [prompt, setPrompt] = useState('');
    const promptRef = useRef(null);
    const currentPath = useLocation();

    const pathnameToMovieType = {
        'movies/popular': 'popular',
        'movies/top_rated': 'top_rated',
        'movies/now_playing': 'now_playing',
        'movies/upcoming': 'upcoming',
        'movies/ai': 'ai',
    };

    useEffect(() => {
        const movieType = Object.keys(pathnameToMovieType).find((pathname) =>
            window.location.pathname.includes(pathname)
        );
        movieType ? setMovieType(pathnameToMovieType[movieType]) : setMovieType('popular');
    }, [currentPath]);

    // Initial fetch strucutre with page 1 and movieType from state
    const fetchMoviedbMovies = async ({ pageParam = 1 }) => {
        const response = await fetchMovies({ queryKey: ['movies', { page: pageParam, movieType }] });
        return response;
    }

    const fetchAIMovies = async () => {
        const response = await getMoviesByAI({ queryKey: ['aiMovies', { prompt }] });
        return response;
    }

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
        isPending,
    } = useInfiniteQuery(['movies', { page: 1, movieType }], fetchMoviedbMovies, {
        getNextPageParam: (lastPage) => lastPage.page + 1,
        enabled: movieType !== 'ai',
    });

    const {
        data: aiData,
        error: aiError,
        status: aiStatus,
        isFetching: aiIsFetching,
    } = useQuery(['aiMovies', { prompt }], fetchAIMovies, {
        enabled: movieType === 'ai' && prompt.length > 5,
    });

    const handleMovieTypeClick = (type) => {
        setMovieType(type)
    }

    const handleAISeachbarSubmit = (event) => {
        setPrompt(promptRef.current.value);
        setMovieType('ai'); // Disable movieType query
        promptRef.current.value = '';
    }

    const movieData = data ? data.pages.flatMap((page) => page.results) : [];
    const aiMovieData = aiData ? aiData : [];

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
                    matchBtnDisabled={aiIsFetching}
                />
                <div className={styles.container}>
                    {
                        (movieType === 'ai' ? <MovieCards movieData={aiData} status={aiStatus} /> : <MovieCards movieData={movieData} status={status} />)
                    }
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

