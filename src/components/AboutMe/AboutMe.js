import React from 'react';
import marked from 'marked';
import { StaticQuery, graphql } from 'gatsby';
import { slug } from '../../utils/utils';

const query = graphql`
  {
    contentfulAboutMe {
      title
      body {
        body
      }
    }
  }
`;

const AboutMe = () => (
  <StaticQuery
    query={query}
    render={({ contentfulAboutMe }) => (
      <section id={slug(contentfulAboutMe.title)}>
        <h2>{contentfulAboutMe.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(contentfulAboutMe.body.body),
          }}
        />
      </section>
    )}
  />
);

export default AboutMe;
