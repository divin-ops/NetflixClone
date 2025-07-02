import React from 'react'
import './Footer.css'
import instagram from '../../assets/insta.png'
import fb from '../../assets/facebook.png'
import twi from '../../assets/twitter.png'
import yout from '../../assets/youtube.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={instagram} alt="" />
        <img src={fb} alt="" />
        <img src={twi} alt="" />
        <img src={yout} alt="" />
        
      </div>
      <ul>
          <li>Audio Description</li>
          <li>Help Centre </li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie preferences</li>
          <li>Corporate Informations</li>
          <li>Contact Us</li>
        </ul>
        <p className='copyright-text'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer 
