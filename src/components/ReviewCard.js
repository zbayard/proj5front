import {Comment, Rating, Button} from 'semantic-ui-react'

function ReviewCard({review, currentUser, deleteReview}) {

  function handleDeleteClick(){

    fetch(`http://localhost:3000/reviews/${review.id}`, {
    method: 'DELETE'
    })
    deleteReview(review.id)
    
  }

  


    return (
      <Comment text align='left'>
          <Comment.Avatar src={review.user.image} />
          <Comment.Content>
            <Comment.Author as='a'>{review.user.username}</Comment.Author>
            <Comment.Text>{review.comment}</Comment.Text>
            <p>
              <Rating defaultRating={review.rating} maxRating={5} disabled />
            </p>
            <Comment.Actions>
             {currentUser.id === review.user.id ? <Button onClick={handleDeleteClick} basic color='yellow'>Delete</Button> : null}
            </Comment.Actions>
          </Comment.Content>
        </Comment>
    );
  }
  
  export default ReviewCard;