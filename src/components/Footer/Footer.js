import React from 'react';
import marked from 'marked';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    contentfulFooter {
      body {
        body
      }
    }
  }
`;

const Footer = () => (
  <StaticQuery
    query={query}
    render={({ contentfulFooter }) => (
      <footer
        dangerouslySetInnerHTML={{
          __html: marked(contentfulFooter.body.body),
        }}
      />
    )}
  />
);

export default Footer;
