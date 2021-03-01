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
    

    






  return (

    <>
    <div className="App">
      <Header search={search} setCurrentUser={setCurrentUser} setSearch={setSearch}/>
     

      <Switch>
        <Route exact path="/profile">
            <UserProfile/>
        </Route>
        <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/signup">
          <SignUp setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/artists">
          <ArtistList artists={filteredArtists}/>
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


