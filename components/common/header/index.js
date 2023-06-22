import { useState } from "react";
import * as S from "./header.styled";
import Link from "next/link";
import Logo from "../logo";
import OutlinedText from "../outlinedText";

const navItems = ["home", "about", "projects", "contact"];

const container = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const navItemAni = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <S.Header>
      <Logo />

      <S.NavToggle
        aria-label="Navigation Button"
        onClick={() => setNavOpen(!navOpen)}
      >
        <S.Hamburger navOpen={navOpen} />
      </S.NavToggle>

      <S.Nav navOpen={navOpen}>
        <S.NavList
          variants={container}
          animate={navOpen ? "animate" : "initial"}
          initial="initial"
        >
          {navItems.map((item) => (
            <S.NavItem
              key={item}
              onClick={() => setNavOpen(false)}
              variants={navItemAni}
            >
              <Link
                href={item === "home" ? "/" : "#" + item}
                passHref
                legacyBehavior
              >
                <S.NavLink>
                  <OutlinedText fontSize={5}>{item + "."}</OutlinedText>
                </S.NavLink>
              </Link>
            </S.NavItem>
          ))}
        </S.NavList>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
