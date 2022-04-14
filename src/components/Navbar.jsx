import React from 'react';
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <header>
      <h1 className='home'>Sunlight Hours</h1>
      <nav>
        <Link to='/'><h2 className="link">Home</h2></Link>
        <Link to='/cities-form'><h2 className="link">Cities</h2></Link>
        <Link to='/cities-list'><h2 className="link">List of Cities</h2></Link>
      </nav>
    </header>
  )
}

export default Navbar;
