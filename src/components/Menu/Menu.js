import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Scrollchor from 'react-scrollchor';

import { colors, mediaQueries } from '../../utils/variables';

const query = graphql`
  {
    contentfulAboutMe {
      title
      slug
    }
    contentfulProjects {
      title
      slug
    }
    contentfulSocial {
      title
      slug
    }
    contentfulContact {
      title
      slug
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

const Link = styled(Scrollchor)`
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
          data.contentfulAboutMe,
          data.contentfulProjects,
          data.contentfulContact,
          data.contentfulSocial,
        ].map(item => {
          const targetId = `#${item.slug}`;

          return (
            <Item key={item.slug}>
              <Link
                to={targetId}
                animate={{ offset: -100, duration: 600 }}
                disableHistory
                afterAnimate={() => {
                  const target = document.querySelector(targetId);

                  if (!target) return;

                  target.focus({ preventScroll: true });

                  if (target !== document.activeElement) {
                    target.tabIndex = -1;
                    target.focus({ preventScroll: true });
                  }
                }}
              >
                {item.title}
              </Link>
            </Item>
          );
        })}
      </List>
    )}
  />
);

export default Menu;
