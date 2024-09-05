import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [sidetoggle, setSideToggle] = useState(false)


  const handletoggleBtn = () => {
    setSideToggle(!sidetoggle)
  }

  const logout = () => {
    sessionStorage.clear()
    window.location.href="/"
  }
  return (
    <>
      <header>
        <div className="top-head">
          <div className="right">
            <h2>Vvision Globex Admin Panel</h2>
            <div className="bar" onClick={handletoggleBtn}>
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="left">
            <a href="" target="_blank">
              <i class="fa-solid fa-globe"></i>
              Go To Website
            </a>

            {/* <div className="logout">
              Log Out <i class="fa-solid fa-right-from-bracket"></i>
            </div> */}
          </div>

        </div>

        <div className={`rightNav ${sidetoggle ? "active" : ""} `}>
          <ul>
            <li><Link to="/dashboard" onClick={handletoggleBtn}> <i class="fa-solid fa-gauge"></i> Dashboard</Link></li>
            <li><Link to="/all-category" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Manage Category</Link></li>
            <li><Link to="/all-products" onClick={handletoggleBtn}> <i class="fa-solid fa-layer-group"></i> Manage Product</Link></li>
            <li><Link to="/all-tags" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Manage Contact query</Link></li>
            <li><Link to="/all-banners" onClick={handletoggleBtn}> <i class="fa-regular fa-images"></i> Manage Banners</Link></li>
            <button className='logout mb-5' onClick={logout}>Log Out <i class="fa-solid fa-right-from-bracket"></i></button>

          </ul>
        </div>

      </header>
    </>
  )
}

export default Header