import styled, { createGlobalStyle } from 'styled-components';
import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';
import { device } from './breakpoints';

const outfit = Outfit({
  subsets: ['latin'],
  style: 'normal',
  weight: ['300', '400'],
});

console.log(outfit);
const roxborough = localFont({
  src: [
    {
      path: '../public/fonts/RoxboroughCF-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/RoxboroughCF-Heavy.woff2',
      weight: '900',
    },
    {
      path: '../public/fonts/RoxboroughCF-HeavyItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
});

export const GlobalStyles = createGlobalStyle`
  :root {
    --roxborough-font: ${roxborough.style.fontFamily};
    --outfit-font: ${outfit.style.fontFamily}
  }

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
    text-rendering: optimizeSpeed;
    font-family: var(--outfit-font), sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-size: 16px;

  }
  section {
    position: relative;
  }
  /* Typography */
  h1,
  h2,
  h3 {
    font-family: var(--roxborough-font), sans-serif;
  }

  p {
    line-height: 1.4;
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
