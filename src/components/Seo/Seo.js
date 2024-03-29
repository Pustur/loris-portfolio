import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Helmet from 'react-helmet';

import shareImage from '../../images/share-image.jpg';

const query = graphql`
  {
    contentfulMetadata {
      title
      description
      siteUrl
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
              property: 'og:url',
              content: contentfulMetadata.siteUrl,
            },
            {
              property: 'og:image',
              content: `${contentfulMetadata.siteUrl}${shareImage}`,
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
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
  title: '',
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string,
};

export default Seo;
