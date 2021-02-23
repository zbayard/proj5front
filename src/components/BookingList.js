import BookingCard from "./BookingCard";
import NewBooking from './NewBooking.js';
import {Button, Header} from 'semantic-ui-react'

function BookingList() {
    return (
      <div className="BeerList">
           <Header as='h2' id='bookings' dividing>
            Recent Bookings
          </Header>
        <BookingCard/>
        
        <NewBooking/>
      </div>
      
    );
  }
  
  export default BookingList;
