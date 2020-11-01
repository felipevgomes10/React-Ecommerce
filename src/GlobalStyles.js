import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  @media (max-width: 31.25em) {
    html {
      font-size: 43.75%;
    }
  }

  @media (max-width: 25em) {
    html {
      font-size: 39.5%;
    }
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    min-height: calc(100vh + 5px);
  }

  h1, h2, h3, h4, p {
    margin: 0px;
  }

  ul, li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`