import axios from "axios";

const poster_path = "3CCSa2CjQRMgwllMnVd0Gv9FZaW.jpg"; // example poster path
    
const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const API_IMG_URL = `https://image.tmdb.org/t/p/w250/${poster_path}`;

export const getMovies = async (query) => {
    const res = await axios.get(`${API_BASE_URL}${query}`);

    return res.data.results;
};