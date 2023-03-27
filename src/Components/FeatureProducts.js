import React from 'react'
import {useProductContext} from "../Context/productContext"
import Product from './Product';

const FeatureProducts = () => {
  const {isLoading, featureProducts} = useProductContext();

  if(isLoading){
    return <div>.....Loading</div>
  }

  return (
    <div className='featue_section'>
        <div className="intro_data">Check Now</div>
        <div className="feature_heading">Our Feature Services</div>
        <div className="product">
            {
                featureProducts.map((curr)=>{
                    return <Product key={curr.id} {...curr} />
                })
            }
        </div>
    </div>
  )
}

export default FeatureProducts