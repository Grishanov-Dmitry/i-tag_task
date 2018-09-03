import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Comment } from './Comment'
import saveCurrentCommentId from '../action/saveCurrentCommentId'
import saveCurrentComment from '../action/changeCurrentComment'
import loadComments from '../action/loadComments'

class UserComments extends React.Component {
  constructor (props) {
    super(props)
    this.showComment = this.showComment.bind(this)
  }

  saveCurrentCommentId (id, state) {
    this.props.saveCurrentCommentId(id, state)
  }

  showComment (id) {
    const { userComments } = this.props.allState
    this.props.loadComments(id)
    this.saveCurrentCommentId(id)
    userComments.map(item => {
      if (item.id === id) {
        this.props.saveCurrentComment(id, item.title, item.body)
      }
    })
  }

  render () {
    const { userComments } = this.props.allState

    let content = userComments === undefined ? <h1>Loading</h1>

      : userComments.map((item, i) => {
        return (
          <Link to={`/user-posts/${item.userId}/${item.id}`} key={i}>
            <Comment
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
