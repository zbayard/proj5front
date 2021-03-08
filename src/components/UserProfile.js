import {Card, Image, Grid, Divider, Header} from 'semantic-ui-react'

function UserProfile({currentUser}) {


  
    return (


      <Grid>
        <Grid.Column width={6} className='artist' border>
          <Divider horizontal></Divider>
          <Header size='huge' align='center' dividing>{currentUser.name}</Header>
          <img src={currentUser.image} alt={currentUser.name}/>
          <Divider horizontal></Divider>
          <Header>{currentUser.username}</Header>
            {currentUser.bio}
          <Divider horizontal></Divider>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </Grid.Column>
        <Grid.Column width={10} >
          <Divider horizontal/>
          <Header size='huge' dividing>Bookings</Header>

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