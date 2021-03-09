import React,{useState} from 'react';
import {Form, Button, Divider, Segment, Header, Image, Icon} from 'semantic-ui-react';
import logomain from '../logos/purple.png';

function NewBooking({handleNewBooking, currentUser, id, setOpen}) {

  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [date, setDate] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  console.log("start", start)
  console.log("end", end)
  function handleBooking(e){
    e.preventDefault()

    const newBooking = {
      user_id: currentUser.id,
      artist_id: id,
      address,
      city,
      state,
      date,
      start_time: start,
      end_time: end,
      payment: 100
    }

    fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBooking)
    })
    .then(r=>r.json())
    .then(bookingToAdd => {
        handleNewBooking(bookingToAdd)
    })

    setOpen(false)
  }

    return (
      <div className="NewBooking">
        
        <Segment inverted>
          <Header as='h2' color='black' textAlign='center'>
            <Image src={logomain} /> New Booking
          </Header>
          <Form onSubmit={handleBooking} inverted>
              <Divider horizontal></Divider>
              <Form.Input icon='location arrow' value={address} onChange={e=> setAddress(e.target.value)}type='text' name='address' placeholder='address'/>
              <Form.Input icon ='map' value={city} onChange={e=> setCity(e.target.value)} type='text' name='city' placeholder='city'/>
              <Form.Input icon='map' value={state} onChange={e=> setState(e.target.value)} type='text' name='state' placeholder='state'/>
              <Form.Input value={date} onChange={e=> setDate(e.target.value)} type='date' name='date' placeholder='date'/>
              <Form.Input value={start} onChange={e=> setStart(e.target.value)} type='time' name='start-time' placeholder='start time'/>
              <Form.Input value={end} onChange={e=> setEnd(e.target.value)} type='time' name='end-time' placeholder='end time'/>
              
              
              <Button type='submit'>Book this Artist</Button>
            
          </Form>
        </Segment>
      </div>
    );
  }
  
  export default NewBooking;