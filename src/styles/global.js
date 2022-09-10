import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-family: "Roboto Slab", sans-serif;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  body::-webkit-scrollbar {
    width: 0.8rem;
    
  }

  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
  }

  body::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  a {
    text-decoration: none;
  }

  button, a {
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`