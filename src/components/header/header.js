import React from 'react'
import './header.css'
import Logo from './logo-transparent.png'

function Header() {
  return (
    <div className="container">
      <img className="header-img" src={Logo} alt="my logo for website"/>
    </div>
  )
}

export default Header
