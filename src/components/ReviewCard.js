import { Button, Comment, Rating} from 'semantic-ui-react'

function ReviewCard({review}) {

  


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
              {/* <Button size='mini' basic color='black'> ♥️ </Button>
              <Button size='mini' basic color='black'> ✖︎ </Button> */}
            </Comment.Actions>
          </Comment.Content>
        </Comment>
    );
  }
  
  export default ReviewCard;