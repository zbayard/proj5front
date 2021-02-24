import {Divider, Item} from 'semantic-ui-react'

function BookingCard({booking}) {


    return (

      <Item.Group>
        <Item>
            <Item.Image size='tiny' src={booking.user.image} />
            <Divider horizontal />
            <Item.Header>{booking.user.username}</Item.Header>
          <Item.Content text align='left'>
              <Item.Header as='a'>{booking.address} {booking.city}, {booking.state}</Item.Header>
              <Item.Meta>{booking.date} </Item.Meta>
            <Item.Description>
                Start Time: {Date.parse(booking.start_time)} End Time: {booking.end_time}
              <Item.Extra> Total Compensation: ${booking.payment}</Item.Extra>
            
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
     
    );
  }
  
  export default BookingCard;