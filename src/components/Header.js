import NavBar from "./NavBar";



function Header({search, setSearch, setCurrentUser, setFilterBy}) {
    return (
      <div className="Header">
        <h1>stuff</h1>
        <NavBar setSearch={setSearch} setFilterBy={setFilterBy} setCurrentUser={setCurrentUser}/>
      </div>
    );
  }
  
  export default Header;


  