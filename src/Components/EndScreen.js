import React, {useContext, useEffect} from 'react';
import {QuizContext} from '../Helpers/Contexts';
import {Questions} from '../Helpers/QuestionBank';
import "../App.css";


const EndScreen = () => {
    const {score, setScore, setGameState} = useContext(QuizContext);
    const restartQuiz = () => {
        setScore(0)
        setGameState("menu")
    }

    // useEffect(()=>{
    //     console.log("load!!!");
    //     console.log(score);
    //     }, [score])

    return (
        <div className = "EndScreen">
            <h1>Quiz Finished</h1>
            <h3> {score} / {Questions.length} </h3>
            <button onClick = {restartQuiz}>Restart Quiz</button>
        </div>
    );
}

export default EndScreen;