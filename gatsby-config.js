// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: `mattmayo`,
    description: `Personal website`,
    author: `@mattmayo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // eslint-disable-next-line no-undef
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
