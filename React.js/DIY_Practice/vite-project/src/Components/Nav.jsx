import React from 'react'
import {Link} from "react-router-dom";


function Nav() {
  return (
    <div>
      <h1>MyLogo</h1>

      <ul>
        <li><Link to = "API1"/>API1</li>
        <li><Link to = "API2"/>API2</li>
      </ul>
    </div>
  )
}

export default Nav
