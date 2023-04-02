import { useStaticQuery, graphql } from 'gatsby';

export default function useNavigation(group: string) {
  const data = useStaticQuery<Queries.NavItemsQuery>(graphql`
    query NavItems {
      allSitePage {
        edges {
          node {
            path
            pageContext
          }
        }
      }
    }
  `);

  // Flat list of items
  const groupItems = data.allSitePage.edges
    .filter(
      ({ node }: { node }) =>
        node.pageContext?.frontmatter?.nav?.group === group
    )
    .map(
      ({ node }: { node }) => ({
        ...node.pageContext.frontmatter.nav,
        path: node.path
      })
    );

  // Start with top level items
  const navItems = groupItems.filter(
    (item) => typeof item.parent === 'undefined'
  );

  navItems.forEach((item) => {
    item.children = groupItems.filter((child) => child.parent === item.key);
  });
  
  return navItems;
}
