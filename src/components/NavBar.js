import {Link, useHistory} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

function NavBar({setCurrentUser}) {

  const history = useHistory()

  function handleLogOut(){
    localStorage.removeItem('token');
        setCurrentUser(null);
        history.push('/login')
    }
    return (

      <nav className="NavBar">
       
          <>
            <Button inverted color='black' as={Link} to="/artists"> Artists </Button>
            <Button inverted color='black' as={Link} to="/profile"> Profile </Button>
            <Button inverted color='black' as={Link} to='/login'> Login </Button>
            <Button inverted color='black' as={Link} to='/signup'>Sign Up</Button>
            <Button inverted color='black' onClick={handleLogOut}>Log Out</Button>
          </>
        
        
      </nav>
      
    );
  }
  
  export default NavBar;