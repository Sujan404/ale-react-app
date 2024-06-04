import React from 'react'
import './navbar.css';
import logo from '../../assets/react.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact-mail.png';

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='React Logo' className='logo' />
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About Me</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
            <Link className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={contactImg} alt='Contact Image'  className='desktopMenuImg'/> Contact Me
        </button>
    </nav> 
  )
}

export default  Navbar; 