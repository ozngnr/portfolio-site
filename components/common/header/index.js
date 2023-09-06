import { useState } from "react";
import * as S from "./header.styled";
import Link from "next/link";
import Logo from "../logo";
import OutlinedText from "../outlinedText";
import Socials from "../socials";

const navItems = ["home", "about", "projects", "contact"];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <S.Header>
      {/* social links */}
      <Socials />

      <Logo />

      <S.NavToggle
        aria-label="Navigation Button"
        onClick={() => setNavOpen(!navOpen)}
      >
        <S.Hamburger navOpen={navOpen} />
      </S.NavToggle>

      <S.Nav navOpen={navOpen}>
        <S.NavList animate={navOpen ? "animate" : "initial"}>
          {navItems.map((item) => (
            <S.NavItem key={item} onClick={() => setNavOpen(false)}>
              <Link
                href={item === "home" ? "/" : "#" + item}
                passHref
                legacyBehavior
              >
                <S.NavLink>
                  <OutlinedText fontSize={4}>{item + "."}</OutlinedText>
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
