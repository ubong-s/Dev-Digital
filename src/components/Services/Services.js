import React from 'react';
import { ServicesContainer, ServicesGrid } from './ServicesElements';
import design from '../../images/design.svg';
import develop from '../../images/develop.svg';
import search from '../../images/search.svg';
import market from '../../images/market.svg';

const Services = () => {
  return (
    <ServicesContainer>
      <div className='container'>
        <div className='services-top'>
          <h2>We Provide Awesome Services</h2>
          <p>
            Nesciunt, nihil nisi qui ut in animi ipsum necessitatibus porro
            expedita nostrum dolorum minima dicta minus provident pariatur
            tenetur.
          </p>
        </div>

        <ServicesGrid>
          <article className='card'>
            <img src={design} alt='ui/ux design' />
            <h4>UI/UX Design</h4>
            <p>
              Dolorum dicta recusandae nemo facilis tempore reiciendis iste
              quibusdam.
            </p>
          </article>
          <article className='card'>
            <img src={develop} alt='development' />
            <h4>Development</h4>
            <p>
              Cumque repellendus deleniti ratione libero reprehenderit
              voluptates.
            </p>
          </article>
          <article className='card'>
            <img src={search} alt='search engine' />
            <h4>Search Engine </h4>
            <p>
              Consequuntur soluta libero expedita exercitationem porro id
              laudantium.
            </p>
          </article>
          <article className='card'>
            <img src={market} alt='marketing' />
            <h4>Marketing</h4>
            <p>
              Consequuntur soluta libero expedita exercitationem porro id
              laudantium.
            </p>
          </article>
        </ServicesGrid>
      </div>
    </ServicesContainer>
  );
};

export default Services;
