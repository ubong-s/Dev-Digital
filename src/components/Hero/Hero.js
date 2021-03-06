import React from 'react';
import { HeroContainer } from './HeroElements';
import heroImg from '../../images/hero.svg';

const Hero = () => {
  return (
    <HeroContainer id='hero'>
      <div className='container'>
        <h1>Creative plan for your business</h1>
        <p>
          Praesentium quia quos ullam, animi vel nulla asperiores, sed
          aspernatur impedit voluptatum eius repellendus, iure consequatur
          voluptatem. Nihil dolorem, eum quos nesciunt tempore, veritatis ex
          quia culpa tempora molestias commodi, explicabo optio.
        </p>
        <img src={heroImg} alt='' />
      </div>
    </HeroContainer>
  );
};

export default Hero;
