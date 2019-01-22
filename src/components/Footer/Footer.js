import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { colors } from '../../utils/variables';

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
`;

const ContentfulLogo = styled.img`
  max-width: 100px;
  width: 100%;
`;

const Footer = () => (
  <StaticQuery
    query={query}
    render={({ contentfulFooter }) => (
      <StyledFooter>
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
      </StyledFooter>
    )}
  />
);

export default Footer;
