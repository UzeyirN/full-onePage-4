import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='nav-wrapper'>
        <div className='nav-logo'>
          <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
          <span style={{ fontWeight: "700", fontSize: "30px", color: 'rgba(58, 58, 58, 1)' }}>COURSE</span>
        </div>
        <div className='nav-pages'>
          <ul className='nav-ul'>
            <li className='nav-li'><Link to='' className='nav-link'> HOME</Link></li>
            <li className='nav-li'><Link to='about' className='nav-link'> ABOUT US</Link></li>
            <li className='nav-li'><Link to='courses' className='nav-link'> COURSES</Link></li>
            <li className='nav-li'><Link to='elements' className='nav-link'> ELEMENTS</Link></li>
            <li className='nav-li'><Link to='add' className='nav-link'> ADD</Link></li>
            <li className='nav-li'><Link to='contact' className='nav-link'> CONTACT</Link></li>
          </ul>
        </div>
        <div className='nav-contact'>
        <i class="fa-solid fa-phone-volume"></i>
          <span style={{ fontSize: "18px", color: "white" }}>+994552516420</span>
        </div>
      </div>

    </>
  )
}

export default Navbar