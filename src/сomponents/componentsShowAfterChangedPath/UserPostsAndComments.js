import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Post } from '../simpleComponents'
import saveCurrentCommentId from '../../action/saveCurrentCommentId'
import saveCurrentComment from '../../action/changeCurrentComment'
import loadComments from '../../action/loadComments'

const UserComments = (props) => {
  this.saveCurrentCommentId = (id, state) => {
    props.saveCurrentCommentId(id, state)
  }

  this.showComment = (id) => {
    const { userComments } = props.allState
    props.loadComments(id)
    saveCurrentCommentId(id)
    userComments.map(item => {
      if (item.id === id) {
        props.saveCurrentComment(id, item.title, item.body)
      }
      return item // For debbug error in console
    })
  }

  const { userComments } = props.allState

  const content = userComments === undefined ? <h1>Loading</h1>

    : userComments.map((item, i) => {
      return (
        <Link to={`/user-posts/${item.userId}/${item.id}`} key={i}>
          <Post
            id={item.id}
            comment={item.title}
            key={i}
            onClick={this.showComment}
          />
        </Link>
      )
    })

  return (
    <div className='userComments'>{content}</div>
  )
}

function mapStateToProps (state) {
  return {
    allState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveCurrentCommentId: (id) => {
      dispatch(saveCurrentCommentId(id))
    },
    saveCurrentComment: (id, currentComment, currentCommentBody) => {
      dispatch(saveCurrentComment(id, currentComment, currentCommentBody))
    },
    loadComments: (id) => {
      dispatch(loadComments(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComments)
