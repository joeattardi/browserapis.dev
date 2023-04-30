const path = require('path');
const fs = require('fs/promises');

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

const defaultCode = [
  {
    name: 'index.js',
    type: 'javascript',
  },
  {
    name: 'index.html',
    type: 'html'
  }
];



exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const markdownContent = await graphql(`
  {
    allMarkdownRemark {
      nodes {
        html
        fileAbsolutePath
      }
    }
  }
`);

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            key
            alias
            slug
            title
            type
            code {
              name
              language
              title
              description
            }
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  async function loadSourceFiles(demo) {
    const codeFiles = demo.frontmatter.code || defaultCode;
  
    const promises = [];
    codeFiles.forEach(codeFile => {
      const filePath = path.resolve('static/code', demo.frontmatter.slug.slice(1), codeFile.name);
      promises.push(fs.readFile(filePath, 'utf-8').then(content => codeFile.code = content));
  
      if (codeFile.description) {
        codeFile.description = loadDescription(demo, codeFile);
      }
    });
  
    await Promise.all(promises);
    return codeFiles;
  }
  
  function loadDescription(demo, codeFile) {
    const content = 
      markdownContent.data.allMarkdownRemark.nodes
        .find(node => node.fileAbsolutePath.endsWith(`${demo.frontmatter.slug}/${codeFile.description}`))
        .html;
    return content;
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

    createPage({
      path: `${path}/full`,
      context: {
        excerpt: demo.excerpt,
      },
      component: `${fullTemplate}?__contentFilePath=${demo.internal.contentFilePath}`
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
        key: category.frontmatter.key
      },
      path: category.frontmatter.slug,
      component: `${categoryTemplate}?__contentFilePath=${category.internal.contentFilePath}`
    });
  });
};
