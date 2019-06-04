import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Scrollchor from 'react-scrollchor';

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
          data.contentfulAboutMe.title,
          data.contentfulProjects.title,
          data.contentfulContact.title,
          data.contentfulSocial.title,
        ].map(item => {
          const targetId = `#${slug(item)}`;

          return (
            <Item key={item}>
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
                {item}
              </Link>
            </Item>
          );
        })}
      </List>
    )}
  />
);

export default Menu;
