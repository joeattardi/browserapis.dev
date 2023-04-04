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

  function createDemo(demo, path) {
    createPage({
      path,
      component: `${demoTemplate}?__contentFilePath=${demo.internal.contentFilePath}`
    });

    createPage({
      path: `${path}/full`,
      component: `${fullTemplate}?__contentFilePath=${demo.internal.contentFilePath}`
    });
  }

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            alias
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
    createDemo(demo, demo.frontmatter.slug);

    if (demo.frontmatter.alias) {
      createDemo(demo, demo.frontmatter.alias);
    }
  });

  const categories = result.data.allMdx.nodes.filter(node => node.frontmatter.type === 'category');
  categories.forEach(category => {
    createPage({
      path: category.frontmatter.slug,
      component: `${categoryTemplate}?__contentFilePath=${category.internal.contentFilePath}`
    });
  });
};
