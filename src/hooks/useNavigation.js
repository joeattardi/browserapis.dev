import { useStaticQuery, graphql } from 'gatsby';

export default function useNavigation(group) {
  const data = useStaticQuery(graphql`
    query NavItems {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            title
            type
            slug
            nav {
              key
              summary
              group
              order
              parent
            }
          }
        }
      }

      allJavascriptFrontmatter {
        nodes{
          frontmatter {
            title
            slug
            nav{
              key
              group
              order
            }
          }
        }
      }
    }
  `);

  // Flat list of items
  const groupItems = [...data.allMdx.nodes, ...data.allJavascriptFrontmatter.nodes]
    .filter(node => node.frontmatter?.nav?.group === group)
    .map(
      node => {
        if (node?.frontmatter) {
          return {
            ...node.frontmatter.nav,
            excerpt: node.excerpt,
            title: node.frontmatter.title,
            path: node.frontmatter.slug
          }
        }
      });

  // Start with top level items
  const navItems = groupItems.filter(
    (item) => item.parent == null
  );

  navItems.forEach((item) => {
    item.children = groupItems
      .filter((child) => child.parent === item.key)
      .sort((a, b) => a.order - b.order);
  });
  
  return navItems.sort((a, b) => a.order - b.order);
}
