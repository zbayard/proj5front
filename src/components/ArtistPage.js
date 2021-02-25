import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import ReviewList from './ReviewList.js';
import BookingList from "./BookingList";
import NewBooking from "./NewBooking.js"
import {Grid, Icon, Button, Divider, Item, Embed} from 'semantic-ui-react'
import ReactPlayer from 'react-player'




function ArtistPage() {

  const [artist, setArtist] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reviews, setReviews] = useState([])
  const [bookings, setBookings] = useState([])
  const [bookingClick, setBookingClick] = useState(false)

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

    function onBookingClick(){
      setBookingClick(!bookingClick)
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
          <Divider horizontal></Divider>
          <Button onClick={addLike} size='mini' basic color='black'>{likes} ♥️ </Button>
          <Icon link name='facebook square'/>
          <Icon link name= 'instagram'/>
          <Icon link name='spotify'/>
          <Icon link name='soundcloud'/>
          <Icon link name='youtube'/>
          <Item.Group>
            <Item>
              <Item.Content text align='center'>
                  <Item.Header as='a'>{type}</Item.Header>
                  <Item.Meta>Rate/hr: ${rate} </Item.Meta>
                  <Item.Description>Genre: {genre}</Item.Description>
                  <Item.Header>Featured Video</Item.Header>
                  <ReactPlayer url={feature}/>
              </Item.Content>
            </Item>
          </Item.Group>
          <Item.Header>Bio</Item.Header>
              <p>{bio}</p>
              <Divider horizontal></Divider>
          <Button onClick={onBookingClick} basic color='black'>Book This Artist</Button>
          {bookingClick ? <NewBooking/> : null}

          
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



  