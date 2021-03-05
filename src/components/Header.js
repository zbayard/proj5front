import NavBar from "./NavBar";
import logomain from '../logos/logo.png';



function Header({currentUser, search, setSearch, setCurrentUser, setFilterBy}) {
    return (
      <div className="Header">
        <img className="main-logo" src={logomain}></img>
        <NavBar currentUser={currentUser} setSearch={setSearch} setFilterBy={setFilterBy} setCurrentUser={setCurrentUser}/>
      </div>
    );
  }
  
  export default Header;


  