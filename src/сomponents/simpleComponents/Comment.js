import React from 'react'

export const Comment = (props) => {
  const { title, email, body } = props.data
  return (
    <div className='comment'>
      <h3>{title}</h3>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  )
}
