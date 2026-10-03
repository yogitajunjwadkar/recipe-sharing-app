import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='logo'> 🍴 Recipe Hub </Link>
      <div className='nav-link'>
         <Link to="/">Home</Link>
         <Link to="/recipes">Recipes</Link>
         <Link to="/add-recipe">Add Recipe</Link>
      </div>
    </nav>
  )
}

export default Navbar
