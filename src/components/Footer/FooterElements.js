import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #00217a;
  color: #fff;
  padding: 4rem 0;

  .logo {
    color: #fff;
  }

  .footer-grid {
    display: grid;
    gap: 1rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: start;
      gap: 3rem;
    }

    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .footer-about {
    margin: 2rem 0;
  }

  .footer-social {
    font-size: 1.5rem;
    display: flex;

    li {
      margin-right: 1rem;

      a {
        color: #fff;

        &:hover {
          color: #fe6247;
          transition: 0.3s all ease-in-out;
        }
      }
    }
  }

  .footer-title {
    display: inline-block;
    padding-bottom: 0.5rem;
    border-bottom: 3px dashed #fe6247;
    margin-top: 0;
  }

  .footer-links {
    li {
      margin-bottom: 0.5rem;

      p {
        margin: 0;
      }

      a {
        color: #fff;

        &:hover {
          color: #fe6247;
          transition: 0.3s all ease-in-out;
        }
      }

      .icon {
        font-size: 0.75rem;
        margin-right: 0.5rem;
      }
    }
  }
`;
