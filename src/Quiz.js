import React, { useState } from "react";
import "./Quiz.css";
import { questions } from "./questions";
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div>
      <div className="container d-flex quiz-box">
        <div className="lg-6 quiz-box-1">
          <span style={{ fontSize: "2.5vw" }}>Question 1/</span>
          {questions.length}
          <div className="ques-content">
            {questions[currentQuestion].questionText}
          </div>
        </div>
        <div className="lg-5 quiz-box-2  ">
          <div className="questions">
            {questions[currentQuestion].answerOption.map((answerOption) => (
              <button className="ans-btn">{answerOption.answerText}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
