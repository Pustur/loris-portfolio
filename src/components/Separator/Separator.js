import React from 'react';
import styled, { css } from 'styled-components';

import { InView } from 'react-intersection-observer';

import { colors } from '../../utils/variables';

const StyledSeparator = styled.div`
  height: 6px;
  margin: 0 auto 2.5rem;
  position: relative;
  width: 96px;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 64px;
    height: 1px;
    position: absolute;
    background-color: ${colors.accent};
    opacity: 0;
    transition: opacity 0.3s ease 0.3s,
      transform 0.5s cubic-bezier(0.1, 1, 0.7, 1.1) 0.3s;
  }

  &::before {
    right: 0;
    top: 0;
    transform: translateX(-100px);
  }

  &::after {
    bottom: 0;
    left: 0;
    transform: translateX(100px);
  }

  ${props =>
    props.isVisible &&
    css`
      &::before,
      &::after {
        opacity: 1;
        transform: translateX(0);
      }
    `}
`;

const Separator = () => (
  <InView rootMargin="-100px 0%" triggerOnce>
    {({ inView, ref }) => <StyledSeparator ref={ref} isVisible={inView} />}
  </InView>
);

export default Separator;
