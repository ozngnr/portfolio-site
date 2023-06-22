import styled, { createGlobalStyle } from "styled-components";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import { device } from "./breakpoints";

const outfit = Outfit({
  subsets: ["latin"],
  style: "normal",
  weight: ["100", "300", "400"],
});

const roxborough = localFont({
  src: [
    {
      path: "../public/fonts/RoxboroughCF-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/RoxboroughCF-Heavy.woff2",
      weight: "900",
    },
    {
      path: "../public/fonts/RoxboroughCF-HeavyItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});

export const GlobalStyles = createGlobalStyle`
  :root {
    --title-font: ${roxborough.style.fontFamily};
    --body-font: ${outfit.style.fontFamily}
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
    font-family: var(--body-font), sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    overflow-x: hidden;
    
    @media ${device.desktop} {
      font-size: 18px;
    }
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
`;
