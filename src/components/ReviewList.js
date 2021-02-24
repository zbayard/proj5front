import ReviewCard from "./ReviewCard";
import NewReview from './NewReview.js';
import {Header, Divider, Comment, Button} from 'semantic-ui-react'


function ReviewList({id, reviews, handleNewReview}) {

    const reviewCards = reviews.map(review => {
        return <ReviewCard key={review.id} review={review}/>
    });


    return (

      <Comment.Group>
            <Header as='h2' id='reviewslist' dividing>
                Reviews 
            </Header>
            {reviewCards}

            <Divider horizontal />

            <Button basic color='black'>Review This Artist</Button>
            <NewReview handleNewReview={handleNewReview}/>
        </Comment.Group>
      
    );
  }
  
  export default ReviewList;

  