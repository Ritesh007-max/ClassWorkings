import React, { useState, useEffect, useReducer } from "react";
import "./Count.css";

function reducer(state, action) {

  switch (action.type) {
    case "handleInc":
      console.log("HandleInc function called ..... ");
      return { ...state, count: state.count + 1 };
    case "handleDec":
      console.log("HandleDec function called .... ");
      return { ...state, count: state.count - 1 };
  }

  localStorage.setItem("count", state.count);
}

const initaialState = {
  count: 0,
}

function Count() {
  const [state, dispatch] = useReducer(reducer, initaialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "handleInc" });
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch({ type: "handleDec" });
        }}
      >
        Dec
      </button>
    </div>
  );
}

// function Count() {

//   var[count, setCount] = useState(0);

//   function handleCount(id) {

//     if (id == "Inc") {
//       setCount(++count);
//     }
//     else if (id == "Dec") {
//       setCount(--count);
//     }
//     else if (id == "Reset") {
//       setCount(0);
//     }
//   }

//   useEffect(() => {
//     const data = JSON. parse(localStorage.getItem("Count"));
//     setCount(data);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('count:', count);
//   }, [count]);

//     return (

//     <div className='counter-div'>
//       <p className='count-para'>Count: {count}</p>
//       <button className='count-btn' onClick={() => handleCount("Inc")}>increment</button>
//       <button className='count-btn' onClick={() => handleCount("Dec")}>decrement</button>
//       <button className='count-btn' onClick={() => handleCount("Reset")}>reset</button>
//     </div>
//   )
// }

export default Count;
