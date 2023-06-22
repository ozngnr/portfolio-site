import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../../styles/breakpoints";

export const Header = styled(motion.header)`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0.5em 1em;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    background-image: radial-gradient(
      rgba(0, 0, 0, 0) 2px,
      ${({ theme }) => theme.background} 4px
    );
    background-size: 5px 5px;

    @supports (backdrop-filter: blur(5px)) {
      backdrop-filter: blur(5px);
    }
  }
`;

export const Container = styled.div``;

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform: translateX(${({ navOpen }) => (navOpen ? 0 : "100%")});
  background: ${({ theme }) => theme.background};
  transition: transform 0.3s ease-in-out;
  font-family: var(--title-font);
  z-index: 1000;

  @supports (backdrop-filter: blur(10px)) {
    background: ${({ theme }) => theme.bgNavigation};
    backdrop-filter: blur(10px);
  }
`;

export const NavList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media ${device.laptop} {
    align-items: flex-start;
    padding-left: 5em;
  }
`;

export const NavItem = styled(motion.li)`
  font-size: 2rem;
  margin: 1em 0;

  @media ${device.laptop} {
    font-weight: 600;
    font-size: 3rem;
  }
`;

export const NavLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.text};
  border: 1px solid transparent;
`;

export const NavToggle = styled.button`
  grid-column: 3 / 4;
  justify-self: end;
  padding: 1em;
  background: transparent;
  cursor: pointer;
  z-index: 10000;
`;

export const Hamburger = styled.span`
  position: relative;
  display: block;
  width: 2.5em;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
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
