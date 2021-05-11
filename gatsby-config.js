module.exports = {
  siteMetadata: {
    title: `Document by Code Bushi`,
    name: `Code Bushi`,
    siteUrl: `https://gatsby-theme-document.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/rudderlabs/rudder-server`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/rudderstack`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock", "/sources", "/destinations"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
