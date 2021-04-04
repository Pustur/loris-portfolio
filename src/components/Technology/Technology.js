import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TechnologyIcon from '../TechnologyIcon/TechnologyIcon';

import { colors, sizes, mediaQueries } from '../../utils/variables';

const arrowSize = 8;

const Label = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  padding: 0.25rem 0.5rem calc(0.25rem + ${arrowSize * 0.25}px);
  line-height: 1;
  transform: translate3d(-50%, -100%, 0);
  border-radius: 4px;
  color: ${colors.foregroundLight};
  background-color: ${colors.accent};
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: all 0.3s ease;

  &::after {
    content: '';
    display: block;
    width: ${arrowSize}px;
    height: ${arrowSize}px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate3d(-50%, 50%, 0) rotate(45deg);
    background-color: ${colors.accent};
  }

  @media (${mediaQueries.smMax}) {
    transform: translate3d(-${sizes.technologyIcon / 2}px, -100%, 0);

    &::after {
      left: ${sizes.technologyIcon / 2}px;
    }
  }
`;

const Container = styled.div`
  position: relative;

  &:hover ${Label} {
    opacity: 1;
    transform: translate3d(-50%, calc(-100% - ${arrowSize * 1.5}px), 0);
  }

  @media (${mediaQueries.smMax}) {
    &:hover ${Label} {
      transform: translate3d(
        -${sizes.technologyIcon / 2}px,
        calc(-100% - ${arrowSize * 1.5}px),
        0
      );
    }
  }
`;

const Technology = ({ technology }) => (
  <Container>
    <Label>{technology}</Label>
    <TechnologyIcon icon={technology.toLowerCase()} aria-hidden />
  </Container>
);

Technology.propTypes = {
  technology: PropTypes.string.isRequired,
};

export default Technology;
