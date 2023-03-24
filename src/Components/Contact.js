import React from 'react'
import "./Contact.css"
import Nav from './Nav'

const Contact = () => {
  return (
    <>
    <Nav />
    <div className="contact">
        <h2 className="contact_header">
            Contact Us
        </h2>
        <iframe 
            title=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.931239095906!2d76.36136906512242!3d30.35290403177115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102f534a87b5c5%3A0xda1d3ed337e382b3!2sThapar%20University%2C%20Prem%20Nagar%2C%20Patiala%2C%20Punjab%20147004!5e0!3m2!1sen!2sin!4v1676109007036!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{border:0}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        <div className="conatct_form">
            <form action="" method="POST" className="contact_details">
                <input type="text" placeholder='Username' name="username" required autoComplete='off'/>
                <input type="email" placeholder='Email' name="email" required autoComplete='off'/>
                <textarea cols="30" rows="10" placeholder='Enter your message' name="message" required autoComplete='off'/>
                <button type="submit" className="contact_btn">Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact