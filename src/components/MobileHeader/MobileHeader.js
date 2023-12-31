import React from "react";
import styled from "styled-components/macro";

import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const MobileHeader = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Logo />
      <RightSide>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={2} size={24} />
          <VisuallyHidden>Shopping Cart</VisuallyHidden>
        </UnstyledButton>
        <UnstyledButton>
          <Icon id="search" strokeWidth={2} size={24} />
          <VisuallyHidden>Search</VisuallyHidden>
        </UnstyledButton>
        <MobileMenu />
      </RightSide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  height: 72px;

  @media (max-width: ${(props) => props.theme.breakpoints.phone}rem) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const RightSide = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.phone}rem) {
    gap: 16px;
  }
`;

export default MobileHeader;
