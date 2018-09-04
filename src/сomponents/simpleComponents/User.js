import React from 'react'
import { Link } from 'react-router-dom'

export const User = (props) => {
  const { name, email, id } = props.data
  const { street, city } = props.data.address

  return (
    <Link to={`/user-posts/${id}`} >
      <div className='user-information__block' onClick={() => props.onClick(id)}>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{street}</p>
        <p>{city}</p>
      </div>
    </Link>
  )
}
