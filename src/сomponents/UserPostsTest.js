import React from 'react'
import { connect } from 'react-redux'

class UserPosts extends React.Component {
  render () {
    return (
      <div>
        <h1>
                    Hello tratatat
        </h1>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    allState: state
  }
}

export default connect(mapStateToProps)(UserPosts)
