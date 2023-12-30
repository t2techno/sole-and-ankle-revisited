import React from "react";
import styled from "styled-components/macro";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <DisappearingSelect
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </DisappearingSelect>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <DisappearingSpacer size={42} />
        <StyledSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const DisappearingSelect = styled(Select)`
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}rem) {
    display: none;
  }
`;

const DisappearingSpacer = styled(Spacer)`
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}rem) {
    display: none;
  }
`;

const StyledSidebar = styled(ShoeSidebar)`
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}rem) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}rem) {
    flex-direction: column-reverse;
    gap: 0;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}rem) {
    max-height: ${24 / 16}rem;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
`;

export default ShoeIndex;
