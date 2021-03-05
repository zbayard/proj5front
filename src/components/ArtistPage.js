import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ReviewList from './ReviewList.js';
import BookingList from "./BookingList";
import NewBooking from "./NewBooking.js"
import {Grid, Button, Divider, Item, List, Modal, Icon, Card, Header, Image} from 'semantic-ui-react'
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

      


    return (

      <Grid >
        <Grid.Column width={8} className='artist' border>
          <Header size='huge' align='center'>{name}</Header>
          <img src={image} alt={name}/>
          <Divider horizontal></Divider>
          <List horizontal size='massive' align="center">
            <List.Item icon='spotify' as='a' target='_blank' href={spotify} />
            <List.Item icon='soundcloud' as='a' target='_blank' href={soundcloud} />
            <List.Item icon='instagram' as='a' target='_blank' href={ig} />
            <List.Item icon='youtube' as='a' target='_blank' href={youtube} />
            <List.Item icon='facebook square' as='a' target='_blank' href={facebook} />
            <List.Item icon='linkify' as='a' target='_blank' href={website} />
          </List>
          <Divider horizontal></Divider>
          <Card fluid color='black'>
            <Card.Content >
              <Card.Header id='artistName'>Featured Content</Card.Header>
                <Card.Meta align='center'>
                <ReactPlayer url={feature}/>
                </Card.Meta>
                  <Card.Description>
                    {bio}
                  </Card.Description>
            </Card.Content>
              <Card.Content extra>
           
              <Icon name='music' />
              {genre} {type}
              <p>${rate}/hour</p>
            
          <Modal basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Button basic color='black'>Book This Artist</Button>}>
            <NewBooking handleNewBooking={handleNewBooking} currentUser={currentUser} id={id} setOpen={setOpen}/>
          </Modal>
              </Card.Content>
            </Card>
          

          
        </Grid.Column>
          <Grid.Column width={4} className='artistpage' style={{overflow: 'auto', position: 'relative', maxHeight: 700, top: 40}}>
            <BookingList id={id} bookings={filteredBookings} currentUser={currentUser} handleDeletedBooking={handleDeletedBooking} />
          </Grid.Column>
          <Grid.Column width={4} className='reviewlist' style={{overflow: 'auto', position: 'relative', maxHeight: 700, top: 40}}>
            <ReviewList id={id} reviews={filteredReviews} handleNewReview={handleNewReview} currentUser={currentUser} deleteReview={deleteReview} />
          </Grid.Column>
      </Grid>
      
    );
  }
  
  export default ArtistPage;







  