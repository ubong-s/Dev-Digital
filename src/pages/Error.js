import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import lost from '../images/lost.svg';

const Error = () => {
  return (
    <ErrorContainer>
      <div className='container '>
        <img src={lost} alt='lost' />
        <h1>Oops, Someone's Lost</h1>
        <Link to='/'>
          <button className='btn'>Back to Home</button>
        </Link>
      </div>
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 85vh;
  line-height: 1;

  img {
    max-width: 375px;

    @media screen and (min-width: 1024px) {
      max-width: 400px;
    }
  }

  h1 {
    color: #00217a;

    @media screen and (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
  }
`;
