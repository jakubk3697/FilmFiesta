export const getMoviesByPrompt = async () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    };

    const data = {
        'model': "text-davinci-003",
        'prompt': prompt,
        'temperature': 0.7,
        'max_tokens': 500,
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', data, { headers });
        const text = response.data.choices[0].text.trim();
        setResponse(text);
    } catch (error) {
        console.error(error);
    }
}