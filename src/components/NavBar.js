import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Button, Menu, Segment, Input} from 'semantic-ui-react';

function NavBar({setCurrentUser}) {

  const [activeItem, setActiveItem] = useState('home')

  const history = useHistory()

  function handleLogOut(){
    localStorage.removeItem('token');
        setCurrentUser(null);
        history.push('/login')
    }

    function handleClick(){
      setActiveItem(activeItem)
    }

    return (

      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            as={Link}
            to='/'
            name='home'
            active={activeItem === 'home'}
            onClick={handleClick}
          />
          <Menu.Item
            as={Link}
            to='/artists'
            name='artists'
            active={activeItem === 'artists'}
            onClick={handleClick}
          />
          <Menu.Item
            as={Link}
            to='/profile'
            name='profile'
            active={activeItem === 'profile'}
            onClick={handleClick}
          />
          <Menu.Item
            as={Link}
            to='/login'
            name='login'
            active={activeItem === 'login'}
            onClick={handleClick}
          />
          <Menu.Item
            as={Link}
            to='/signup'
            name='signup'
            active={activeItem === 'signup'}
            onClick={handleClick}
          />
          <Menu.Item
            as={Link}
            to='/'
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleLogOut}
          />
          <Menu.Item position='right'>
            <Input
            action={{ type: 'submit', content: 'Go' }}
            placeholder='Navigate to...'
          />
          </Menu.Item>
          
        </Menu>
      </Segment>

      
      
    );
  }
  
  export default NavBar;


  


{/* <nav className="NavBar">
       
       <>
         <Button inverted color='black' as={Link} to="/artists"> Artists </Button>
         <Button inverted color='black' as={Link} to="/profile"> Profile </Button>
         <Button inverted color='black' as={Link} to='/login'> Login </Button>
         <Button inverted color='black' as={Link} to='/signup'>Sign Up</Button>
         <Button inverted color='black' onClick={handleLogOut}>Log Out</Button>
       </>
     
     
   </nav> */}