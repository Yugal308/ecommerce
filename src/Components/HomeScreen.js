import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Nav from './Nav'
import Services from './Services'
import Trusted from './Trusted'

const HomeScreen = () => {
  return (
    <div className="homeScreen">
        <Nav />
        <Banner name = "E-Commerce" />
        <Services />
        <Trusted />
        <Footer />
    </div>
    
  )
}

export default HomeScreen