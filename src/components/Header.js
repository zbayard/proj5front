import NavBar from "./NavBar";
import SearchFilter from "./SearchFilter";


function Header({search, setSearch, setCurrentUser, setFilterBy}) {
    return (
      <div className="Header">
        <h1>Header</h1>
        <SearchFilter search={search} setSearch={setSearch} setFilterBy={setFilterBy}/>
        <NavBar setCurrentUser={setCurrentUser}/>
      </div>
    );
  }
  
  export default Header;