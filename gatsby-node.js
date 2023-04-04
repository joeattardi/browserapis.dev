const path = require('path');

const demoTemplate = path.resolve('./src/templates/demo.tsx');
const categoryTemplate = path.resolve('./src/templates/category.tsx');
const fullTemplate = path.resolve('./src/templates/fullScreenDemo.tsx');

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
    createPage({
      path: demo.frontmatter.slug,
      component: `${demoTemplate}?__contentFilePath=${demo.internal.contentFilePath}`
    });

    createPage({
      path: `${demo.frontmatter.slug}/full`,
      component: `${fullTemplate}?__contentFilePath=${demo.internal.contentFilePath}`
    })
  });

  const categories = result.data.allMdx.nodes.filter(node => node.frontmatter.type === 'category');
  categories.forEach(category => {
    createPage({
      path: category.frontmatter.slug,
      component: `${categoryTemplate}?__contentFilePath=${category.internal.contentFilePath}`
    });
  });
};
