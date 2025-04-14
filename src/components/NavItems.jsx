import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/logo1.png'

const NavItems = () => {

  const [menuToggle, setMenuToggle] = useState(false)
  const [socialToggle, setSocialToggle] = useState(false)
  const [headerToggle, setHeaderToggle] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHeaderToggle(true)
    } else {
      setHeaderToggle(false)
    }
  })
  return (
    <header className={`header-section style-4 ${headerToggle ? "header-fixed fadeInUp" : ""}`} >
      <div className={`header-top d-md-none ${headerToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              {" "}
              <span>Create Account</span>
            </Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      {/* header-bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="menu-area">
              <div className="menu">
              <ul className={`lab-ul ${menuToggle ? "open" : ""}`}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link> </li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <Link to='/signup' className='lab-btn me-3 d-none d-md-block'> Create Account</Link>
              <Link to='/login' className='d-none d-md-block'>Login</Link>

              {/* menu-toggler */}
              <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                 <span></span>
                 <span></span>
                 <span></span>
              </div>

              {/* social-toggler */}
              <div className='ellepsis-bar d-md-none' onClick={() => setSocialToggle(!socialToggle)}>
              <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavItems