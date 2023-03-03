import React from 'react';
import { marked } from 'marked';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Container from '../Container/Container';
import Separator from '../Separator/Separator';

import { colors, mediaQueries } from '../../utils/variables';

const query = graphql`
  {
    contentfulSocial {
      title
      slug
      body {
        body
      }
      links {
        id
        text
        href
      }
    }
  }
`;

const SocialSection = styled.section`
  text-align: center;
`;

const SocialList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SocialItem = styled.li`
  display: inline-block;
  border-left: 1px solid ${colors.accent};

  &:last-child {
    border-right: 1px solid ${colors.accent};
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  padding: 0.4rem 1rem;
  position: relative;
  overflow: hidden;
  vertical-align: bottom;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 1px;
    background-color: ${colors.accent};
    position: absolute;
    left: 0;
    right: 0;
    transition: transform 0.5s ease;
  }

  &::before {
    top: 0;
    transform: translate3d(-101%, 0, 0);
  }

  &::after {
    bottom: 0;
    transform: translate3d(101%, 0, 0);
  }

  &:hover,
  &:focus {
    &::before,
    &::after {
      transform: translate3d(0, 0, 0);
    }
  }

  @media (${mediaQueries.mdMin}) {
    padding: 0.6rem 2rem;
  }
`;

const Social = () => (
  <StaticQuery
    query={query}
    render={({ contentfulSocial }) => (
      <SocialSection id={contentfulSocial.slug}>
        <Container>
          <h2>{contentfulSocial.title}</h2>
          <Separator />
          <div
            dangerouslySetInnerHTML={{
              __html: marked(contentfulSocial.body.body),
            }}
          />
          <SocialList>
            {contentfulSocial.links.map(link => (
              <SocialItem key={link.id}>
                <SocialLink href={link.href}>{link.text}</SocialLink>
              </SocialItem>
            ))}
          </SocialList>
        </Container>
      </SocialSection>
    )}
  />
);

export default Social;
