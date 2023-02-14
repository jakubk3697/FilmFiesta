import React, { useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { getMovies } from '../api/moviedbAPI';
import { MovieCard } from './elements/MovieCard';
import styles from '../assets/styles/MainPage.module.css'

export const MainPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let abortFetching = false;
        const startFetching = async () => {
            const movies = await getMovies("popular");
            !abortFetching && setMovies(movies);
        }
        startFetching();

        return () => {
            abortFetching = true;
        }
    }, []);

    const renderMovies = () => {
        console.log(movies);
        return movies.map(movie => {
            return (
                <MovieCard
                    title={movie.title}
                    imgSrc={movie.poster_path}
                    genres={movie.genres}
                    rating={movie.vote_average}
                />
            )
        })
    }

    return (
        <main className={styles.container}>
                
              <MovieCard
                title="Example film title"
                imgSrc="https://image.tmdb.org/t/p/w200/3CCSa2CjQRMgwllMnVd0Gv9FZaW.jpg"
                genres="Example film genres"
                rating="5.2"
                handleMovieCardClick={() => console.log("clicked")}
            />
            {/* <div className={styles.movies}>
                {renderMovies()}
            </div> */}
        </main>
    )
}