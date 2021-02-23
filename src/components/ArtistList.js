import {Card} from 'semantic-ui-react'
import ArtistCard from "./ArtistCard";

function ArtistList() {
    return (
      <div className='ArtistList'>
        <Card.Group itemsPerRow={3}><ArtistCard/> </Card.Group>
      </div>
    );
  }
  
  export default ArtistList;