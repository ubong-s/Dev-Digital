import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   position:relative;
   font-family: 'Source Sans Pro', sans-serif;
   line-height: 1.75;
}

h1, h2, h3, h4, h5, h6 {
   font-family: 'Lora', serif;
   font-weight: 700;
   letter-spacing: 1px;
} 

ul {
   padding: 0;
   margin:0;
   list-style: none
}

a {
   text-decoration: none;
}

.container {
   width: 95%;
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
    }
  }
`;
