import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import nulla from '../../images/nulla.svg';

const Mission = () => {
  return (
    <MissionContainer id='mission'>
      <div className='container'>
        <img src={nulla} alt='nulla' />
        <div className='mission-content'>
          <h2>Nulla excepturi cum sed </h2>
          <p>
            Consectetur adipisicing elit. Iste impedit recusandae voluptatem
            accusamus ex eligendi nemo facere asperiores officiis. Cumque
            maiores accusamus ea nulla, aliquam veniam deleniti architecto
            minima nobis, distinctio laudantium consectetur repellendus quod
            dolore sint sapiente corporis, id magnam. Dolores maxime perferendis
            accusamus reprehenderit fugit nihil ex, corporis saepe aliquam,
            dicta a explicabo assumenda enim iure repellat iusto dignissimos
            possimus dolorem vel veritatis ipsam voluptate quae aliquid. Tenetur
            itaque totam eos quidem minus distinctio corrupti deserunt
            reprehenderit, porro maiores dolorem facilis.
          </p>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-125}
            duration={500}
          >
            <button className='btn'>Get Started</button>
          </Link>
        </div>
      </div>
    </MissionContainer>
  );
};

export default Mission;

const MissionContainer = styled.section`
  text-align: center;
  padding: 4rem 0;

  img {
    max-width: 350px;
    max-height: 350px;
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 6rem 0;

    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: start;
      gap: 4rem;
    }

    img {
      max-width: unset;
      max-height: unset;
    }

    .mission-content {
      text-align: left;

      .btn {
        margin-top: 1.5rem;
      }
    }
  }
`;
