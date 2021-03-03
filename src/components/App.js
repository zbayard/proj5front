import React,{useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import '../App.css';
import Header from './Header.js';
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


  useEffect(() => {

    const token = localStorage.getItem('token')
    if (token) { 
      fetch('http://localhost:3000/profile', { 
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
      fetch('http://localhost:3000/artists')
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

    

    






  return (

    <>
    <div className="App">
      <Header search={search} setCurrentUser={setCurrentUser} setSearch={setSearch} setFilterBy={setFilterBy}/>
     

      <Switch>
        <Route exact path="/profile">
            <UserProfile currentUser={currentUser}/>
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
          <ArtistPage currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  </>
   
  );
}

export default App;


