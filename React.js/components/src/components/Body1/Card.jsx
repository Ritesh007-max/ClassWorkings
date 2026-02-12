import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <img src={props.image}/>
      <h1>{props.title}</h1>
      <p>{props.disc}</p>
    </div>
  )
}

export default Card
