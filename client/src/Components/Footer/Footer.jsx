import React from 'react'
import "./Footer.css"
import logo from '../../Images/product/logo-removebg-preview.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className="footermain">
        <div className="footerfirstdiv">
          <img src={logo} alt="" style={{ height: 150 }} />
          <p>Providing premier wire and cable solutions for over 25 years. Committed to quality, efficiency, and customer satisfaction. Your trusted choice for excellence. </p>
        </div>
        <div className="footerseconddiv">
          <p>Quick Links</p>
          <div className='quicklinksdiv'>
            <div>
              <p><Link to='/' style={{ textDecoration: "none", color: "white" }}>Home</Link></p>
              <p><Link to='/about' style={{ textDecoration: "none", color: "white" }}>About</Link></p>
              <p><Link to='/service' style={{ textDecoration: "none", color: "white" }}>Product</Link></p>
              <p><Link to='/service' style={{ textDecoration: "none", color: "white" }}>Contact</Link></p>
            </div>
          </div>
        </div>
        <div className="footerthirddiv">
          <p>Contact Details</p>
          <div><i className="ri-map-pin-user-line"></i><span>485 Hall No-1 GT Road Dilsad Garden New Delhi-110095</span></div>
          <div><i className="ri-phone-line"></i> <span><a href="tel:+919013410101">+91 9873915051</a></span></div>
          <div><i className="ri-mail-line"></i><span><a href="mailto:vvisionglobexindpvtltd@gmail.com">vvisionglobexindpvtltd@gmail.com</a></span></div>
        </div>
        <div className='footerfourdiv'>
          <p>Follow us</p>
          <div>
            <a href="https://www.facebook.com/wirecablemachines" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <i className="ri-facebook-circle-fill" style={{ color: "#1877F2" }}></i>
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <i className="ri-instagram-line" style={{ color: "#f09433" }}></i>
            </a>
            <a href="https://wa.me/9873915051" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <i className="ri-whatsapp-line" style={{ color: "#25D366" }}></i>
            </a>
            {/* <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <i className="ri-linkedin-box-fill" style={{ color: "#0A66C2" }}></i>
            </a> */}
          </div>


        </div>
      </div>
    </footer>
  )
}

export default Footer