import {Card, Image} from 'semantic-ui-react'

function UserProfile({currentUser}) {
    return (
      <Card centered>
          <Image src={currentUser.image} alt='user pic' wrapped ui={false} />
          <Card.Content>
            <Card.Header>{currentUser.name}</Card.Header>
              <Card.Meta>
                <span className='username'>Username: {currentUser.username}</span>
              </Card.Meta>
            <Card.Description>
              {currentUser.bio}
            </Card.Description>
          </Card.Content>
      </Card>
    );
  }
  
  export default UserProfile;