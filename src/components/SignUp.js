import { Form, Grid, Segment, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (

      <Segment placeholder>
        <Grid columns={1} relaxed='very' stackable>
          <Grid.Column>
            <Form>
              <Form.Input
              icon='user'
              iconPosition='left'
              label='Name'
              />
              <Form.Input
              icon='user'
              iconPosition='left'
              label='Username'
              />
              <Form.Input
              icon='lock'
              iconPosition='left'
              label='Password'
              type='password'
              />
              <Form.Input
              icon='images'
              iconPosition='left'
              label='Image'
              />
              <Form.Input
              icon='vcard'
              iconPosition='left'
              label='Bio'
              />
              <Link basic color='yellow' type='submit' to='/artists'>Check Out Artists!</Link>
            </Form>
          </Grid.Column>
              <Divider horizontal></Divider>
  
          <Grid.Column verticalAlign='middle'>
            Already have an account? <Link to='/login'>Sign In</Link>
          </Grid.Column>
        </Grid>
      </Segment>
      
    );
  }
  
  export default SignUp;