import { Button, Divider, Form, Grid, Segment, Header, Image, Message } from 'semantic-ui-react'
import {Link, useHistory} from 'react-router-dom'
import { useState } from 'react';
import logomain from '../logos/black.png';

function Login({setCurrentUser}) {

  const [errors, setErrors] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  function handleLogin(e){
    e.preventDefault()

    const loginObject = {
      username,
      password
    }

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginObject)
      })
      .then(r=>r.json())
      .then(data =>  { 
        if (data.errors) { 
          setErrors(data.errors)
        } else { 
          const { user, token } = data;
          localStorage.setItem('token', token)
          setCurrentUser(user)
          history.push('/artists')
        }


    })};


    return (

      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
        <Image src={logomain} /> Log-in to your account
      </Header>
      <Form onSubmit={handleLogin} size='large'>
        <Segment stacked>
          <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                label='Username'
                placeholder='Username'
                value = {username}
                onChange={e=> setUsername(e.target.value)}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={e=> setPassword(e.target.value)}
          />
          {errors.map(error => {
            return <p key={error}>{errors} </p>
          })}
          

          <Button type='submit' color='purple' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to='/signup'>Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>

      
     
    );
  }
  
  export default Login;




  