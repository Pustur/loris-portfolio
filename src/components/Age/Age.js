import React from 'react';
import PropTypes from 'prop-types';

import { calculateAge } from '../../utils/utils';

const Age = ({ date, reference }) => (
  <time
    dateTime={date.toISOString()}
    title={`Born ${date.toISOString().slice(0, 10)}`}
  >
    {calculateAge(date, reference)}
  </time>
);

Age.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  reference: PropTypes.instanceOf(Date),
};

Age.defaultProps = {
  reference: new Date(),
};

export default Age;
