import * as React from 'react';
import { useState } from 'react';
import styles from '../assets/styles/SearchBar.module.css';

const questions = {
    "horror": ["Do you like beeing scary?", "Are you a fan of movies that have a strong emotional impact?"],
    "documents": ["Do you prefer movies that are based on true events?", "Do you prefer film rely more on story and characters?"],
    "actions": ["Do you enjoy movies that have a lot of special effects?", "Are you someone who appreciates a well-crafted and visually stunning film?"],
    "scifi": [`Do you enjoy watching films that are considered as "ahead of their time"?`, "Do you belive in aliens?"],
    "comedy": ["Do you like to laugh?", "Do you like to watch movies that make you laugh?", "Do you want to cheer up now?"],
};

export function SearchBar() {
    const [randomQuestions, setRandomQuestions] = useState([]);
    const [answers, setAnswers] = useState({});

    const getRandomQuestions = () => {
        let tempQuestions = { ...questions };
        let randomQuestions = [];
        for (let key in tempQuestions) {
            let randomIndex = Math.floor(Math.random() * tempQuestions[key].length);
            randomQuestions.push({ question: tempQuestions[key][randomIndex], category: key });
        }
        setRandomQuestions(randomQuestions);
    };

    const handleYesClick = (e, question, category) => {
        e.preventDefault();
        setAnswers({ ...answers, [category]: true });
    };

    const handleNoClick = (e, question, category) => {
        e.preventDefault();
        setAnswers({ ...answers, [category]: false });
    };

    const handleChoice = (e) => {
        e.preventDefault();
        /* Trigger proper categories of films including answers and sort them by rating/popularity */
    };

    return (
        <div>
            {randomQuestions.length ? <form>
                {randomQuestions.map((question, index) => (
                    <div key={index} >
                        <p>{question.question}</p>
                        <button onClick={(e) => handleYesClick(e, question.question, question.category)}>Yes</button>
                        <button onClick={(e) => handleNoClick(e, question.question, question.category)}>No</button>
                    </div>
                ))
                }
                <button onClick={(e) => handleChoice(e)}>Submit</button>
            </form> : <button onClick={getRandomQuestions}>Get Random Questions</button>}
        </div >
    );
}
export default SearchBar;
