import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { NavbarContainer } from './NavbarElements';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <NavbarContainer scrollNav={scrollNav}>
      <div className='container'>
        <nav className={scrollNav || toggle ? 'active' : null}>
          <div
            className={toggle ? 'hamburger active' : 'hamburger'}
            onClick={toggleMenu}
          >
            <div className='bar bar-1'></div>
            <div className='bar bar-2'></div>
            <div className='bar bar-3'></div>
          </div>
          <div className='center-nav'>
            <Link to='/' className={toggle ? 'logo active' : 'logo'}>
              Dev<span>Digital</span>
            </Link>

            <ul className={toggle ? 'nav-links active' : 'nav-links'}>
              <li>
                <Link
                  to='hero'
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to='services'
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='mission'
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-125}
                  duration={500}
                >
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
            <Link
              to='hero'
              spy={true}
              smooth={true}
              offset={-125}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to='services'
              spy={true}
              smooth={true}
              offset={-125}
              duration={500}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to='mission'
              spy={true}
              smooth={true}
              offset={-125}
              duration={500}
              onClick={closeMenu}
            >
              Mission
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
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
      <div
        className={toggle ? 'mobile-nav-bg active' : 'mobile-nav-bg'}
        onClick={closeMenu}
      ></div>
    </NavbarContainer>
  );
};

export default Navbar;
