import axios from "axios";

const API_KEY = "adcb82358628334b2db68f8e96d3800b";
const API_BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

export const getMovies = async (query) => {
    const res = await axios.get(`${API_BASE_URL}${query}`);
    return res.data.results;
};