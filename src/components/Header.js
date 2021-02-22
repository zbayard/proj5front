import NavBar from "./NavBar";
import SearchFilter from "./SearchFilter";


function Header() {
    return (
      <div className="Header">
        <h1>Header</h1>
        <SearchFilter/>
        <NavBar/>
      </div>
    );
  }
  
  export default Header;