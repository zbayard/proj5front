import React,{useState} from 'react'
import { Form, Grid, Segment, Divider, Button, Header, Image, Message } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'

function SignUp({setCurrentUser}) {


  const [errors, setErrors] = useState([])
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')
  const [bio, setBio] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const history = useHistory()

  function handleSignUp(e){
    e.preventDefault()

    const loginObject = {
      name,
      username,
      password,
      image,
      bio,
      city,
      state

    }

    fetch('http://localhost:3000/signup', {
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
          <Image src='/logo.png' /> Log-in to your account
        </Header>
          <Form onSubmit={handleSignUp} size='large'>
            <Segment stacked>
            <Form.Input
              icon='user'
              iconPosition='left'
              label='Name'
              value={name}
              onChange={e=> setName(e.target.value)}
            />
            <Form.Input
              icon='user'
              iconPosition='left'
              label='Username'
              value={username}
              onChange={e=> setUsername(e.target.value)}
            />
            <Form.Input
              icon='lock'
              iconPosition='left'
              label='Password'
              type='text'
              value={password}
              onChange={e=> setPassword(e.target.value)}
            />
            <Form.Input
              icon='images'
              iconPosition='left'
              label='Image'
              value={image}
              onChange={e=> setImage(e.target.value)}
            />
            <Form.Input
              icon='vcard'
              iconPosition='left'
              label='Bio'
              value={bio}
              onChange={e=> setBio(e.target.value)}
            />
            <Form.Input
              icon='vcard'
              iconPosition='left'
              label='City'
              value={city}
              onChange={e=> setCity(e.target.value)}
            />
            <Form.Input
              icon='vcard'
              iconPosition='left'
              label='state'
              value={state}
              onChange={e=> setState(e.target.value)}
            />
            {errors.map(error => { 
              return <p key={error}>{errors} </p>
            })}
              
              
              

              <Button type='submit' color='purple' fluid size='large'>
                Create Account
              </Button>
            </Segment>
          </Form>
        <Message>
          Already have an account? <Link to='/login'>Log In</Link>
        </Message>
      </Grid.Column>
    </Grid>

      
      
    );
  }
  
  export default SignUp;





  







