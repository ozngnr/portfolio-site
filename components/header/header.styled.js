import styled, { css } from 'styled-components';
import { Container as BaseContainer } from '../../styles/global';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  max-width: 1440px;
  top: 0;
  margin: 0 auto;
  padding: 1.5em 0;
  z-index: 999;
`;

export const Container = styled.div`
  ${BaseContainer};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: ${({ navOpen }) => (navOpen ? 0 : '100%')};
  background: ${({ theme }) => theme.background};
  transition: left 0.3s ease-out;
  z-index: 1000;

  @supports (backdrop-filter: blur(10px)) {
    background: ${({ theme }) => theme.bgNavigation};
    backdrop-filter: blur(10px);
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  font-size: 2rem;
  margin: 1em 0;

  @media (min-width: 900px) {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 0 1.5em;
  }
`;
export const NavLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.text};
  border: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.accent};
  }
`;

export const NavToggle = styled.button`
  position: relative;
  display: block;
  grid-column: 3 / 4;
  justify-self: end;
  padding: 2em;
  background: transparent;
  cursor: pointer;
  z-index: 10000;
`;

export const Hamburger = styled.span`
  position: relative;
  display: block;
  width: 1.75em;
  height: 2px;

  &::after,
  &::before {
    content: '';
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
`;
