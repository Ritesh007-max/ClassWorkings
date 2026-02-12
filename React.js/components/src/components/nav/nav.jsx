import Contacts from './contacts'
import Logo from './logo'
import './nav.css'

import React from 'react'

function Nav() {
  return (
    <div className='nav'>
        <Logo/>
        <Contacts/>
    </div>
  )
}

export default Nav