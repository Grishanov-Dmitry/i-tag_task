import React from 'react'
import { connect } from 'react-redux'
import { User } from '../simpleComponents'

const UserPostWithComments = (props) => {
  const { currentUserId, users, userComments } = props.allState

  const comment = userComments.map((item, i) => {
    return (
      <div className='comment' key={i}>
        <h3>{item.title}</h3>
        <p>{item.email}</p>
        <p>{item.body}</p>
      </div>
    )
  })
  return (
    <div >
      <User data= {users[currentUserId]}/>
      <div className='post_with_comment'>
        <div>
          <h4>Title</h4>
          {props.allState.currentComment}
        </div>
        <div>
          <h4>Comment</h4>
          {props.allState.currentCommentTitle}
        </div>
        { comment }
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    allState: state
  }
}

export default connect(mapStateToProps)(UserPostWithComments)
