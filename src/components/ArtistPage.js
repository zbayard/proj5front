
import ReviewList from './ReviewList.js';
import BookingList from "./BookingList";
import {Grid} from 'semantic-ui-react'



function ArtistPage() {
    return (

      <Grid >
      <Grid.Column width={4} className='artistpage' style={{overflow: 'auto', position: 'relative', maxHeight: 700, top: 40}}>
        <BookingList/>
      </Grid.Column>
      <Grid.Column width={8} className='artist' border>
        <h1>Artist Info</h1>
      </Grid.Column>
      <Grid.Column width={4} className='reviewlist'>
        <ReviewList />
      </Grid.Column>
    </Grid>
      
    );
  }
  
  export default ArtistPage;

  