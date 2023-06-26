import React from "react";
import ArticleCard from "../components/ArticleCard";
import PreviousQuestionCard from "../components/PreviousQuestionCard";
import QuizCard from "../components/QuizCard";
import SubjectCard from "../components/SubjectCard";
import "./Home.css";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <div className="home-band rounded-75 d-flex justify-content-between align-items-center">
      <div className="text-white p-3 fs-5">Welcome Merve Aslan ! </div>
      <div className="p-3">
        {" "}
        <Link to="/ask-question">
          <button className="btn-question p-1 ">Ask Question Here</button>
        </Link>
      </div>
    </div>

    <>
      <div className="">
        <CardGroup>
          <SubjectCard />
          <QuizCard />
        </CardGroup>
      </div>
      <div className="">
        {" "}
        <CardGroup>
          <ArticleCard />
          <PreviousQuestionCard />
        </CardGroup>{" "}
      </div>
    </>
  </>
);

export default Home;
