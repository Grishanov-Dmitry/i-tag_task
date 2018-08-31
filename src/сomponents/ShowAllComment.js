import React from 'react'
import { connect } from 'react-redux'

export class AllUserComment extends React.Component {
  render () {
    const { currentComment } = this.props.allState

    return (

      <div>
        <div className='allComment'>
          <h1>My whole comment</h1> <br />
          <p>
            { currentComment }
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
