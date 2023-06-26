import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
{/* <div className='border border-dark p-3'>
  <h1>Articles</h1>
  <div>
    <p className='font-italic'>The MathPool team shares their best articles to read on topics
       like mathematics creativity, productivity and more. Ready to dive in? </p>
  </div>

  </div> */}

const ArticleCard = () => {
  return (
    <Card className='m-5'>
    <Card.Img variant="top" src="https://abakcus.com/wp-content/uploads/2021/10/How-to-Remember-What-You-Read-Article-Abakcus-1536x1024.jpg" />
    <Card.Body>
      <Card.Title>Article</Card.Title>
      <Card.Text>
  The MathPool team shares their best articles 
  to read on topics like mathematics creativity, productivity and more. Ready to dive in? 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <div className="p-3"> <Link to="/article-api">
          <button className="btn-quiz bg-warning text-dark p-2">Read Here</button>
        </Link></div>
    </Card.Footer>
  </Card>
  )
}

export default ArticleCard