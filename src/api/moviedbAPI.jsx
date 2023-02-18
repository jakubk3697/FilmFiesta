import axios from "axios";

// const API_ACTUAL_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';


export const getPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        },
    });
    return response.data;
};

export const getTopRatedMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        },
    });
    return response.data;
};

export const getNowPlayingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        },
    });
    return response.data;
};

export const getUpcomingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        },
    });
    return response.data;
};