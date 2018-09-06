import React from 'react'

export const TestComponent = (props) => {
  this.click = () => {
    console.log('click')
  }
  return (
    <div onClick={this.click}>
      <h1>{props.name}</h1>
      <p>email</p>
      <p>street</p>
      <p>city</p>
    </div>
  )
}
