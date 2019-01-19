import React from 'react';
import marked from 'marked';
import { StaticQuery, graphql } from 'gatsby';
import { slug } from '../../utils/utils';

const query = graphql`
  {
    contentfulSocial {
      title
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

const Social = () => (
  <StaticQuery
    query={query}
    render={({ contentfulSocial }) => (
      <section id={slug(contentfulSocial.title)}>
        <h2>{contentfulSocial.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(contentfulSocial.body.body),
          }}
        />
        <ul>
          {contentfulSocial.links.map(link => (
            <li key={link.id}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </section>
    )}
  />
);

export default Social;
