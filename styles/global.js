import { createGlobalStyle } from "styled-components"
import normalize from "styled-normalize"

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  html,
  body {
    /* height: 100%; */
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`
