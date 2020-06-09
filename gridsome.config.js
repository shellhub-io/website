// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ShellHub',
  titleTemplate: '%s',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './features/*.md',
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-168888230-1'
      }
    }
  ],
  templates: {
    // BlogPost: '/blog/:slug'
  },
  transformers: {
    remark: {
      // global remark options
    }
  }
}