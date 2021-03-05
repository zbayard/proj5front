import React,{useState} from 'react'
import ReviewCard from "./ReviewCard";
import NewReview from './NewReview.js';
import {Header, Divider, Comment, Button, Rating} from 'semantic-ui-react'


function ReviewList({id, reviews, handleNewReview, currentUser, deleteReview}) {
    // const [avgRating, setAvgRating] = useState(0)
    const [reviewClick, setReviewClick] = useState(false)

    const reviewCards = reviews.map(review => {
        return <ReviewCard key={review.id} review={review} currentUser={currentUser} deleteReview={deleteReview}/>
    });

    function handleClick(){
        setReviewClick(!reviewClick)
    }

    
    
    //     const ratingArray = reviews.map(review =>{
    //         return review.rating
    //     })
    //     const ratingSum = ratingArray.reduce((a, b) => a+ b, 0)
    //     const averageRating = parseInt(ratingSum / ratingArray.length)
    //     setAvgRating(averageRating)

    // }

    // console.log(getAverage())


    

    


    return (

      <Comment.Group>
            <Header as='h2' id='reviewslist' dividing>
                Reviews
                <Rating  defaultRating={4} maxRating={5} disabled/> 
            </Header>
            {reviewCards}

            <Divider horizontal />

            <Button onClick={handleClick} basic color='black'>Review This Artist</Button>
            {reviewClick ? <NewReview handleNewReview={handleNewReview} currentUser={currentUser} id={id}/>: null}
        </Comment.Group>
      
    );
  }
  
  export default ReviewList;

  