import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { slug } from '../../utils/utils';

const query = graphql`
  {
    contentfulAboutMe {
      title
    }
    contentfulProjects {
      title
    }
    contentfulSocial {
      title
    }
    contentfulContact {
      title
    }
  }
`;

const Menu = () => (
  <StaticQuery
    query={query}
    render={data => (
      <ul>
        {[
          data.contentfulAboutMe.title,
          data.contentfulProjects.title,
          data.contentfulSocial.title,
          data.contentfulContact.title,
        ].map(item => (
          <li key={item}>
            <a href={`/#${slug(item)}`}>{item}</a>
          </li>
        ))}
      </ul>
    )}
  />
);

export default Menu;
