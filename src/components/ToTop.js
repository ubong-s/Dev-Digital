import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

const ToTop = () => {
  const [show, setShow] = useState(false);

  const showOnScroll = () => {
    if (window.scrollY >= 400) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showOnScroll);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <ToTopWrap className={show ? 'active' : null} onClick={toggleHome}>
      <FaChevronUp />
    </ToTopWrap>
  );
};

export default ToTop;

const ToTopWrap = styled.div`
  cursor: pointer;
  position: fixed;
  display: grid;
  place-items: center;
  background-color: #fe6247;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  bottom: 11%;
  right: 5%;
  transition: all 0.3s ease-in-out;
  animation: scrollTop 1s infinite ease-in-out alternate;
  visibility: hidden;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    visibility: visible;
  }

  @keyframes scrollTop {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;
