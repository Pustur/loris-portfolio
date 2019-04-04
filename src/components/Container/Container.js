import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaQueries } from '../../utils/variables';

const StyledContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media (${mediaQueries.mdMin}) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (${mediaQueries.lgMin}) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
  }
`;

const Container = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};

export default Container;
