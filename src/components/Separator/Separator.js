import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/variables';

const StyledSeparator = styled.hr`
  height: 6px;
  margin: 0 auto 2.5rem;
  position: relative;
  width: 96px;
  border: 0;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 64px;
    height: 1px;
    position: absolute;
    background-color: ${colors.accent};
  }

  &::before {
    right: 0;
    top: 0;
  }

  &::after {
    bottom: 0;
    left: 0;
  }
`;

const Separator = () => <StyledSeparator />;

export default Separator;
