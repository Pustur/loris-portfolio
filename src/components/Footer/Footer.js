import React from 'react';
import { marked } from 'marked';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Container from '../Container/Container';

import { colors, mediaQueries } from '../../utils/variables';

const query = graphql`
  {
    contentfulFooter {
      body {
        body
      }
    }
  }
`;

const StyledFooter = styled.footer`
  color: ${colors.foregroundDark};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 2rem 0;
  text-align: center;
`;

const StyledContainer = styled(Container)`
  @media (${mediaQueries.mdMin}) {
    display: inline-flex;
    align-items: center;
    text-align: left;

    > * + * {
      margin-left: 2rem;
    }
  }
`;

const ContentfulLogo = styled.img`
  width: 100px;
`;

const Footer = () => (
  <StaticQuery
    query={query}
    render={({ contentfulFooter }) => (
      <StyledFooter>
        <StyledContainer>
          <div
            dangerouslySetInnerHTML={{
              __html: marked(contentfulFooter.body.body),
            }}
          />
          <a href="https://www.contentful.com/" rel="nofollow">
            <ContentfulLogo
              src="https://images.ctfassets.net/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg"
              alt="Powered by Contentful"
            />
          </a>
        </StyledContainer>
      </StyledFooter>
    )}
  />
);

export default Footer;
