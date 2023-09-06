import styled, { createGlobalStyle } from "styled-components";
import { bodyFF, headingFF } from "../utils/constants";
import { device } from "./breakpoints";

export const GlobalStyles = createGlobalStyle`
  :root {
    --title-font: ${headingFF.style.fontFamily};
    --body-font: ${bodyFF.style.fontFamily}
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    --scroll-behavior: smooth !important;
    scroll-behavior: smooth !important;
  }
  html,
  body {
    text-rendering: optimizeSpeed;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    font-family: var(--body-font), sans-serif;
    overflow-x: hidden;
  }
  section {
    position: relative;
  }
  /* Typography */
  h1,
  h2 {
    font-family: var(--title-font), sans-serif;
  }

  p {
    line-height: 1.4;
    font-family: var(--body-font); 
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
  }
`;

export const BaseContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2em;

  @media ${device.laptop} {
    padding: 3rem 7.5rem;
  }
  @media ${device.desktop} {
    padding: 3rem 0;
  }
`;
