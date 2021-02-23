import { Button, Comment, Rating} from 'semantic-ui-react'

function ReviewCard() {
    return (
      <Comment text align='left'>
          <Comment.Avatar src='hello' />
          <Comment.Content>
            <Comment.Author as='a'>username</Comment.Author>
            <Comment.Text>comment</Comment.Text>
            <p>
              <Rating defaultRating={5} maxRating={5} disabled />
            </p>
            <Comment.Actions>
              <Button size='mini' basic color='black'> ♥️ </Button>
              <Button size='mini' basic color='black'> ✖︎ </Button>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
    );
  }
  
  export default ReviewCard;