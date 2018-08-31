import React from 'react'
import { connect } from 'react-redux'
import { User } from './User'
import UserComments from './UserCommens'

class UserCommentsBlock extends React.Component {
  render () {
    const { currentUserId, userComments, users } = this.props.allState
    const curentUserId = currentUserId - 1

    let content = userComments === undefined ? <h1>Loading</h1>
      : <div>

        <User
          data={users[currentUserId]}
        />
      </div>

    return (
      <div>
        {content}
        <UserComments />
      </div>

    )
  }
}

function mapStateToProps (state) {
  return {
    allState: state
  }
}

export default connect(mapStateToProps)(UserCommentsBlock)
