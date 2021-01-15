import React from 'react'

function Row(props) {
  return (
    <div>
      <p>id: {props.nanoId}</p>
      <p>Name: {props.name}</p>
    </div>
  )
}

export default Row
