import React from 'react';
import styled from 'styled-components';

import Container from '../Container/Container';
import { fonts, colors, mediaQueries } from '../../utils/variables';

const StyledContainer = styled(Container)`
  text-align: center;
`;

const TitleContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 0;
  font-family: ${fonts.base};
  font-size: 1rem;
  color: ${colors.foregroundDark};

  @media (${mediaQueries.lgMin}) {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const Hero = () => (
  <StyledContainer>
    <TitleContainer>
      <Title>Loris Bettazza</Title>
      <Subtitle>Front-End Web Developer</Subtitle>
    </TitleContainer>
  </StyledContainer>
);

export default Hero;
