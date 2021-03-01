import {Comment, Rating, Button} from 'semantic-ui-react'

function ReviewCard({review, currentUser}) {

  


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
             {currentUser.id === review.user.id ? <Button basic color='yellow'>Delete</Button> : null}
            </Comment.Actions>
          </Comment.Content>
        </Comment>
    );
  }
  
  export default ReviewCard;