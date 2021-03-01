import React from 'react'
import ReviewCard from "./ReviewCard";
import NewReview from './NewReview.js';
import {Header, Divider, Comment, Button, Rating} from 'semantic-ui-react'


function ReviewList({id, reviews, handleNewReview, currentUser}) {
    // const [avgRating, setAvgRating] = useState(0)

    const reviewCards = reviews.map(review => {
        return <ReviewCard key={review.id} review={review} currentUser={currentUser}/>
    });

    
    
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
                <Rating  defaultRating={0} maxRating={5} disabled/> 
            </Header>
            {reviewCards}

            <Divider horizontal />

            <Button basic color='black'>Review This Artist</Button>
            <NewReview handleNewReview={handleNewReview} currentUser={currentUser} id={id}/>
        </Comment.Group>
      
    );
  }
  
  export default ReviewList;

  