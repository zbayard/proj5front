import {Card, Image, Grid, Divider, Header, Item} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function UserProfile({currentUser, bookings}) {


  const filteredBookings = bookings.filter(booking => {
    if(booking.user_id == currentUser.id){
      return true
    }else{
      return null
    }
  });




  const userBookingCards = filteredBookings.map((booking)=> {

    return(    
      <Item >
          <Item.Image size='tiny' src={booking.artist.image} />
          <Item.Content text align='left'>
            <Link to={`/artists/${booking.artist.id}`}><strong>{booking.artist.name}</strong></Link>
              <p></p>
                <Item.Header> {booking.city}, {booking.state}</Item.Header>
            <Item.Description>
              {booking.address}
                <Item.Meta>{booking.date} </Item.Meta>
                  <Item.Extra>Start Time: {booking.start} End Time: {booking.end}</Item.Extra>
        
            </Item.Description>
        
          </Item.Content>
      </Item>)

  })




  


  
    return (


      <Grid>
        <Grid.Column width={8} className='artist' border>
          <Divider horizontal></Divider>
          <Header size='huge' align='center' dividing>{currentUser.name}</Header>
          <img src={currentUser.image} alt={currentUser.name}/>
          <Divider horizontal></Divider>
          <Header>{currentUser.username}</Header>
            {currentUser.bio}
          <Divider horizontal></Divider>
        
        </Grid.Column>
        <Grid.Column width={8} >
          <Divider horizontal/>
          <Header align='left' size='huge' dividing>{currentUser.username}'s Bookings</Header>
          <Item.Group>
            {userBookingCards}
          </Item.Group>


        </Grid.Column>
        
      </Grid>
      
    );
  }
  
  export default UserProfile;
      
      
      
      // <Card centered>
      //     <Image src={currentUser.image} alt='user pic' wrapped ui={false} />
      //     <Card.Content>
      //       <Card.Header>{currentUser.name}</Card.Header>
      //         <Card.Meta>
      //           <span className='username'>Username: {currentUser.username}</span>
      //         </Card.Meta>
      //       <Card.Description>
      //         {currentUser.bio}
      //       </Card.Description>
      //     </Card.Content>
      // </Card>