import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    contentfulMetadata {
      title
      description
    }
  }
`;

const Seo = ({ description, lang, meta, title }) => (
  <StaticQuery
    query={query}
    render={({ contentfulMetadata }) => {
      const page = title ? `${title} | ` : '';
      const metaTitle = `${page}${contentfulMetadata.title}`;
      const metaDescription = description || contentfulMetadata.description;

      return (
        <Helmet
          htmlAttributes={{ lang }}
          title={metaTitle}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              property: 'og:title',
              content: metaTitle,
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
              name: 'twitter:title',
              content: metaTitle,
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
