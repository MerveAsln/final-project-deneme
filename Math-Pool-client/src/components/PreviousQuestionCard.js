import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
{/* <div className='border border-dark w-25 p-3'>
<h1>Previous Questions</h1>
<div>
 <p>The MathPool asks you if you would like to look at questions that have
 MathPool asks you if you would like to look at questions that have already been asked and answered and answer the question of your choice  already been asked and answered and answer the question of your choice </p>
</div>

</div> */}
const PreviousQuestionCard = () => {
  return (
    <Card className='m-5'>
    <Card.Img variant="top" src="https://abakcus.com/wp-content/uploads/2022/12/Secrets-to-Acing-AP-Calculus-AB-How-to-Study-Effectively-scaled.jpeg.webp" />
    <Card.Body>
      <Card.Title>All Questions</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <div className="p-3"> <Link to="/all-questions">
          <button className="btn-quiz bg-warning text-dark p-2">Click Here</button>
        </Link></div>
    </Card.Footer>
  </Card>
  )
}

export default PreviousQuestionCard