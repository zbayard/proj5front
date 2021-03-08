import BookingCard from "./BookingCard";

import {Header} from 'semantic-ui-react'

function BookingList({bookings, currentUser, handleDeletedBooking}) {

  const bookingCards = bookings.map(booking => {
    return <BookingCard key={booking.id} booking={booking} currentUser={currentUser} handleDeletedBooking={handleDeletedBooking}/>
  });

    return (
      <div className="BookingList">
           <Header as='h2' id='bookings' dividing>
            Recent Bookings
          </Header>
        {bookingCards}
       
        
        
        
      </div>
      
    );
  }
  
  export default BookingList;
