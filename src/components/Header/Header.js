import React from 'react';
import styled from 'styled-components';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import { colors, zIndex, mediaQueries } from '../../utils/variables';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    ${colors.background},
    ${colors.backgroundTransparent}
  );
  z-index: ${zIndex.header};
  padding-top: 10px;
  padding-bottom: 10px;

  @media (${mediaQueries.mdMin}) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => (
  <StyledHeader>
    <StyledContainer>
      <a href="/">
        <Logo />
        <span className="sr-only">Home</span>
      </a>
      <nav>
        <Menu />
      </nav>
    </StyledContainer>
  </StyledHeader>
);

export default Header;
