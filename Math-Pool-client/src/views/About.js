import React from "react";
import "./About.css";

export const About = () => {
  return (
    <>
      <div className="container-about d-flex">
        <div className="d-flex">
          <div  >
            <h1>MathPool</h1>
            <p className="text-left">
              MathPool is a maths help website that generates answers to
              specific maths questions and problems entered by a user at any
              given moment. Maths answers are generated and displayed in real
              time as soon as a web user types the maths problem and clicks the
              "solve" button. In addition to answers, MathPool also hosts
              tutorial content. It aims to keep students active by publishing
              weekly questions
            </p>
            <br></br>
            <hr></hr>
            <ul className="font-italic">
              <li>Subject summaries</li>
              <li>Ask a question and get an answer</li>
              <li>Weekly quizzes</li>
              <li> Articles from the world of mathematics</li>
            </ul>
          </div>
        </div>

        <div className="about-page-img w-100">
          <img src="https://abakcus.com/wp-content/uploads/2021/09/Math-Is-Personal-768x432.png"></img>
        </div>
      </div>
    </>
  );
};

export default About;
