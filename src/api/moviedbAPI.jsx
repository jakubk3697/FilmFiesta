import axios from "axios";

// const API_ACTUAL_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchMovies = async ({ queryKey }) => {
    const [_key, { page, movieType }] = queryKey;

    const url = `${BASE_URL}/movie/${movieType}?api_key=${API_KEY}&page=${page}`;
    const { data } = await axios.get(url);

    return data;
};
