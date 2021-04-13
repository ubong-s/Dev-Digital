import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body {
   position:relative;
   font-family: 'Source Sans Pro', sans-serif;
   line-height: 1.75;
}

* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}

h1, h2, h3, h4, h5, h6 {
   font-family: 'Lora', serif;
   font-weight: 700;
   letter-spacing: 1px;
   color: #00217a;
   line-height: 1.3;
   margin-bottom: 1.25rem;
}

p {

   margin-bottom:1rem;
}

h1 {
   font-size: 2rem;

   @media screen and (min-width: 1024px) {
   font-size: 3rem;
   }
}

h2 {
   font-size: 1.5rem;

   @media screen and (min-width: 1024px) {
     font-size: 2rem;
    }
}

h4 {
   font-size: 1.15rem;

   @media screen and (min-width: 1024px) {
     font-size: 1.2rem;
    }
}

img {
   width:100%;
}

ul {
   padding: 0;
   margin:0;
   list-style: none;
}

a {
   text-decoration: none;
}

.container {
   width: 92.5%;
   margin: auto;

   @media screen and (min-width: 768px) {
   width: 90%;
   }

   @media screen and (min-width: 1024px) {
   width: 85%;
   max-width: 1200px;
   }
}

.logo {
    font-family: 'Lora', serif;
    font-size: 1.75rem;
    color: #fff;

   span {
      color: #fe6247;
      font-family: 'Lora', serif;
   }
}

.btn {
   cursor: pointer;
   padding: 0.75rem 1.25rem;
   font-size: 1.15rem;
   letter-spacing: 0.5px;
   outline:none;
   border: solid 2px #e7e7e7;
   background-color: transparent;
   font-family: 'Source Sans Pro', sans-serif;
   color: #00217a;
   transition: 0.3s all ease-in-out;

   &:hover {
      border: solid 2px #00217a;
      background-color: transparent;
      transition: 0.3s all ease-in-out;
      color: #fe6247;
   }
}
`;
