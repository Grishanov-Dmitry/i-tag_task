import React from 'react'

export const Post = (props) => {
  const { id, comment } = props
  return (
    <p onClick={() => props.onClick(id)} >{id} {comment}</p>
  )
}
