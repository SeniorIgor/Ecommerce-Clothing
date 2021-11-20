import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    
    &.modal-open {
      overflow: hidden;
      padding-right: 17px;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }

  * {
    box-sizing: border-box;
  }

  .wrapper {
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }
`;
