import * as S from './header.styled';
import Link from 'next/link';
import Logo from '../logo';
import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../context/context';
import localFont from 'next/font/local';

const Header = () => {
  const { navOpen, setNavOpen, isLoading } = useContext(Context);

  return (
    <S.Header>
      <S.Container>
        <Logo />

        <S.NavToggle
          aria-label="Navigation Button"
          onClick={() => setNavOpen(!navOpen)}
        >
          <S.Hamburger navOpen={navOpen} />
        </S.NavToggle>

        <S.Nav navOpen={navOpen}>
          <S.NavList>
            <S.NavItem onClick={() => setNavOpen(false)}>
              <Link href="/" passHref legacyBehavior>
                <S.NavLink>home.</S.NavLink>
              </Link>
            </S.NavItem>
            <S.NavItem onClick={() => setNavOpen(false)}>
              <Link href="#about" passHref legacyBehavior>
                <S.NavLink>about.</S.NavLink>
              </Link>
            </S.NavItem>
            <S.NavItem onClick={() => setNavOpen(false)}>
              <Link href="#projects" passHref legacyBehavior>
                <S.NavLink>projects.</S.NavLink>
              </Link>
            </S.NavItem>
            <S.NavItem onClick={() => setNavOpen(false)}>
              <Link href="#contact" passHref legacyBehavior>
                <S.NavLink>contact.</S.NavLink>
              </Link>
            </S.NavItem>
          </S.NavList>
        </S.Nav>
      </S.Container>
    </S.Header>
  );
};

export default Header;
