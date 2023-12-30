import React from "react";
import styled from "styled-components/macro";

import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileHeader from "../MobileHeader/MobileHeader";

const Header = () => {
  return (
    <header>
      <StyledSuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>

      <StyledMobileHeader />
    </header>
  );
};

const StyledSuperHeader = styled(SuperHeader)`
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}rem) {
    display: none;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}rem) {
    display: none;
  }
`;

const StyledMobileHeader = styled(MobileHeader)`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}rem) {
    display: none;
  }

  border-top: 4px solid var(--color-gray-900);
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(2rem, 1.8vw + 1rem, 5rem);
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
