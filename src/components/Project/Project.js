import React from 'react';
import PropTypes from 'prop-types';

import Anchor from '../Anchor/Anchor';

const Project = ({ title, description, type, technologies, links }) => (
  <article>
    <h3>{title}</h3>
    <div>{type}</div>
    <div dangerouslySetInnerHTML={{ __html: description }} />
    <ul>
      {technologies.map(technology => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
    <ul>
      {links.map(link => (
        <li key={link.id}>
          <Anchor href={link.href}>{link.text}</Anchor>
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
