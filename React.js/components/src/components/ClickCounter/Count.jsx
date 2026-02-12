import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import "./Count.css"


function Count() {
  
  var[count, setCount] = useState(0);
  function handleCount() {
    setCount(++count);
  }

  useEffect(() => {
    console.log("useEffect Runs");
  }, [count]);

    return (

    <div className='counter-div'>
      <p className='count-para'>Count: {count}</p>
      <button className='count-btn' onClick={handleCount}>Click</button>
    </div>
  )
}

export default Count
