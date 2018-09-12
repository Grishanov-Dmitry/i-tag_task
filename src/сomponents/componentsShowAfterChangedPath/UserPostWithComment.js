import React from 'react';
import { connect } from 'react-redux';
import { User } from '../simpleComponents';
import { Comment } from '../simpleComponents';

const getContent = userComments => (
    userComments.map( (item, i) => 
        <Comment key={i} data={item} />
    )
);


const UserPostWithComments = ({ currentUserId, users, userComments, currentComment, currentCommentTitle }) => {

    const comment = getContent(userComments);
    
    return (
        <div >
            <User data={users[currentUserId]}/>
            <div className='post_with_comment'>
                <div>
                    <h4>Title</h4>
                    {currentComment}
                </div>
                <div>
                    <h4>Comment</h4>
                    {currentCommentTitle}
                </div>
                { comment }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    currentUserId: state.currentUserId,
    users: state.users,
    userComments: state.userComments,
    currentComment: state.currentComment,
    currentCommentTitle: state.currentCommentTitle
});

export default connect(mapStateToProps)(UserPostWithComments);
