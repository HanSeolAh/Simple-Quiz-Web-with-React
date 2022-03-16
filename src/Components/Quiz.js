import React, {useState, useContext, useEffect} from 'react'
import {Questions} from '../Helpers/QuestionBank'
import {QuizContext} from '../Helpers/Contexts';


const Quiz = () => {

    const {score, setScore, setGameState} = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionsChosen, setOptionChosen] = useState("");

    // useEffect(()=>{
    //     console.log("load!!!");
    //     console.log(score);
    //     }, [score])

    const nextQuestion = () => {

        //console.log("정답 => "+Questions[currQuestion].answer + " 고른답 => " + optionsChosen);

        if (Questions[currQuestion].answer == optionsChosen) {
            //console.log("스코어 => " + score);
            setScore(score + 1);
            //console.log("현재스코어 => " + score);
        }
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        //console.log("정답 => "+Questions[currQuestion].answer + " 고른답 => " + optionsChosen);
        if (Questions[currQuestion].answer == optionsChosen) {
            //console.log("스코어 => " + score);
            setScore(score + 1);
            //console.log("현재스코어 => " + score);
        }
        setGameState("endScreen");
    }

    return (
        <div className = "Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className = "options">
                <button onClick={() => setOptionChosen("A")}> {Questions[currQuestion].optionA}{""}</button>
                <button onClick={() => setOptionChosen("B")}> {Questions[currQuestion].optionB}{""}</button>
                <button onClick={() => setOptionChosen("C")}> {Questions[currQuestion].optionC}{""}</button>
                <button onClick={() => setOptionChosen("D")}> {Questions[currQuestion].optionD}{""}</button>
                <button onClick={() => setOptionChosen("E")}> {Questions[currQuestion].optionE}{""}</button>
            </div>

            {currQuestion == Questions.length - 1 ? (<button onClick = {finishQuiz}> Finish Quiz </button>) :
            (<button onClick = {nextQuestion}>Next Question</button>)}
        </div>
    )
}

export default Quiz;