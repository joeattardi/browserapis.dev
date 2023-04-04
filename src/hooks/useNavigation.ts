import { useStaticQuery, graphql } from 'gatsby';

export default function useNavigation(group: string) {
  const data = useStaticQuery<Queries.NavItemsQuery>(graphql`
    query NavItems {
      allMdx {
        nodes {
          frontmatter {
            title
            type
            slug
            nav {
              key
              group
              order
              parent
            }
          }
        }
      }
    }
  `);

  // console.log(data);
  // Flat list of items
  const groupItems = data.allMdx.nodes
    .filter(
      node =>
        node.frontmatter?.nav?.group === group
    )
    .map(
      node => ({
        ...node.frontmatter.nav,
        title: node.frontmatter.title,
        path: node.frontmatter.slug
      })
    );

    // console.log(groupItems);

  // Start with top level items
  const navItems = groupItems.filter(
    (item) => item.parent == null
  );

  navItems.forEach((item) => {
    item.children = groupItems.filter((child) => child.parent === item.key);
  });
  
  const result =  navItems.sort((a, b) => a.order - b.order);
  console.log(result);
  return result;
}
