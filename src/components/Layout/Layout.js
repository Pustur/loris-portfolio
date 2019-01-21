import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from '../../utils/variables';

import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

const GlobalStyles = createGlobalStyle`
  body {
    color: ${colors.foreground};
    background-color: ${colors.background};
    font-family: ${fonts.base};
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3 {
    color: ${colors.foregroundLight};
    font-family: ${fonts.headings};
  }

  a {
    color: ${colors.accent};
    text-decoration: none;
  }

  b,
  strong {
    color: ${colors.foregroundLight};
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <header>
      <nav>
        <Menu />
      </nav>
    </header>
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
