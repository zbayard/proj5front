import '../App.css';
import Header from './Header.js';
import UserProfile from './UserProfile.js';
import ArtistPage from './ArtistPage.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import ArtistList from './ArtistList.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <UserProfile />
      <ArtistPage />
      <Login />
      <SignUp />
      <ArtistList />
    </div>
  );
}

export default App;
