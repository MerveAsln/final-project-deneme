import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import questionService from "../services/questionService";
import Form from "react-bootstrap/Form";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";

function QuestionPosts() {
  const [questions, setQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getQuestions = async () => {
    const questions = await questionService.getQuestions();
    setQuestions(questions);
  };

  const filterQuestionsByCategory = () => {
    if (selectedCategory === "all") {
      setSelectedCategory(null);
      getQuestions();
    } else {
      const filteredQuestions = questions.filter(
        (question) => question?.subject === selectedCategory
      );
      return filteredQuestions;
    }
  };

  console.log(questions);

  useEffect(() => {
    getQuestions();
    filterQuestionsByCategory();
  }, [selectedCategory]);

  return (
    <Container>
      <Form.Select
        className="my-3"
        aria-label="Default select example"
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory || "all"}
      >
        <option value="all">All Categories</option>
        <option value="Arithmetic operations">Arithmetic operations</option>
        <option value="Place value system">Place value system</option>
        <option value="Measurement">Measurement</option>
        <option value="Basic algebra">Basic algebra</option>
        <option value="Basic statistics">Basic statistics</option>
      </Form.Select>
      <Row>
        {questions.length > 0 ? (
          questions.map((question) => (
            <Col
            // xs={12} md={6}
            >
              <CardComponent
                key={question.id}
                question={question}
                getQuestions={getQuestions}
              />
            </Col>
          ))
        ) : (
          <h1 className="text-light">No questions yet</h1>
        )}
      </Row>
    </Container>
  );
}

export default withAuthenticationRequired(QuestionPosts, {
  onRedirecting: () => <Loading />,
});
