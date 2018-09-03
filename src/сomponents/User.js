import React from 'react'
import { Link } from 'react-router-dom'

export class User extends React.Component {
  render () {
    const { name, email, id } = this.props.data
    const { street, city } = this.props.data.address

    return (
      <Link to={`/user-posts/${id}`}>
        <div className='user-information__block' onClick={() => this.props.onClick(id)}>
          <h1>{name}</h1>
          <p>{email}</p>
          <p>{street}</p>
          <p>{city}</p>
        </div>
      </Link>
    )
  }
}
