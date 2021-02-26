import NavBar from "./NavBar";
import SearchFilter from "./SearchFilter";


function Header({search, setSearch}) {
    return (
      <div className="Header">
        <h1>Header</h1>
        <SearchFilter search={search} setSearch={setSearch}/>
        <NavBar/>
      </div>
    );
  }
  
  export default Header;