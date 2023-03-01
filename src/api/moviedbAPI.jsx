import axios from "axios";

const API_KEY = import.meta.env.VITE_MOVIEDB_API_KEY;
const API_ACTUAL_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async ({ queryKey }) => {
    const [_key, { page, movieType }] = queryKey;

    const url = `${BASE_URL}/movie/${movieType}?api_key=${API_KEY}&page=${page}`;
    const { data } = await axios.get(url);

    return data;
};

export const fetchMovieByID = async (movieId) => {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
    const { data } = await axios.get(url);

    return data;
}

export const fetchGenres = async () => {
    const { data } = await axios.get(API_ACTUAL_GENRES);

    return data;
}