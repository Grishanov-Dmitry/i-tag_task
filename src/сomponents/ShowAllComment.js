import React from 'react'
import { connect } from 'react-redux'

export class AllUserComment extends React.Component {
  render () {
    let content = this.props.allState.userComments === undefined ? <h1>Loading</h1>

      : this.props.allState.userComments[this.props.allState.currentUserId].body

    return (

      <div>
        <div className='allComment'>
          <h1>My whole comment</h1> <br />
          <p>
            { content }
          </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    allState: state
  }
}

export default connect(mapStateToProps)(AllUserComment)
