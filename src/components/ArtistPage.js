import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ReviewList from './ReviewList.js';
import BookingList from "./BookingList";
import {Grid, Icon, Button, Divider} from 'semantic-ui-react'



function ArtistPage() {

  const [artist, setArtist] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reviews, setReviews] = useState([])

  const {id} = useParams();
  console.log(id)

  useEffect(() => {
    fetch(`http://localhost:3000/artists/${id}`)
      .then((r) => r.json())
      .then((artist) => {
        setArtist(artist);
        setIsLoaded(true);
      });
    }, [id]);

      if (!isLoaded) return <h2>Loading...</h2>;

      const {name, image, bio, type, genre, ig, youtube, spotify, soundcloud, facebook, website, rate, feature, likes} = artist;


    return (

      <Grid >
      <Grid.Column width={8} className='artist' border>
        <h1>{name}</h1>
        <img src={image}/>
        <p>{bio}</p>
        <Icon name='facebook square'/>
        <Icon name= 'instagram'/>
        <Icon name='spotify'/>
        <Icon name='soundcloud'/>
        <Icon name='youtube'/>
        <Divider horizontal></Divider>
        <Button basic color='black'>Book This Artist</Button>
        


      </Grid.Column>
      <Grid.Column width={4} className='artistpage' style={{overflow: 'auto', position: 'relative', maxHeight: 700, top: 40}}>
        <BookingList/>
      </Grid.Column>
      <Grid.Column width={4} className='reviewlist'>
        <ReviewList />
      </Grid.Column>
    </Grid>
      
    );
  }
  
  export default ArtistPage;

  