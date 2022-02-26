import styled, { css } from "styled-components"

export const Dot = styled.div`
  position: absolute;
  display: inline-block;
  top: 1.85em;
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
  top: 0%;
  left: 0%;
  padding: 1em 0;
  transform: translate(0, 0);
  transition: all 0.5s linear 2s;
  /* border: 1px solid green; */

  ${({ isLoading }) =>
    isLoading &&
    css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
    `}

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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ headerHeight }) => headerHeight + "px"};
  /* border: 1px solid yellow; */
  background: "none";
  transition: all 0.5s linear 2s, height 0s 3s;
  z-index: 10000;

  ${({ isLoading }) =>
    isLoading &&
    css`
      left: calc((100vw - 100%) * -0.5);
      right: calc((100vw - 100%) * -0.5);
      height: 100vh;
      background: ${({ theme }) => theme.background};
    `}
`
