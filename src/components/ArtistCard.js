import {Card, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function ArtistCard() {
    return (
      <Card fluid color='black'>
        <Card.Content >
          <Card.Header id='artistName'>Artist Name</Card.Header>
            <Card.Meta>
              <span className='location'>City, State</span>
            </Card.Meta>
              <Card.Description>
                <Link to={`/artists/1`}>{`More Info on this artist`}</Link>
              </Card.Description>
        </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='beer' />
              artist style
            </a>
          </Card.Content>
      </Card>
    );
  }
  
  export default ArtistCard;