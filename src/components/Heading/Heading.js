import React from 'react'

const Heading = (props) => {
  return (
    <h1 style={{marginTop:`${props.margin}px `,marginBottom:`${props.margin}px`}}>{props.heading}</h1>
  )
}

export default Heading