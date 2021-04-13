import styled from 'styled-components';

export const NavbarContainer = styled.header`
  position: sticky;
  top: 0;
  padding: 1rem 0;
  z-index: 2;

  @media screen and (min-width: 1024px) {
    margin: 1rem 0;
    top: 1rem;
  }

  nav {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 1rem;
    transition: 0.3s all ease-in-out;

    &.active {
      box-shadow: 0 6px 16px rgb(0 0 0 / 6%);
    }

    .hamburger {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      width: 30px;
      height: 30px;
      transition: 0.3s all ease-in-out;

      .bar {
        width: 100%;
        height: 3px;
        background-color: #00217a;
        margin: auto;
        transition: 0.3s all ease-in-out;
      }

      .bar-2 {
        width: 50%;
      }

      &:hover {
        transition: 0.3s all ease-in-out;

        .bar-2 {
          width: 100%;
        }
      }

      &.active {
        position: relative;

        .bar {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          transition: 0.3s all ease-in-out;
        }

        .bar-1 {
          transform: rotate(45deg);
        }

        .bar-2 {
          opacity: 0;
        }
        .bar-3 {
          transform: rotate(-45deg);
        }
      }
    }

    .center-nav {
      position: relative;
      text-align: center;
      transition: 0.3s all ease-in-out;

      .logo {
        color: #00217a;
        font-size: 2rem;

        @media screen and (min-width: 1024px) {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-20%, -50%);
          transition: 0.3s all ease-in-out;

          &.active {
            opacity: 0;
            transition: 0.3s all ease-in-out;
          }
        }
      }

      .nav-links {
        display: none;
      }

      @media screen and (min-width: 1024px) {
        .nav-links {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          font-family: 'Lora', serif;
          background-color: #fff;
          transition: 0.3s all ease-in-out;
          opacity: 0;
          transform: scale(0);

          li {
            margin-right: 2rem;
            font-size: 1.25rem;

            a {
              color: #00217a;
              transition: 0.3s all ease-in-out;
              cursor: pointer;

              &:hover {
                color: #fe6247;
                transition: 0.3s all ease-in-out;
              }

              &.active {
                color: #fe6247;
              }
            }
          }

          &.active {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }

    .nav-social {
      display: none;
    }

    @media screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 2.5rem;
      padding: 1.5rem 2rem;

      .nav-social {
        display: flex;
        font-size: 1.5rem;
        justify-self: end;

        a {
          color: #00217a;
          margin-left: 1rem;

          &:hover {
            color: #fe6247;
            transition: 0.3s all ease-in-out;
          }
        }
      }
    }
  }

  .container {
    position: relative;
  }

  .mobile-links {
    position: absolute;
    top: 5rem;
    width: 100%;
    padding: 1.5rem 0;
    text-align: center;
    background-color: #fff;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-100%);
    transition: 0.3s all ease-in-out;
    z-index: 1;

    li {
      padding: 1rem 0;
      font-family: 'Lora', serif;
      font-size: 1.25rem;

      a {
        color: #00217a;
        cursor: pointer;

        &:hover {
          color: #fe6247;
          transition: 0.3s all ease-in-out;
        }
      }
    }

    &.active {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      transition: 0.3s all ease-in-out;
      border-top: solid 3px #fe6247;
      box-shadow: 0 6px 16px rgb(0 0 0 / 6%);
    }

    .mobile-social {
      display: flex;
      justify-content: center;

      li {
        font-size: 1.5rem;
        margin: 0 1rem;
      }
    }

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  .mobile-nav-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: -1;
    transform: translateY(100%);
    opacity: 0;
    transition: 0.3s all ease-in-out;

    &.active {
      transform: translateY(0);
      opacity: 1;
    }

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;
