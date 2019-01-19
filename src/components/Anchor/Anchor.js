import React from 'react';
import PropTypes from 'prop-types';

const Anchor = ({ children, href, external, target, rel, ...otherProps }) => (
  <a
    {...otherProps}
    href={href}
    target={external ? '_blank' : target}
    rel={external ? `noopener${rel ? ` ${rel}` : ''}` : rel}
  >
    {children}
  </a>
);

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
  target: PropTypes.string,
  rel: PropTypes.string,
};

Anchor.defaultProps = {
  external: false,
  target: null,
  rel: null,
};

export default Anchor;
