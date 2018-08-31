import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Comment } from './UserPost'
import saveCurrentCommentId from '../action/saveCurrentCommentId'
import saveCurrentComment from '../action/changeCurrentComment'

class UserComments extends React.Component {
  constructor (props) {
    super(props)
    this.showComment = this.showComment.bind(this)
  }

  saveCurrentCommentId (id) {
    this.props.saveCurrentCommentId(id)
  }

  showComment (id) {
    this.saveCurrentCommentId(id)
    this.props.allState.userComments.map(item => {
      if (item.id === id) {
        this.props.saveCurrentComment(id)
      }
    })
  }

  render () {
    const { currentCommentId, userComments } = this.props.allState

    const link = currentCommentId === undefined ? '/user-posts'
      : `/user-posts/:${currentCommentId}`

    let content = userComments === undefined ? <h1>Loading</h1>

      : userComments.map((item, i) => {
        return (
          <Link to={link} key={i}>
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
    saveCurrentComment: (id) => {
      dispatch(saveCurrentComment(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComments)
