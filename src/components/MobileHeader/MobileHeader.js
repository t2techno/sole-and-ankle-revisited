import React from "react";
import styled from "styled-components/macro";

import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const MobileHeader = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Logo />

      <RightSide>
        <Icon id="shopping-bag" strokeWidth={2} size={24} />
        <Icon id="search" strokeWidth={2} size={24} />
        <MobileMenu />
      </RightSide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  height: 72px;
`;

const RightSide = styled.div`
  display: flex;
  gap: 32px;
  align-items: baseline;
`;

export default MobileHeader;
