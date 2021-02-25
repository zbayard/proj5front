import {Form, Button, Divider, Segment} from 'semantic-ui-react'


function NewBooking() {
    return (
      <div className="NewBooking">
        <h2>NewBooking</h2>
        <Segment inverted>
          <Form inverted>
              <Divider horizontal></Divider>
              <Form.Input type='text' name='address' placeholder='address'/>
              <Form.Input type='text' name='city' placeholder='city'/>
              <Form.Input type='text' name='state' placeholder='state'/>
              <Form.Input type='text' name='date' placeholder='date'/>
              <Form.Input type='text' name='start-time' placeholder='start time'/>
              <Form.Input type='text' name='end-time' placeholder='end time'/>
              <Button type='submit'>Book this Artist</Button>
            
          </Form>
        </Segment>
      </div>
    );
  }
  
  export default NewBooking;