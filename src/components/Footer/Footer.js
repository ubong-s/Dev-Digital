import React from 'react';
import { FooterContainer, WebsiteCopyright } from './FooterElements';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';
import { animateScroll as scroll, Link } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <div className='container'>
          <div className='footer-grid'>
            <div className>
              <Link to='/' className='logo' onClick={toggleHome}>
                Dev<span>Digital</span>
              </Link>
              <p className='footer-about'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                doloribus error! Inventore iste unde, doloremque voluptates.
              </p>
              <ul className='footer-social'>
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
            </div>
            <div>
              <h3 className='footer-title'>Quick Links</h3>
              <ul className='footer-links'>
                <li>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </li>
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
                    offset={-150}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='footer-title'>Get In Touch</h3>
              <ul className='footer-links'>
                <li>
                  <p>
                    Our support available to help you 24 hours a day & 7 days a
                    week.
                  </p>
                </li>
                <li>
                  <FaLocationArrow className='icon' /> 123 Ibom Plaza, Uyo
                </li>
                <li>
                  <FaPhone className='icon' />
                  <a href='tel:+1234567890'>+1234567890</a>,{' '}
                  <a href='tel:+9876543210'>+9876543210</a>
                </li>
                <li>
                  <FaEnvelope className='icon' />
                  <a href='#'>info@devdigital.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FooterContainer>
      <WebsiteCopyright>
        <div className='container'>
          <p>
            &copy; DevDigital {new Date().getFullYear()} All Rights Reserved
          </p>
          <p>
            Developed by{' '}
            <a href='https://www.devubong.com/' target='_blank'>
              DevUbong
            </a>
          </p>
        </div>
      </WebsiteCopyright>
    </>
  );
};

export default Footer;
