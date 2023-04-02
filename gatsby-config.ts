import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Web Browser API Cookbook',
    siteUrl: 'https://browserapis.dev',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-vanilla-extract',
    'gatsby-plugin-google-gtag',
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
        web: [
          {
            file: 'https://fonts.googleapis.com/css2?family=Domine&family=Rubik:wght@400;700&family=Open+Sans:wght@400;700&display=swap',
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages',
    },
  ],
};

export default config;
