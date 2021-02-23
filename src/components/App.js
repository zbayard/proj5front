import {Switch, Route} from 'react-router-dom'

import '../App.css';
import Header from './Header.js';
import UserProfile from './UserProfile.js';
import ArtistPage from './ArtistPage.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import ArtistList from './ArtistList.js';


function App() {
  return (

    <>
    <div className="App">
      <Header/>
     

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
          <ArtistList/>
        </Route>
        <Route path="/artists/1">
          <ArtistPage/>
        </Route>
      </Switch>
    </div>
  </>
   
  );
}

export default App;

<div className="App">
<Header/>
<UserProfile />
<ArtistPage />
<Login />
<SignUp />
<ArtistList />
</div>
