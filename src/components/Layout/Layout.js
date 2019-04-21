import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { colors, fonts, sizes, mediaQueries } from '../../utils/variables';
import { streamsterWoff, streamsterWoff2 } from '../../utils/fonts';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Streamster';
    src: local('Streamster'),
      url(${streamsterWoff2}) format('woff2'),
      url(${streamsterWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  ::selection {
    background-color: ${colors.accent};
    color: ${colors.foregroundLight};
  }

  ::-moz-selection {
    background-color: ${colors.accent};
    color: ${colors.foregroundLight};
  }

  body {
    color: ${colors.foreground};
    background-color: ${colors.background};
    font-family: ${fonts.base};
    line-height: 1.4;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3 {
    color: ${colors.foregroundLight};
    font-family: ${fonts.headings};
    font-weight: 400;
  }

  h1 {
    font-size: 3.125rem;
  }

  h2 {
    font-size: 2.25rem;
  }

  h3 {
    font-size: 2rem;
  }

  a {
    color: ${colors.accent};
    text-decoration: none;
  }

  b,
  strong {
    color: ${colors.foregroundLight};
  }

  small {
    font-size: inherit;
  }

  main {
    display: block;
    padding-top: ${sizes.header.height.smMin};

    > * {
      margin-top: ${sizes.section};
      margin-bottom: ${sizes.section};
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  @media(${mediaQueries.mdMin}){
    html {
      font-size: 18px;
    }

    h1 {
      font-size: 4.4rem;
    }

    h2 {
      font-size: 2.2rem;
    }

    h3 {
      font-size: 2.7rem;
    }

    main {
      padding-top: ${sizes.header.height.mdMin};
    }
  }

  @media(${mediaQueries.lgMin}){
    html {
      font-size: 20px;
    }

    h1 {
      font-size: 5.5rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 3rem;
    }
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
