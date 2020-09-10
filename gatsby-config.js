module.exports = {
  siteMetadata: {
    title: `Personal Blog`,
    author: `Maria Pereyra`,
    about: `Breakfast procuring no end happiness allowance assurance frank. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me
    astonished estimating cultivated.`,
    description: `A Gatsby Blog`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: ["src/css/index.css"],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-lodash`,
    },
  ],
}
