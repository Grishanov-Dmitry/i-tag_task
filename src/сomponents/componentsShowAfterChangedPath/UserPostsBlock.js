import React from 'react';
import { connect } from 'react-redux';
import { User } from '../simpleComponents';
import { UserPostsAndComments } from './';

const UserPostsBlock = ({currentUserId, users}) => {

    const content = 
        <div>
            <User data={users[currentUserId]} />
        </div>;

    return (
        <div>
            {content}
            <UserPostsAndComments />
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUserId: state.currentUserId,
    users: state.users,
    userComments: state.userComments,
}
);
export default connect(mapStateToProps)(UserPostsBlock);
