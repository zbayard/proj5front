import NewBooking from "./NewBooking";
import NewReview from './NewReview.js'
import ReviewList from './ReviewList.js';
import BookingList from "./BookingList";



function ArtistPage() {
    return (
      <div className="ArtistPage">
        <h1>ArtistPage</h1>
        <NewBooking/>
        <NewReview/>
        <ReviewList/>
        <BookingList/>
      </div>
    );
  }
  
  export default ArtistPage;