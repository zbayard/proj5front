import React,{useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import '../App.css';
import Header from './Header.js';
import HomePage from './HomePage.js';
import UserProfile from './UserProfile.js';
import ArtistPage from './ArtistPage.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import ArtistList from './ArtistList.js';


function App() {

  const [artists, setArtists] = useState([])
  const [search, setSearch] = useState('')
  const [currentUser, setCurrentUser] = useState()
  const [filterBy, setFilterBy] = useState('all')
  const [bookings, setBookings] = useState([])


  useEffect(() => {

    const token = localStorage.getItem('token')
    if (token) { 
      fetch('https://mighty-ocean-44315.herokuapp.com/profile', { 
        headers: { 
          Authorization: `Bearer ${token}`,
        } ,
      })
      .then( r => r.json())
      .then(user => { 
        setCurrentUser(user) 
      });
    };
  },[]);

  

    useEffect(()=>
      fetch('https://mighty-ocean-44315.herokuapp.com/artists')
      .then(res => res.json())
      .then(artistData => setArtists(artistData))
    , [])


    const filteredArtists = artists.filter(artist => artist.name.toLowerCase().includes(search.toLocaleLowerCase()))

    const sortedArtists = filteredArtists.filter(artist => {
      if(filterBy === 'all'){
        return true
      }else{
        return artist.type === filterBy
      }
    })

    useEffect (() => {
      fetch(`https://mighty-ocean-44315.herokuapp.com/bookings`)
      .then(r=>r.json())
      .then(bookingsArr => setBookings(bookingsArr))
    }, [])

    

    






  return (

    <>
    <div className="App">
      <Header search={search} currentUser={currentUser} setCurrentUser={setCurrentUser} setSearch={setSearch} setFilterBy={setFilterBy}/>
     

      <Switch>
        <Route exact path='/'>
            <HomePage currentUser={currentUser}/>
        </Route>
        <Route exact path="/profile">
            <UserProfile bookings={bookings} currentUser={currentUser}/>
        </Route>
        <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/signup">
          <SignUp setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/artists">
          <ArtistList artists={sortedArtists}/>
        </Route>
        <Route path="/artists/:id">
          <ArtistPage bookings={bookings} setBookings={setBookings} currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  </>
   
  );
}

export default App;


