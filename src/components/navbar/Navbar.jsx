import React from 'react'
import { NavLink } from 'react-router-dom'
import home from "/home.png"
import note from "/todo.png"
import profile from "/profile.png"
import './navbar.scss';
const Navbar = () => {
  return (
    <nav className='nav-mobile'>
        <NavLink to={'/home'}>
            <img src={home} alt="Icon for home" />
        </NavLink>
        <NavLink to={'/note'}>
            <img src={note} alt="Icon for note" />
        </NavLink>
        <NavLink to={'/profile'}>
            <img src={profile} alt="Icon for profile" />
        </NavLink>
    </nav>
  )
}

export default Navbar