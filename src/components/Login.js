import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import {Link, useHistory} from 'react-router-dom'
import { useState } from 'react';

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

      <Segment placeholder>
        <Grid columns={1} relaxed='very' stackable>
          <Grid.Column>
            <Form onSubmit={handleLogin}>
              <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
                value = {username}
                onChange={e=> setUsername(e.target.value)}
              />
              <Form.Input
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
              <Button basic color='yellow' type='submit'>Login</Button>
            </Form>
          </Grid.Column>
        
        <Divider horizontal></Divider>
        
          <Grid.Column verticalAlign='middle'>
            
            Don't have an account? <Link to='/signup'>Sign Up</Link>
          </Grid.Column>
        </Grid>
      
      </Segment> 
     
    );
  }
  
  export default Login;