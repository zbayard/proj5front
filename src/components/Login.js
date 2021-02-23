import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function Login() {
    return (

      <Segment placeholder>
        <Grid columns={1} relaxed='very' stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
              />
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
                placeholder='Password'
              />
             
              <Button basic color='yellow' type='submit' as={Link} to='/artists'>Login</Button>
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