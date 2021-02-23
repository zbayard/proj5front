import {Card, Image} from 'semantic-ui-react'

function UserProfile() {
    return (
      <Card centered>
          <Image src="hello" alt='user pic' wrapped ui={false} />
          <Card.Content>
            <Card.Header>name</Card.Header>
              <Card.Meta>
                <span className='username'>Username: username</span>
              </Card.Meta>
            <Card.Description>
              bio
            </Card.Description>
          </Card.Content>
      </Card>
    );
  }
  
  export default UserProfile;