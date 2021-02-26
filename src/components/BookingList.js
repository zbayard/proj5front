import BookingCard from "./BookingCard";

import {Header} from 'semantic-ui-react'

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
        
        
      </div>
      
    );
  }
  
  export default BookingList;
