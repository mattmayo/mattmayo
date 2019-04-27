module.exports = {
  siteMetadata: {
    title: `mattmayo`,
    description: `Personal website`,
    author: `@mattmayo`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`
      }
    }
  ]
};
