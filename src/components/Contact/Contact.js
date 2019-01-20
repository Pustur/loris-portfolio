import React from 'react';
import marked from 'marked';
import { StaticQuery, graphql } from 'gatsby';
import { slug } from '../../utils/utils';

const query = graphql`
  {
    contentfulContact {
      title
      body {
        body
      }
    }
  }
`;

const Contact = () => (
  <StaticQuery
    query={query}
    render={({ contentfulContact }) => (
      <section id={slug(contentfulContact.title)}>
        <h2>{contentfulContact.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(contentfulContact.body.body),
          }}
        />
      </section>
    )}
  />
);

export default Contact;
