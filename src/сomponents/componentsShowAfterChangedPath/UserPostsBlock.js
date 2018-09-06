import React from 'react';
import { connect } from 'react-redux';
import { User } from '../simpleComponents';
import { UserPostsAndComments } from './';

const UserPostsBlock = (props) => {
    const { currentUserId, userComments, users } = props.allState;

    const content = userComments === undefined ? <h1>Loading</h1>
        : <div>
            <User
                data={users[currentUserId]}
            />
        </div>;

    return (
        <div>
            {content}
            <UserPostsAndComments />
        </div>
    );
};

function mapStateToProps (state) {
    return {
        allState: state
    };
}

export default connect(mapStateToProps)(UserPostsBlock);
