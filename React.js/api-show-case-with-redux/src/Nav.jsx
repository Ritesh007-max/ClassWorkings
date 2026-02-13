import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to="/">Users List</Link>
            <Link to="/products">Product Store</Link>
        </nav>
    )
}

export default Nav