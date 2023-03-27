import React from 'react'
import "./Errorpage.css"
const Errorpage = () => {
  return (
    <div className='Container'>
      <h2>404</h2>
      <h3>Uh Oh! Looks like you are lost!</h3>
      <p>The Page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
      <button className='banner_btn'>Go back to Home</button>
    </div>
  )
}

export default Errorpage