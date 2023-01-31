import styled, { css } from "styled-components"

export const Dot = styled.div`
  position: absolute;
  display: inline-block;
  top: 2.35em;
  width: 0.125em;
  height: 0.125em;
  background: ${({ theme }) => theme.text};
  border-radius: 50%;
  transition: opacity 1s linear, transform 0.5s linear;

  ${({ isLoading }) =>
    isLoading &&
    css`
      opacity: 0;
      transform: scale(20, 20);
    `}
`
export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  font-size: 1.125rem;
  text-align: center;
  top: 0%;
  left: 0%;
  min-width: 100px;
  padding: 1.5em 0;
  transform: translate(0, 0);
  /* transition: all 0.5s linear 2s; */

  /* ${({ isLoading }) =>
    isLoading &&
    css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
    `} */

  span {
    display: inline-block;
    overflow: hidden;
    transition: letter-spacing 0.5s 1s;
  }
  span:nth-child(2) {
    letter-spacing: ${({ isLoading }) => (isLoading ? "-1em" : "0")};
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: ${({ headerPos }) => headerPos.height + "px"};
  padding: 0 ${({ headerPos }) => headerPos.left + "px"};
  transition: background 0.5s linear 2s, width 0s 3s, height 0s 3s;
  z-index: 10000;
/* 
  ${({ isLoading }) =>
    isLoading &&
    css`
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.background};
    `} */
`
