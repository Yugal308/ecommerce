import React from 'react'

const Product = (curr) => {
    const {id,name,image,price,category} = curr;
  return (
    <div className="card">
        <h3>{category}</h3>
        <div className="card_image">
            <img src={image} alt={name} />
        </div>
        <div className="card_data">
            <h4>{name}</h4>
            <h4>{price}</h4>
        </div>
    </div>
  )
}

export default Product