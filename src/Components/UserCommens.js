import React from 'react';
import { connect } from 'react-redux';
import { Comment } from './userComment';
import { Link } from 'react-router-dom';
import saveCurrentCommentId from '../action/saveCurrentCommentId';
import saveCurrentComment from '../action/changeCurrentComment';

class UserComments extends React.Component {
    constructor(props) {
        super(props);
        this.showComment = this.showComment.bind(this);
    }

    saveCurrentCommentId(id) {
        this.props.dispatch(
            saveCurrentCommentId( id ) 
        )
    }

    showComment(id) {
        this.saveCurrentCommentId(id);
        this.props.allState.userComments.map(item => {
            if(item.id === id) {
                this.props.dispatch(
                    saveCurrentComment( item.body ) 
                )
            }
        })
    }

    render() {

        const link = this.props.allState.currentCommentId === undefined ? '/user-comments' :
        `/user-comments/:${this.props.allState.currentCommentId}`;

        let content = this.props.allState.userComments === undefined ? <h1>Loading</h1> :

            this.props.allState.userComments.map((item, i) => {
                return(
                    <Link to={link} key={i}>
                        <Comment
                        id={item.id}
                        comment={item.title}
                        key={i}
                        onClick={this.showComment} 
                       />
                    </Link>
                )
            });
            
        return(
            <div className='userComments'>{content}</div>
        )
        
    }
  }

  export default connect( (state) => {
    return {
        allState: state
    }
}) (UserComments);