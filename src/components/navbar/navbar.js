// This comment below removes the warning from a tags when you don't include a link
/* eslint-disable jsx-a11y/anchor-is-valid */

import Logo from './logo.png'
import Button from '@mui/material/Button';
import './navbar.css';
import React, { useState } from 'react'

function Navbar() {
  const [active, setActive] = useState("nav_menu")
  const [toggleIcon, setToggleIcon] = useState("nav_toggler")

  // function to handle toggling the menu when screen size decreases.
  const navToggle = () => {
    active === 'nav_menu'
      ? setActive('nav_menu nav_active')
      : setActive('nav_menu');

    toggleIcon === 'nav_toggler'
      ? setToggleIcon('nav_toggler')
      : setToggleIcon('nav_toggler')
  }

  return (
    <nav className="nav">
      <img className="logo" src={Logo} alt="website logo." />
      <ul className={active}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><input type="text" className="search-box" placeholder="Search..." /></li>
        <li><Button style={{
        }} variant="contained" size="small">Search</Button></li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar