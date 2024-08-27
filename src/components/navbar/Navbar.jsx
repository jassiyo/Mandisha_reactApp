import React, { useEffect, useState } from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""} ${isOpen ? "nav-active" : ""}`}>
      <img className='nav-logo' src={Logo} alt=''/>
      <div className="burger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={toggleMenu}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={toggleMenu}>Contact us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar