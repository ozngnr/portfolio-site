import styled, { css } from "styled-components"

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 90%;
  margin: auto;
  max-width: 1440px;
  height: 4em;
  background: ${({ theme }) => theme.background};
  z-index: 9999;
`
export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: ${({ navOpen }) => (navOpen ? 0 : "100%")};
  background: ${({ theme }) => theme.background};
  transition: left 0.2s ease-out;
  z-index: -1;

  @supports (backdrop-filter: blur(10px)) {
    background: ${({ theme }) => theme.bgNavigation};
    backdrop-filter: blur(10px);
  }

  @media (min-width: 900px) {
    position: unset;
    float: right;
    width: auto;
    background: none;
    backdrop-filter: none;
  }
`
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`
export const NavItem = styled.li`
  font-size: 2rem;
  margin: 1em 0;

  @media (min-width: 900px) {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 0 1.5em;
  }
`
export const NavLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.text};
  border: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.accent};
  }
`

export const NavToggle = styled.button`
  border: none;
  padding: 0.825em 0;
  background: transparent;
  float: right;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`

export const Hamburger = styled.span`
  position: relative;
  display: block;
  width: 1.75em;
  height: 2px;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 1.75em;
    height: 2px;
    right: 0;
    background: ${({ theme }) => theme.text};
    transition: transform 0.2s ease-in-out, top 0.2s 0.2s;
  }
  &::before {
    top: -0.25em;
  }
  &::after {
    top: 0.25em;
  }

  ${({ navOpen }) =>
    navOpen &&
    css`
      &::before,
      &::after {
        top: 0em;
        transition: top 0.2s ease-in-out, transform 0.2s 0.2s;
      }
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    `}
`
