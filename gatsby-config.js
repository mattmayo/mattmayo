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
    },
    `gatsby-plugin-ts-loader` // It is important to include this plugin AFTER any other plugins that modify the babel config, as this plugin will feed the compiled typescript back through babel.
    //`gatsby-transformer-sharp`,
    //`gatsby-plugin-sharp`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
