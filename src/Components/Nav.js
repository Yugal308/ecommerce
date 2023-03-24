import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.css"
import {FiShoppingCart} from 'react-icons/fi'
import logo from "../Assets/logo.png"
import {CgMenu,CgClose} from 'react-icons/cg'

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState()
  return (
    <div className='nav'>
      <div className={menuIcon ? "logo active" : "logo"}>
        <img src={logo} alt="logo" />
      </div>
      <div className={menuIcon ? "navbars active" : "navbars"}>
        <ul className="navbar_list">
            <li>
                <NavLink onClick={() => setMenuIcon(false)} className="link" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setMenuIcon(false)} className="link" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setMenuIcon(false)} className="link" to="/products">Product</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setMenuIcon(false)} className="link" to="/contact">Contact Us</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setMenuIcon(false)} className="login_btn link" to="/login">Log In</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setMenuIcon(false)} className="cart_logo link" to="/cart">
                    <FiShoppingCart />
                    <span>10</span>
                </NavLink>
            </li>
        </ul>
        <div className="mobile">
            <CgMenu
                name="menu-outline"
                className="mobile-nav-icon"
                onClick={() => setMenuIcon(true)}
            />
            <CgClose
                name="close-outline"
                className="mobile-nav-icon close-outline"
                onClick={() => setMenuIcon(false)}
            />
        </div>
      </div>
      
    </div>
  )
}

export default Nav
