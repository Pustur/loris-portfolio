import React from 'react';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

const Header = () => (
  <header>
    <a href="/">
      <Logo />
    </a>
    <nav>
      <Menu />
    </nav>
  </header>
);

export default Header;
