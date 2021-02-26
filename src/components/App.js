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

  

    useEffect(()=>
      fetch('http://localhost:3000/artists')
      .then(res => res.json())
      .then(artistData => setArtists(artistData))
    , [])


    const filteredArtists = artists.filter(artist => artist.name.toLowerCase().includes(search.toLocaleLowerCase()))
    

    






  return (

    <>
    <div className="App">
      <Header search={search} setSearch={setSearch}/>
     

      <Switch>
        <Route exact path="/profile">
            <UserProfile/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/artists">
          <ArtistList artists={filteredArtists}/>
        </Route>
        <Route path="/artists/:id">
          <ArtistPage/>
        </Route>
      </Switch>
    </div>
  </>
   
  );
}

export default App;


