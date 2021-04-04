require('dotenv').config();

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Loris Bettazza Portfolio',
        short_name: 'Loris Bettazza',
        start_url: '/',
        background_color: '#1c1c2e',
        theme_color: '#1c1c2e',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
        icon_options: {
          purpose: 'maskable',
        },
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `{
          contentfulMetadata {
            siteUrl
          }

          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: data => data.contentfulMetadata.siteUrl,
      },
    },
    'gatsby-plugin-offline',
  ],
};
