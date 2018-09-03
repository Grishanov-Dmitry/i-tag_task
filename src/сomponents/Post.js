import React from 'react'

export class Post extends React.Component {
  render () {
    const { id, comment } = this.props

    return (
      <p onClick={() => this.props.onClick(id)} >{id} {comment}</p>
    )
  }
}
