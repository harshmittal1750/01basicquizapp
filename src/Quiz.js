import React, { useState } from "react";
import "./Quiz.css";
import { questions } from "./questions";
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="container d-flex justify-content-center quiz-box">
      {showScore ? (
        <div
          style={{ fontSize: "50px", marginTop: "auto", marginBottom: "auto" }}
        >
          You scored out of {score} out of {questions.length}
        </div>
      ) : (
        <div className="row">
          <div className="col-sm-6 quesField">
            <span style={{ fontSize: "2.5vw" }}>Question 1/</span>
            {questions.length}
            <div className="ques-content">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="col-sm-6 ansField  ">
            {questions[currentQuestion].answerOption.map((answerOption) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                className="ans-btn"
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
