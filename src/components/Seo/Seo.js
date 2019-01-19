import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const Seo = ({ description, lang, meta, title }) => (
  <StaticQuery
    query={query}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description;

      return (
        <Helmet
          htmlAttributes={{ lang }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              property: 'og:title',
              content: title,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:creator',
              content: data.site.siteMetadata.author,
            },
            {
              name: 'twitter:title',
              content: title,
            },
            {
              name: 'twitter:description',
              content: metaDescription,
            },
          ].concat(meta)}
        />
      );
    }}
  />
);

Seo.defaultProps = {
  description: '',
  lang: 'en',
  meta: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default Seo;
