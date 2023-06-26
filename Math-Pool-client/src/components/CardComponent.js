import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import React from "react";

function CardComponent({ question, getQuestions }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          "https://abakcus.com/wp-content/uploads/2022/05/All-You-Need-is-Love-Printable-Fun-Math-Poster-scaled.jpg" ||
          question.image
        }
      />
      <Card.Body>
        <Card.Title>{question?.subject}</Card.Title>
        <Card.Text>{question?.question}</Card.Text>
        <Link to="/show-question">
          <button className="btn p-1 ">Go</button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
