const path = require('path');
const fs = require('fs/promises');

const demoTemplate = path.resolve('./src/templates/demo.jsx');
const categoryTemplate = path.resolve('./src/templates/category.jsx');

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

function defaultCode() {
  return [
    {
      name: 'index.js',
      language: 'javascript',
    },
    {
      name: 'index.html',
      language: 'html'
    }
  ];
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          excerpt
          body
          frontmatter {
            key
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

  async function loadSourceFiles(demo) {
    const codeFiles = demo.frontmatter.code || defaultCode();
  
    const promises = [];
    codeFiles.forEach(codeFile => {
      const filePath = path.resolve('static/code', demo.frontmatter.slug.slice(1), codeFile.name);
      promises.push(fs.readFile(filePath, 'utf-8').then(content => codeFile.code = content));
    });
  
    await Promise.all(promises);
    return codeFiles;
  }

  async function createDemo(demo, path) {
    const codeFiles = await loadSourceFiles(demo);
    createPage({
      path,
      context: {
        excerpt: demo.excerpt,
        codeFiles
      },
      component: `${demoTemplate}?__contentFilePath=${demo.internal.contentFilePath}`
    });
  }

  const demos = result.data.allMdx.nodes.filter(node => node.frontmatter.type === 'demo');

  const promises = [];
  demos.forEach(demo => {
    promises.push(createDemo(demo, demo.frontmatter.slug));

    if (demo.frontmatter.alias) {
      promises.push(createDemo(demo, demo.frontmatter.alias));
    }
  });

  await Promise.all(promises);

  const categories = result.data.allMdx.nodes.filter(node => node.frontmatter.type === 'category');

  categories.forEach(category => {
    createPage({
      context: {
        excerpt: category.excerpt,
        body: category.body,
        key: category.frontmatter.key
      },
      path: category.frontmatter.slug,
      component: `${categoryTemplate}?__contentFilePath=${category.internal.contentFilePath}`
    });
  });
};
