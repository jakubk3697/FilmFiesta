import { useState } from 'react';
import styles from '../assets/styles/RandomQuestions.module.scss';

const questions = {
    "horror": ["Do you like beeing scary?", "Are you a fan of movies that have a strong emotional impact?"],
    "documents": ["Do you prefer movies that are based on true events?", "Do you prefer film rely more on story and characters?"],
    "actions": ["Do you enjoy movies that have a lot of special effects?", "Are you someone who appreciates a well-crafted and visually stunning film?"],
    "scifi": [`Do you enjoy watching films that are considered as "ahead of their time"?`, "Do you belive in aliens?"],
    "comedy": ["Do you like to laugh?", "Do you like to watch movies that make you laugh?", "Do you want to cheer up now?"],
};

export const RandomQuestions = () => {
    const [randomQuestions, setRandomQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [answered, setAnswered] = useState([]);
    const [errInfo, setErrInfo] = useState(false);

    const getRandomQuestions = () => {
        setAnswers({});
        setAnswered([]);
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
        setAnswered([...answered, question]);
    };

    const handleNoClick = (e, question, category) => {
        e.preventDefault();
        setAnswers({ ...answers, [category]: false });
        setAnswered([...answered, question]);
    };

    const handleChoice = (e) => {
        e.preventDefault();
        answered.length < randomQuestions.length ? setErrInfo(true) : setErrInfo(false);
        console.log(answers);
        /* Trigger proper categories of films including answers and sort them by rating/popularity */
    };

    return (
        <div className={styles.container}>
            <button
                className={`${styles.btn} ${styles.getBtn}`}
                onClick={getRandomQuestions}
            >
                Get Random Questions
            </button>

            <form className={styles.form}>
                {randomQuestions.map((question, index) => (
                    !answered.includes(question.question) && (
                        <div className={styles.formElem} key={index}>
                            <p className={styles.question}>{question.question}</p>
                            <button
                                className={`${styles.btn} ${styles.yesBtn}`}
                                onClick={(e) => handleYesClick(e, question.question, question.category)}
                            >
                                Yes
                            </button>
                            <button
                                className={`${styles.btn} ${styles.noBtn}`}
                                onClick={(e) => handleNoClick(e, question.question, question.category)}
                            >
                                No
                            </button>
                        </div>
                    )

                ))
                }

                {errInfo ? <p className={styles.errInfo}>Please answer all questions</p> : null}

                <button
                    className={`${styles.btn} ${styles.submitBtn}`}
                    onClick={(e) => handleChoice(e)}
                >
                    Submit
                </button>
            </form>
        </div >
    );
}
export default RandomQuestions;
