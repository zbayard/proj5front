import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import ReviewList from './ReviewList.js';
import BookingList from "./BookingList";
import {Grid, Icon, Button, Divider} from 'semantic-ui-react'



function ArtistPage() {

  const [artist, setArtist] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reviews, setReviews] = useState([])
  const [bookings, setBookings] = useState([])

  const {id} = useParams();
  

  useEffect(() => {
    fetch(`http://localhost:3000/artists/${id}`)
      .then((r) => r.json())
      .then((artist) => {
        setArtist(artist);
        setIsLoaded(true);
      });
    }, [id]);

    useEffect (() => {
      fetch(`http://localhost:3000/reviews`)
      .then(r=>r.json())
      .then(reviewsArr => setReviews(reviewsArr))
    }, [])

    useEffect (() => {
      fetch(`http://localhost:3000/bookings`)
      .then(r=>r.json())
      .then(bookingsArr => setBookings(bookingsArr))
    }, [])


    const filteredBookings = bookings.filter(booking => {
      if(booking.artist_id == id){
        return true
      }else{
        return null
      }
    });

    

    const filteredReviews = reviews.filter(review=>{
      if(review.artist_id == id){
        return true
      }else{
        return null
      }

    });

    function handleNewReview(newReview){
      setReviews([...reviews, newReview])
    }

    
      
    
      if (!isLoaded) return <h2>Loading...</h2>;


      const {name, image, bio, type, genre, ig, youtube, spotify, soundcloud, facebook, website, rate, feature, likes} = artist;

      function addLike(){
        
      }


    return (

      <Grid >
      <Grid.Column width={8} className='artist' border>
        <h1>{name}</h1>
        <img src={image}/>
        <Button onClick={addLike} size='mini' basic color='black'>{likes} ♥️ </Button>
        <p>{bio}</p>
        <Icon link name='facebook square'/>
        <Icon link name= 'instagram'/>
        <Icon link name='spotify'/>
        <Icon link name='soundcloud'/>
        <Icon link name='youtube'/>
       
        <Divider horizontal></Divider>
        <Button basic color='black'>Book This Artist</Button>
        


      </Grid.Column>
      <Grid.Column width={4} className='artistpage' style={{overflow: 'auto', position: 'relative', maxHeight: 700, top: 40}}>
        <BookingList id={id} bookings={filteredBookings}/>
      </Grid.Column>
      <Grid.Column width={4} className='reviewlist'>
        <ReviewList id={id} reviews={filteredReviews} handleNewReview={handleNewReview} />
      </Grid.Column>
    </Grid>
      
    );
  }
  
  export default ArtistPage;

  