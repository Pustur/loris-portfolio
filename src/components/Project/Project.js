import React from 'react';
import PropTypes from 'prop-types';

import { slug } from '../../utils/utils';
import TechnologyIcon from '../TechnologyIcon/TechnologyIcon';

const Project = ({ title, description, type, technologies, links }) => (
  <article>
    <h3>{title}</h3>
    <div>{type}</div>
    <div dangerouslySetInnerHTML={{ __html: description }} />
    <ul>
      {technologies.map(technology => (
        <li key={technology}>
          {technology}
          <TechnologyIcon icon={slug(technology)} aria-hidden />
        </li>
      ))}
    </ul>
    <ul>
      {links.map(link => (
        <li key={link.id}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  </article>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Project;
