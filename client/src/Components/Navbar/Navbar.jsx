import React, { useState } from 'react';
import logo from '../../Images/product/logo-removebg-preview.png';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <section>
        {/* Desktop Navbar */}
        <div className="desktop">
          <div className="navlogo">
           <Link to='/'> <img src={logo} alt="Logo" /></Link>
          </div>
          <div className="navlinks">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="mobile">
          <div className="navlogomobile">
            <img src={logo} alt="Logo" />
            <div className="navmenu" onClick={toggleMobileMenu}>
            {mobileMenuOpen?<i class="ri-close-line"></i>:<i className="ri-menu-line"></i>
            
            }
              
            </div>
          </div>
          {mobileMenuOpen ? (
            <div className="navlinksmobile">
              <ul>
                <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
                <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
                <li><Link to="/product" onClick={toggleMobileMenu}>Product</Link></li>
                <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
              </ul>
            </div>
          ):null
        }
        </div>
      </section>
    </>
  );
};

export default Navbar;
