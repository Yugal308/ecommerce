import React from 'react'
import Banner from './Banner'
import FeatureProducts from './FeatureProducts'
import Services from './Services'
import Trusted from './Trusted'

const HomeScreen = () => {
  return (
    <div className="homeScreen">
        <Banner name = "E-Commerce" />
        <FeatureProducts />
        <Services />
        <Trusted />
    </div>
    
  )
}

export default HomeScreen