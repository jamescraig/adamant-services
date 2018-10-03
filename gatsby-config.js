module.exports = {
  siteMetadata: {
    title: 'Adamant Labs Services',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
  ],
}
