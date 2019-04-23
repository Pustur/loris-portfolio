import React from 'react';
import styled from 'styled-components';

import Container from '../Container/Container';

import sun from '../../images/sun.svg';

const StyledContainer = styled(Container)`
  text-align: center;
  padding-top: 2.8rem;
  padding-bottom: 2.8rem;
  background-image: url(${sun});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
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
