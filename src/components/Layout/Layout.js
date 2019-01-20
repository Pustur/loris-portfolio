import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div>
    <header>
      <nav>
        <Menu />
      </nav>
    </header>
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
