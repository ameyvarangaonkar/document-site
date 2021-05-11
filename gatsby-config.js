module.exports = {
  siteMetadata: {
    title: `RudderStack`,
    name: `RudderStack`,
    siteUrl: `https://rudderstack.com/`,
    description: `Open-source Customer Data Platform`,
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
