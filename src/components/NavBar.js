import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

function NavBar() {
    return (

      <nav className="NavBar">
       
          <>
            <Button inverted color='black' as={Link} to="/artists"> Artists </Button>
            <Button inverted color='black' as={Link} to="/profile"> Profile </Button>
            <Button inverted color='black' as={Link} to='/login'> Login </Button>
            <Button inverted color='black' as={Link} to='/signup'>Sign Up</Button>
          </>
        
        
      </nav>
      
    );
  }
  
  export default NavBar;