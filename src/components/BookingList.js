import BookingCard from "./BookingCard";
import NewBooking from './NewBooking.js';
import {Button, Header} from 'semantic-ui-react'

function BookingList({bookings}) {

  const bookingCards = bookings.map(booking => {
    return <BookingCard key={booking.id} booking={booking}/>
  });

    return (
      <div className="BeerList">
           <Header as='h2' id='bookings' dividing>
            Recent Bookings
          </Header>
        {bookingCards}
        
        <NewBooking/>
      </div>
      
    );
  }
  
  export default BookingList;
