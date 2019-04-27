module.exports = {
  siteMetadata: {
    title: `mattmayo`,
    description: `Personal website`,
    author: `@mattmayo`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    }
  ]
};
