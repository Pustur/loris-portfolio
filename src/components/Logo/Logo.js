import React from 'react';

import { colors } from '../../utils/variables';

const size = 24;

const Logo = () => (
  <svg width={size} height={size} viewBox="-1 0 14 12">
    <polyline
      fill="none"
      stroke={colors.foregroundLight}
      strokeWidth="1"
      points="6,0 0,6 12,6 9,3 0,12 12,12 6,6"
    />
  </svg>
);

export default Logo;
