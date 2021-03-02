import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ReviewList from './ReviewList.js';
import BookingList from "./BookingList";
import NewBooking from "./NewBooking.js"
import {Grid, Button, Divider, Item, List, Modal} from 'semantic-ui-react'
import ReactPlayer from 'react-player'




function ArtistPage({currentUser}) {

  const [artist, setArtist] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reviews, setReviews] = useState([])
  const [bookings, setBookings] = useState([])
  const [open, setOpen] = useState(false)

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

    

    function handleNewBooking(newBooking){
      setBookings([...bookings, newBooking])
    }

    function deleteReview(id){

      const updatedReviews = reviews.filter((review) => review.id !== id)
      setReviews(updatedReviews)
    }

    function handleDeletedBooking(id){
      const updatedBookings = bookings.filter((booking) => booking.id !== id)
      setBookings(updatedBookings)
    }

    
      
    
      if (!isLoaded) return <h2>Loading...</h2>;


      const {name, image, bio, type, genre, ig, youtube, spotify, soundcloud, facebook, website, rate, feature, likes} = artist;

      function addLike(){
        
      }


    return (

      <Grid >
        <Grid.Column width={8} className='artist' border>
          <h1>{name}</h1>
          <img src={image} alt={name}/>
          <Divider horizontal></Divider>
          <Button onClick={addLike} size='mini' basic color='black'>{likes} ♥️ </Button>
          <List text align="left">
            <List.Item icon='spotify' content={<a rel="noreferrer" target="_blank" href={spotify}>spotify</a>}/>
            <List.Item icon='soundcloud' content={<a rel="noreferrer" target="_blank" href={soundcloud}>soundcloud</a>}/>
            <List.Item icon='instagram' content={<a rel="noreferrer" target="_blank" href={ig}>instagram</a>}/>
            <List.Item icon='youtube' content={<a rel="noreferrer" target="_blank" href={youtube}>youtube</a>}/>
            <List.Item icon='facebook square' content={<a rel="noreferrer" target="_blank" href={facebook}>facebook</a>}/>
            <List.Item icon='linkify' content={<a rel="noreferrer" target="_blank" href={website}>website</a>}/>
          </List>
          
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
          
          <Modal basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size='small'
          trigger={<Button basic color='black'>Book This Artist</Button>}>
          <NewBooking handleNewBooking={handleNewBooking} currentUser={currentUser} id={id} setOpen={setOpen}/>
          </Modal>

          
        </Grid.Column>
          <Grid.Column width={4} className='artistpage' style={{overflow: 'auto', position: 'relative', maxHeight: 700, top: 40}}>
            <BookingList id={id} bookings={filteredBookings} currentUser={currentUser} handleDeletedBooking={handleDeletedBooking} />
          </Grid.Column>
          <Grid.Column width={4} className='reviewlist'>
            <ReviewList id={id} reviews={filteredReviews} handleNewReview={handleNewReview} currentUser={currentUser} deleteReview={deleteReview} />
          </Grid.Column>
      </Grid>
      
    );
  }
  
  export default ArtistPage;



  