import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Button, Menu, Segment, Input, Select} from 'semantic-ui-react';

function NavBar({currentUser, setCurrentUser, search, setSearch, setFilterBy}) {

  const artistTypeOptions = [
    {key: 'all', value: 'all', text: 'all'},
    {key: 'solo artist', value: 'solo artist', text: 'solo artist'},
    {key: 'band/duo', value: 'band/duo', text: 'band/duo'},
    {key: 'dj', value: 'dj', text: 'dj'}
  ]

  function handleFilterChange(e){
    setFilterBy(e.target.innerText)
  }

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
            <Input value={search} placeholder='search by artist' onChange={e => setSearch(e.target.value)}
            />
          </Menu.Item>
            <Select onChange={handleFilterChange} placeholder="select by artist type" options={artistTypeOptions}
            />
          
        </Menu>
      </Segment>

      
      
    );
  }
  
  export default NavBar;


  


