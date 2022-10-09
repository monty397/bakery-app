/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2 className="h2-footer">Tasty Delights &copy; 2022</h2>
        <a className="socials" href='https://www.facebook.com/'><i class='fab fa-facebook-square'></i></a>
        <a className="socials" href='https://www.instagram.com/'><i class='fab fa-instagram'></i></a>
        <a className="socials" href='#'><i class='fab fa-twitter-square'></i></a>
        <a className="socials" href='https://web.whatsapp.com/'><i class='fab fa-whatsapp-square'></i></a>
      </div>
    </div>
  )
}

export default Footer
