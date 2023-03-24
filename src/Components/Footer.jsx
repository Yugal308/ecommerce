import React from 'react'
import "./Footer.css"
import {BsInstagram,BsDiscord} from 'react-icons/bs'
import {FaYoutube,FaFacebookMessenger} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className="footer_top">
            <div className="footer_top_text">
                <p>Ready to get started?</p>
                <p>Talk to us today</p>
            </div>            
            <button className='banner_btn'>Get Started</button>
        </div>
        <div className="footer_bottom">
            <div className="footer_info">
                <div className="footer_name">
                    <h3>E-Commerce</h3>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h4>
                </div>
                <div className="footer_subscribe">
                    <h3>Subscribe to get important updates</h3>
                    <input type="text" name ='email' placeholder='Your Email' />
                    <button className='banner_btn btn'>Subscribe</button>
                </div>
                <div className="footer_socials">
                    <h3>Follow us</h3>
                    <BsInstagram />
                    <FaYoutube />
                    <FaFacebookMessenger />
                    <BsDiscord />
                </div>
                <div className="footer_contact">
                    <h3>Call us.</h3>
                    <h4>+91 1234567890</h4>
                </div>
            </div>
            <hr />
            <div className="footer_copy">
                <small>&copy;2023 E-Commerce. All rights Reserved.</small>
                <div>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer