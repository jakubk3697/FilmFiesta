import React, { useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { getMovies } from '../api/moviedbAPI';

export const MainPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies("popular").then((movies) => {
            setMovies(movies);
        });
    }, []);


    return (
        <>
            {/* CARD */}
            {/* CARD */}
            {/* CARD */}
        </>
    )
}