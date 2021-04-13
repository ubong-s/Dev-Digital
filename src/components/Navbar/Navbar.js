import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavbarContainer } from './NavbarElements';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <NavbarContainer>
      <div className='container'>
        <nav className={toggle ? 'active' : null}>
          <div
            className={toggle ? 'hamburger active' : 'hamburger'}
            onClick={toggleMenu}
          >
            <div className='bar bar-1'></div>
            <div className='bar bar-2'></div>
            <div className='bar bar-3'></div>
          </div>
          <div className='center-nav'>
            <Link to='/' className='logo'>
              Dev<span>Digital</span>
            </Link>

            <ul className={toggle ? 'nav-links active' : 'nav-links'}>
              <li>
                <Link to='/' onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to='/services' onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link to='/contact' onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className='nav-social'>
            <li>
              <a href='#'>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaInstagram />
              </a>
            </li>
          </ul>
        </nav>

        <ul className={toggle ? 'mobile-links active' : 'mobile-links'}>
          <li>
            <Link to='/' onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to='/services' onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={closeMenu}>
              Contact
            </Link>
          </li>

          <ul className='mobile-social'>
            <li>
              <a href='#'>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaInstagram />
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
