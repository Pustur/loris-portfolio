import React from 'react';
import styled from 'styled-components';

import Container from '../Container/Container';

const StyledContainer = styled(Container)`
  text-align: center;
`;

const TitleContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1;
`;

const Hero = () => (
  <StyledContainer>
    <TitleContainer>
      <Title>Loris Bettazza</Title>
    </TitleContainer>
  </StyledContainer>
);

export default Hero;
