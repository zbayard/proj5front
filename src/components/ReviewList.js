import ReviewCard from "./ReviewCard";
import NewReview from './NewReview.js';
import {Header, Divider, Comment, Button} from 'semantic-ui-react'


function ReviewList() {


    return (

      <Comment.Group>
            <Header as='h2' id='reviewslist' dividing>
                Reviews 
            </Header>
            <ReviewCard/>

            <Divider horizontal />

            <Button basic color='black'>Review This Artist</Button>
            <NewReview />
        </Comment.Group>
      
    );
  }
  
  export default ReviewList;

  