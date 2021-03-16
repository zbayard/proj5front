import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ReviewList from './ReviewList.js';
import BookingList from "./BookingList";
import NewBooking from "./NewBooking.js"
import {Grid, Button, Divider, Item, List, Modal, Icon, Card, Header, Image} from 'semantic-ui-react'
import ReactPlayer from 'react-player'




function ArtistPage({currentUser, bookings, setBookings}) {


  
  
  
  const [artist, setArtist] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reviews, setReviews] = useState([])
  // const ratingArray = filtered.map(review =>{
  //   return review.rating
  // })
  // const ratingSum = ratingArray.reduce((a, b) => a+ b, 0)
  // const averageRating = parseInt(ratingSum / ratingArray.length)
  // const [avgRating, setAvgRating] = useState(3)
  
  const [open, setOpen] = useState(false)

  const {id} = useParams();

  
  
  

  useEffect(() => {
    fetch(`https://mighty-ocean-44315.herokuapp.com/artists/${id}`)
      .then((r) => r.json())
      .then((artist) => {
        setArtist(artist);
        setIsLoaded(true);
      });
    }, [id]);

    useEffect (() => {
      fetch(`https://mighty-ocean-44315.herokuapp.com/reviews`)
      .then(r=>r.json())
      .then(reviewsArr => setReviews(reviewsArr))
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

      // const avgRating = artist.reviews.map((review) => review.rating).reduce((a,b) => a + b, 0)/artist.ratings.length

      
      


    return (

      <Grid className='artistpagefull' >
        <Grid.Column width={4} className='artist' border>
          <Divider horizontal></Divider>
          <Header size='huge' align='center' dividing>{name}</Header>
          <img src={image} alt={name}/>
    
          <List horizontal size='massive' align="center">
            <List.Item icon='spotify' as='a' target='_blank' href={spotify} />
            <List.Item icon='soundcloud' as='a' target='_blank' href={soundcloud} />
            <List.Item icon='instagram' as='a' target='_blank' href={ig} />
            <List.Item icon='youtube' as='a' target='_blank' href={youtube} />
            <List.Item icon='facebook square' as='a' target='_blank' href={facebook} />
            <List.Item icon='linkify' as='a' target='_blank' href={website} />
          </List>
          <Divider horizontal></Divider>
          
        
          

          
        </Grid.Column>
          <Grid.Column width={8} className='artistpage' style={{overflow: 'auto', position: 'relative', maxHeight: 700, top: 40}}>
          <Card  fluid color='purple' style={{color: '#1b1c1d' }}>
            <Card.Content >
              <Card.Header id='artistName'>Featured Content</Card.Header>
                <Card.Meta align='center'>
                <ReactPlayer url={feature}/>
                </Card.Meta>
                  <Card.Description>
                    <Icon name='vcard'/>{bio}
                  </Card.Description>
            </Card.Content>
              <Card.Content extra>
           
              <Icon name='music' />
              {genre} {type}
              <p><Icon name='usd'/>{rate}/hour</p>
            
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
            <BookingList id={id} bookings={filteredBookings} currentUser={currentUser} handleDeletedBooking={handleDeletedBooking} />
          </Grid.Column>
          <Grid.Column width={4} className='reviewlist' style={{overflow: 'auto', position: 'relative', maxHeight: 700, top: 40}}>
            <ReviewList id={id} reviews={filteredReviews} handleNewReview={handleNewReview} currentUser={currentUser} deleteReview={deleteReview} />
          </Grid.Column>
      </Grid>
          
      
    );
  }
  
  export default ArtistPage;







  