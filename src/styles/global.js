import { createGlobalStyle } from 'styled-components';

import { colors } from '~/styles/colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    scrollbar-width: thin;
    scrollbar-color: ${colors.secondary} transparent;

    &::-webkit-scrollbar {
      width: 14px;
      height: 18px;
    }
    &::-webkit-scrollbar-thumb {
      height: 6px;
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 7px;
      -webkit-border-radius: 7px;
      background-color: ${colors.secondary};
      box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
        inset 1px 1px 0px rgba(0, 0, 0, 0.05);
      -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
        inset 1px 1px 0px rgba(0, 0, 0, 0.05);
    }
    &::-webkit-scrollbar-button {    width: 0;
      height: 0;
      display: none;
    }
    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }

  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    font-size: 62.5%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    color:#444;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

  svg {
    transition: transform 0.2s;
  }

  svg:hover{
    transform: scale(1.1);
  }
`;
