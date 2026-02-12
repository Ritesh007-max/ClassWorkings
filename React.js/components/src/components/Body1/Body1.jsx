import React from 'react'
import Card from './card.jsx'
import './Body1.css'

function Body() {
  return (
    <div className='card-holder'>
      <Card image="https://unsplash.com/photos/a-decorated-christmas-tree-with-colorful-ornaments-and-lights-M3g33c6jVZ8" title="ME" disc="This is me"/>
      <Card image="https://unsplash.com/photos/a-decorated-christmas-tree-with-colorful-ornaments-and-lights-M3g33c6jVZ8" title="You" disc="This is you"/>
    </div>
  )
}

export default Body
