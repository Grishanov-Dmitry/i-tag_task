import React from 'react';
import { connect } from 'react-redux';
import { User } from './user';
import UserComments from './UserCommens';

class UserCommentsBlock extends React.Component {

    render() {
        const curentUserId = this.props.allState.currentUserId - 1;

        let content = this.props.allState.userComments === undefined ? <h1>Loading</h1> : 
            <div>
                
                <User 
                    userName={this.props.allState.users[curentUserId].username}
                    email={this.props.allState.users[curentUserId].email}
                    street={this.props.allState.users[curentUserId].address.street}
                    city={this.props.allState.users[curentUserId].address.city} 
                />
            </div>
        
        return(
            <div>
                {content}
                <UserComments />
            </div>
            
        ) 
    }
  }

  export default connect( (state) => {
    return {
        allState: state
    }
}) (UserCommentsBlock);