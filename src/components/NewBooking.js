import React,{useState} from 'react';
import {Form, Button, Divider, Segment} from 'semantic-ui-react'


function NewBooking({handleNewBooking}) {

  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [date, setDate] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  function handleBooking(e){
    e.preventDefault()

    const newBooking = {
      user_id: 1,
      artist_id: 1,
      address,
      city,
      state,
      date,
      start,
      end,
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

  }

    return (
      <div className="NewBooking">
        <h2>NewBooking</h2>
        <Segment inverted>
          <Form onSubmit={handleBooking} inverted>
              <Divider horizontal></Divider>
              <Form.Input value={address} onChange={e=> setAddress(e.target.value)}type='text' name='address' placeholder='address'/>
              <Form.Input value={city} onChange={e=> setCity(e.target.value)} type='text' name='city' placeholder='city'/>
              <Form.Input value={state} onChange={e=> setState(e.target.value)} type='text' name='state' placeholder='state'/>
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