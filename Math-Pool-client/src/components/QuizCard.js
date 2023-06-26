import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
{/* <div className='br-3 '><div><img className='' src='https://e0.pxfuel.com/wallpapers/72/1010/desktop-wallpaper-math-background-thumbnail.jpg'>
</img></div>
<div className=''><button className='q-btn '>Quiz Here</button></div>
</div> */}
const AskQuestionCard = () => {
  return (
    <Card className='m-5'>
        <Card.Img variant="top" src="https://abakcus.com/wp-content/uploads/2021/02/David-Hilberts-23-Problems-500x500.jpg.webp" />
      
        <Card.Footer>
        <div className="p-3"> <Link to="/quiz">
          <button className="btn-quiz bg-warning text-dark p-2">Quiz Here</button>
        </Link></div>
        </Card.Footer>
      </Card>
  )
}

export default AskQuestionCard