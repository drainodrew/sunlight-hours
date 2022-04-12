import React from 'react';
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <header>
      <h1>Sunlight Hours</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/cities-form'>Cities</Link>
      </nav>
    </header>
  )
}

export default Navbar;
