import React,{useState} from 'react';
import {Divider, Item, Button, Modal, Segment, Form, Header, Image} from 'semantic-ui-react'
import logomain from '../logos/purple.png';

function BookingCard({booking, currentUser, handleDeletedBooking}) {

  
  const [open, setOpen] = useState(false)

  const[address, setAddress] = useState(booking.address)
  const[city, setCity] = useState(booking.city)
  const[state, setState] = useState(booking.state)
  const[date, setDate] = useState(booking.date)
  const[start, setStart] = useState(booking.start_time)
  const[end, setEnd] = useState(booking.end_time)


  function updateBooking(e){
    e.preventDefault()

    const updatedBooking = {
      address,
      city,
      state,
      date,
      start,
      end
    }

    fetch(`http://localhost:3000/bookings/${booking.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        setAddress(data.address)
        setCity(data.city)
        setState(data.state)
        setDate(data.date)
        setStart(data.start_time)
        setEnd(data.end_time)
      })

      setOpen(false)



  }

  function deleteBooking(){

    fetch(`http://localhost:3000/bookings/${booking.id}`, {
      method: 'DELETE'
    })

    handleDeletedBooking(booking.id)

  }





    return (
      
      <>
        <Item.Group>
          <Item>
              <Item.Image size='tiny' src={booking.user.image} />
            <Item.Content text align='left'>
              <p><strong>{booking.user.username}</strong></p>
              
              
                <Item.Header as='a'> {city}, {state}</Item.Header>
              <Item.Description>
                  {address}
                <Item.Meta>{date} </Item.Meta>
                <Item.Extra>Start Time: {start} End Time: {end}</Item.Extra>
              
              </Item.Description>
              
            </Item.Content>
          </Item>
        </Item.Group>
      
        <Modal basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size='small'
          trigger={currentUser.id === booking.user.id ? <Button basic color='black'>Update/Cancel Booking</Button> : null}>
            <Segment inverted>
              <Header as='h2' color='black' textAlign='center'>
                <Image src={logomain} /> Update {currentUser.name}'s Booking
              </Header>
          <Form onSubmit={updateBooking} inverted>
              <Divider horizontal></Divider>
              <Form.Input value={address} onChange={e=> setAddress(e.target.value)}type='text' name='address' placeholder={booking.address}/>
              <Form.Input value={city} onChange={e=> setCity(e.target.value)} type='text' name='city' placeholder={booking.city}/>
              <Form.Input value={state} onChange={e=> setState(e.target.value)} type='text' name='state' placeholder={booking.state}/>
              <Form.Input value={date} onChange={e=> setDate(e.target.value)} type='date' name='date' placeholder={booking.date}/>
              <Form.Input value={start} onChange={e=> setStart(e.target.value)} type='time' name='start-time' placeholder={booking.start_time}/>
              <Form.Input value={end} onChange={e=> setEnd(e.target.value)} type='time' name='end-time' placeholder={booking.end_time}/>
              
              
              <Button type='submit'>Update Booking</Button>
              <Button onClick={deleteBooking}>Cancel Booking</Button>
            
          </Form>
        </Segment>

        </Modal>
      </>
      
  

      
     
    );
  }
  
  export default BookingCard;