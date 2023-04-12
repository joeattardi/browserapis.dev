import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Web Browser API Cookbook',
    subtitle: 'Level Up Your JavaScript Applications',
    siteUrl: 'https://browserapis.dev',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          "G-Z5LMK9PJKM"
        ],
        pluginConfig: {
          head: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png'
      }
    },
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
        name: 'demos',
        path: './src/demos'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'demos',
        engine: 'flexsearch',
        query: `
          {
            allMdx {
              nodes {
                id
                excerpt
                frontmatter {
                  slug
                  title
                }
              }
            }
          }
        `,
        ref: 'id',
        index: ['title', 'slug'],
        store: ['id', 'title', 'slug', 'excerpt'],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => ({
            id: node.id,
            slug: node.frontmatter.slug,
            title: node.frontmatter.title,
            excerpt: node.excerpt
        }))
      }
    }
  ],
};

export default config;
