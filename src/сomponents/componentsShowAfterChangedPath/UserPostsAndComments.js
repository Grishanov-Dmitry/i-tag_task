import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Post } from '../simpleComponents';
import saveCurrentCommentIdAcion from '../../action/saveCurrentCommentId';
import { CHANGE_CURRENT_COMMENT } from '../../action';
import { LOAD_COMMENTS } from '../../action';

const showComment = (userComments, currentId) => {
    LOAD_COMMENTS(currentId);
    saveCurrentCommentIdAcion(currentId);
    userComments.forEach(({id, title, body}) => {
        if (id === currentId) {
            CHANGE_CURRENT_COMMENT(id, title, body);
        }
    });
};

const UserComments = ({userComments}) => {

    const content = userComments.map(({title, userId, id}, i) => 
        <Link to={`/user-posts/${userId}/${id}`} key={i}>
            <Post
                id={id}
                comment={title}
                key={i}
                onClick={ () => showComment(userComments, id) }
            />
        </Link>
    );

    return (
        <div className='userComments'>{content}</div>
    );
};



const mapStateToProps = ({userComments}) => ({
    userComments
}
);

const mapDispatchToProps = (dispatch) => {
    return {
        saveCurrentCommentId: (id) => {
            dispatch(saveCurrentCommentIdAcion(id));
        },
        CHANGE_CURRENT_COMMENT: (id, currentComment, currentCommentBody) => {
            dispatch(CHANGE_CURRENT_COMMENT(id, currentComment, currentCommentBody));
        },
        LOAD_COMMENTS: (id) => {
            dispatch(LOAD_COMMENTS(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComments);
