import React from 'react'
import UserCommentsBlock from './UserCommentsBlock'

export class CommentParams extends React.Component {
  render () {
    const { id } = this.props.match.params

    return (
      <div>
        <UserCommentsBlock />
        <p> { id }</p>
      </div>
    )
  }
}
