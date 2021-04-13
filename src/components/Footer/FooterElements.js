import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #00217a;
  color: #fff;
  padding: 4rem 0;
  /* margin: 0; */

  .logo {
    color: #fff;
  }

  h3 {
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

export const WebsiteCopyright = styled.div`
  background-color: #00217a;
  color: #fff;
  padding: 1rem;
  font-size: 0.8rem;
  border-top: solid rgba(255, 255, 255, 0.1) 1px;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  p {
    margin: 0;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: #fe6247;

    &:hover {
      opacity: 0.7;
      transition: 0.3s all ease-in-out;
    }
  }
`;
