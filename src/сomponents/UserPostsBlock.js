import React from 'react'
import { connect } from 'react-redux'
import { User } from './User'
import UserPostsAndComments from './UserPostsAndComments'

class UserPostsBlock extends React.Component {
  render () {
    const { currentUserId, userComments, users } = this.props.allState

    let content = userComments === undefined ? <h1>Loading</h1>
      : <div>
        <User
          data={users[currentUserId]}
        />
      </div>

    return (
      <div>
        {content}
        <UserPostsAndComments />
      </div>

    )
  }
}

function mapStateToProps (state) {
  return {
    allState: state
  }
}

export default connect(mapStateToProps)(UserPostsBlock)
