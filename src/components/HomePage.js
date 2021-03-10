import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react';
  
  import logomain from '../logos/logo.png';


function HomePage(){

    

    

    return (
    <>
        <Container text>
        <Header
          as='h1'
          content='Welcome to gig bag!'
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
          }}
        />
        <Header
          as='h2'
          content='Book local talent in your area for your private events'
          inverted
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
          }}
        />
        <Button as={Link} to='/signup' primary size='huge'>
          Sign Up Now
          <Icon name='right arrow' />
        </Button>
      </Container>
        
        
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help  Aspiring Artists
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We provide a platform for aspiring artists to gain exposure & get paid.  Say goodbye to begging all of your friends to come support you at your underpaid gig at some random bar.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Throw awesome parties
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Order an artist just like you would a pizza.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='https://media.guestofaguest.com/t_article_content/gofg-media/2019/04/1/52182/33993885_204009686987628_1221016922594738176_n.jpg' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button color='black' as={Link} to='/login' size='huge'>Log in to see the artist's in your area</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    </>
   

        
      
    )
}

export default HomePage;