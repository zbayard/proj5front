import {Card} from 'semantic-ui-react'
import ArtistCard from "./ArtistCard";

function ArtistList({artists}) {

      const artistCards = artists.map(artist =>{
        return <ArtistCard key={artist.id} artist={artist}/>
      });


      return (
        <div className='ArtistList'>
          <Card.Group itemsPerRow={3}>{artistCards}</Card.Group>
        </div>
      );
  }
  
  export default ArtistList;