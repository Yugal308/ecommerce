import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Banner.css"
import img from "../Assets/Banner_logo.jpg"

const Banner = ({name}) => {
  return (
    <div className='container'>
        <div className="banner_grid">
            <div className="banner_data">
                <p className="heading">Welcome to</p>
                <h1>{name}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere fugit quae nulla, tenetur iusto nobis adipisci alias, at facilis repellat laboriosam, delectus earum eum officiis dolor eaque? Quam, numquam?</p>
                <NavLink to={"/product"}>
                    <button className="banner_btn">
                        Show More
                    </button>
                </NavLink>
            </div>
            <div className="banner_image">
                <img src={img} alt="banner_Image" />
            </div>
        </div>
    </div>
  )
}

export default Banner