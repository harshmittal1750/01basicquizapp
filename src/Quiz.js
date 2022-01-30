import React from "react";
import "./Quiz.css";
const Quiz = () => {
  return (
    <div>
      <div className="container d-flex quiz-box">
        <div className="lg-6 quiz-box-1">
          <div className="ques">Question 1/4</div>
          <div className="ques-content">
            The Iphone was created by which company.
          </div>
        </div>
        <div className="lg-5 quiz-box-2  ">
          <div>
            {" "}
            <button className="ans-btn">Apples</button>
          </div>
          <div>
            {" "}
            <button className="ans-btn">Intel</button>
          </div>
          <div>
            {" "}
            <button className="ans-btn">Amazon</button>
          </div>
          <div>
            {" "}
            <button className="ans-btn">Microsoft</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
