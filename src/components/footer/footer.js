/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2 className="h2-footer">Tasty Delights &copy; 2022</h2>
        <a className="socials" href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon></a>
        <a className="socials" href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon></a>
        <a className="socials" href='https://www.twitter.com'><FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon></a>
        <a className="socials" href='https://web.whatsapp.com/'><FontAwesomeIcon icon={faWhatsappSquare}></FontAwesomeIcon></a>
      </div>
    </div>
  )
}

export default Footer
