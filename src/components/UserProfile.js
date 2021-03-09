import {Card, Image, Grid, Divider, Header, Item, Icon} from 'semantic-ui-react';
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
                <Item.Header> <Icon name='map'/> {booking.city}, {booking.state}</Item.Header>
            <Item.Description>
              <Icon name='location arrow'/>{booking.address}
                <Item.Meta><Icon name='calendar alternate outline'/>{booking.date} </Item.Meta>
                  <Item.Extra><Icon name='clock outline'/>{booking.start_time} - {booking.end_time}</Item.Extra>
        
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
          
          <Header> <Icon name='at'/>{currentUser.username}</Header>
            <Icon name='map'/> <strong>{currentUser.city}, {currentUser.state}</strong>
            <p></p>
            <Icon name='vcard'/> <strong>{currentUser.bio}</strong>
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