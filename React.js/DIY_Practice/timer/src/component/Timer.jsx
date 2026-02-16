import React, { useEffect, useState } from 'react'

const timer = () => {
    const[seconds, setSeconds] = useState(60)
    const [isRunning, setIsRunning]  = useState(false)

    let id = null;

    useEffect(() => {
        if (seconds > 0 && isRunning) {
            handleStart();
        }
        else {
            clearInterval(id);
        }
    }, [isRunning, seconds])

    const handleStart = ()  =>{
        id =setInterval(()=>{
            setSeconds((prev)=>prev-1)
        },1000)
    }
  return (
    <div>
        <h1>{seconds}</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  )
}

export default timer
