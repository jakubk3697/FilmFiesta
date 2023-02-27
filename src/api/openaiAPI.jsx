import axios from "axios";

export const getMoviesByAI = async ({ userPrompt }) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    };

    const data = {
        'model': "text-davinci-003",
        'prompt': `
        You are a serachbar engine on the website to help with personalization of movies. The content in the curly braces below contains a prompt given by user. Include and process this prompt then return five movies that have the highest score after multipying rating and popularity, sort them in descending order. Return results in JSON format (without any other text or comments), with each movie represented as an object that includes the following fields: id, title, poster path (not whole path, only "/poster path.jpg"), genre_ids and vote_average. The data should be sourced from the https://www.themoviedb.org/. Give answers always in english language. If the user inputs something that is not understood, return random five films with huge rating and popularity. 
        {${userPrompt}}}
        `,
        'temperature': 0.7,
        'max_tokens': 500,
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', data, { headers });
        const JSONResponse = JSON.parse(response.data.choices[0].text);
        return JSONResponse;
    } catch (error) {
        console.error(error);
    }
}