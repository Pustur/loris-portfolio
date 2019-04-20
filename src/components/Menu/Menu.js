import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { slug } from '../../utils/utils';
import { colors, mediaQueries } from '../../utils/variables';

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

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;

  @media (${mediaQueries.mdMin}) {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 14px;
  }
`;

const Item = styled.li`
  display: inline-block;

  & + & {
    margin-left: 0.5rem;
  }

  @media (${mediaQueries.mdMin}) {
    & + & {
      margin-left: 1rem;
    }
  }
`;

const Link = styled.a`
  color: ${colors.foreground};
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: ${colors.foregroundLight};
  }
`;

const Menu = () => (
  <StaticQuery
    query={query}
    render={data => (
      <List>
        {[
          data.contentfulAboutMe.title,
          data.contentfulProjects.title,
          data.contentfulSocial.title,
          data.contentfulContact.title,
        ].map(item => (
          <Item key={item}>
            <Link href={`/#${slug(item)}`}>{item}</Link>
          </Item>
        ))}
      </List>
    )}
  />
);

export default Menu;
