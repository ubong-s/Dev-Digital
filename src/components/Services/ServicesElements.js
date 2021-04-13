import styled from 'styled-components';

export const ServicesContainer = styled.section`
  padding: 4rem 0;
  text-align: center;
  /* background-color: #fffcf6; */

  @media screen and (min-width: 1024px) {
    padding: 6rem 0 8rem;
  }

  .services-top {
    @media screen and (min-width: 1024px) {
      width: 60%;
      margin: auto;
    }
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 0 4rem;
  margin: auto;
  margin-top: 4rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .card {
    /* box-shadow: 0 6px 16px rgb(0 0 0 / 3%); */
    background-color: #fff;
    border: solid 1px #e7e7e7;
    padding: 2.5rem;

    img {
      width: 175px;
      height: 150px;
      /* object-fit: cover; */
    }

    p {
      margin-bottom: 0;
    }
  }
`;
