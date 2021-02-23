import {Card, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function ArtistCard({artist}) {

  const {name, image, genre, type, rate, id} = artist

    return (
      <Card fluid color='black'>
        <Card.Content >
          <Card.Header id='artistName'>{name}</Card.Header>
            <Card.Meta>
              <img src={image} alt={name}/>
            </Card.Meta>
              <Card.Description>
                <Link to={`/artists/${id}`}>{`More Info on ${name}`}</Link>
              </Card.Description>
        </Card.Content>
          <Card.Content extra>
           
              <Icon name='music' />
              {genre} {type}
              <p>${rate}/hour</p>
            
          </Card.Content>
      </Card>
    );
  }
  
  export default ArtistCard;