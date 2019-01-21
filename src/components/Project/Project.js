import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Technology from '../Technology/Technology';

const ListItem = styled.li`
  display: inline-block;

  & + & {
    margin-left: 1rem;
  }
`;

const Project = ({ title, description, type, technologies, links, fluid }) => (
  <article>
    <h3>{title}</h3>
    <div>{type}</div>
    <div dangerouslySetInnerHTML={{ __html: description }} />
    <ul>
      {technologies.map(technology => (
        <ListItem key={technology}>
          <Technology technology={technology} />
        </ListItem>
      ))}
    </ul>
    <ul>
      {links.map(link => (
        <li key={link.id}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
    <Img fluid={fluid} />
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
  fluid: PropTypes.shape({
    base64: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
