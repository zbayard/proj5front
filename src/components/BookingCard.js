import {Item} from 'semantic-ui-react'

function BookingCard() {
    return (

      <Item.Group>
        <Item>
            <Item.Image size='tiny' src='hello' />
          <Item.Content text align='left'>
              <Item.Header as='a'>Location</Item.Header>
              <Item.Meta>Date </Item.Meta>
            <Item.Description>
                Start Time/End Time
              <Item.Extra>rate</Item.Extra>
            
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
     
    );
  }
  
  export default BookingCard;