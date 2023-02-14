import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

export const getMovies = async (query) => {
    const res = await axios.get(`${API_BASE_URL}${query}`);
    
    return res.data.results;
};