import React,{useState} from 'react'
import {Form, Button, Rating} from 'semantic-ui-react'

function NewReview({handleNewReview, currentUser, id}) {

  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")


  function handleSubmitReview(e){
    e.preventDefault()

    const newReview ={
      user_id: currentUser.id,
      artist_id: id,
      rating: parseInt(rating),
      comment
    }

    fetch('http://localhost:3000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
      })
      .then(r=>r.json())
      .then(reviewToAdd => {
          handleNewReview(reviewToAdd)
      })



  }

  function handleRating(e, {rating}){
    e.preventDefault();
    setRating(rating);
  }



    return (
      <div className="NewReview">
        <h2>NewReview</h2>
        <Form onSubmit={handleSubmitReview}>
            Rating: <Rating size='huge' maxRating={5} clearable value={rating} onRate={handleRating}/>
            <Form.Input value={comment} onChange={e=> setComment(e.target.value)} type='text' name='comment' placeholder='comment'/>
            
            <Button type='submit'>Leave Review</Button>
        </Form>
      </div>
    );
  }
  
  export default NewReview;