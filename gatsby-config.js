module.exports = {
  siteMetadata: {
    title: `ShellHub`,
    description: `ShellHub is a modern SSH server for remotely accessing Linux devices via command line (using any SSH client) or web-based user interface.`,
    author: `Will Moreira`,
    siteUrl: `https://www.shellhub.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options : {
        displayName : process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#667ACC`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_ID,
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: true,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/.*\.svg/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `prompt\:300,400,500,600,700,800,900`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.shellhub.io`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ShellHub`,
        short_name: `ShellHub`,
        start_url: `/`,
        background_color: `#272B33`,
        theme_color: `#667ACC`,
        display: `standalone`,
        icon: `src/assets/icon.png`
      },
    },
    `gatsby-plugin-offline`
  ],
}
