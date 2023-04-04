const path = require('path');

const demoTemplate = path.resolve('./src/templates/demo.tsx');

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {},
        {
          resourceQuery: /raw/,
          type: 'asset/source',
        },
      ],
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
            type
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  const demos = result.data.allMdx.nodes.filter(node => node.frontmatter.type === 'demo');

  demos.forEach(demo => {
    console.log('creating');
    createPage({
      path: demo.frontmatter.slug,
      component: `${demoTemplate}?__contentFilePath=${demo.internal.contentFilePath}`
    });
  })
};
