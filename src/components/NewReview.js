import {Form, Button} from 'semantic-ui-react'

function NewReview() {
    return (
      <div className="NewReview">
        <h2>NewReview</h2>
        <Form>
            <Form.Input type='number' name='rating' placeholder='rating'/>
            <Form.Input type='text' name='comment' placeholder='comment'/>
            
            <Button type='submit'>Leave Review</Button>
        </Form>
      </div>
    );
  }
  
  export default NewReview;