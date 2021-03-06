import React,{useState} from 'react'
import ReviewCard from "./ReviewCard";
import NewReview from './NewReview.js';
import {Header, Divider, Comment, Button, Rating} from 'semantic-ui-react'


function ReviewList({id, reviews, handleNewReview, currentUser, deleteReview}) {
    
    const [reviewClick, setReviewClick] = useState(false)
    
    const reviewCards = reviews.map(review => {
        return <ReviewCard key={review.id} review={review} currentUser={currentUser} deleteReview={deleteReview}/>
    });
    
    function handleClick(){
        setReviewClick(!reviewClick)
    }
    
    
    
    

    


    

    


    return (

      <Comment.Group>
            <Header as='h2' id='reviewslist' dividing>
                Reviews
                {/* <Rating  defaultRating={0} maxRating={5} disabled/>  */}
            </Header>
            {reviewCards}

            <Divider horizontal />

            <Button onClick={handleClick} basic color='black'>Review This Artist</Button>
            {reviewClick ? <NewReview setReviewClick={setReviewClick} handleNewReview={handleNewReview} currentUser={currentUser} id={id}/>: null}
        </Comment.Group>
      
    );
  }
  
  export default ReviewList;

  