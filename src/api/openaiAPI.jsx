import axios from "axios";

export const getMoviesByAI = async ({ queryKey }) => {
    const [_key, { prompt }] = queryKey;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    };

    const data = {
        'model': "text-davinci-003",
        'prompt': `
        Input is written in curly braces in the end of this prompt. Include and process this prompt then return five movies that have the highest score after multipying rating and popularity. Return results in JSON format (without any other text or comments), with each movie represented as an object that includes the following fields: id, title, poster path (e.g. "/poster path.jpg"), genre_ids and vote_average. The data for these fields should be sourced from the https://www.themoviedb.org/. Give answers always in english. 
        {${prompt}}}
        `,
        'temperature': 0,
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