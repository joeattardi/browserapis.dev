import { useStaticQuery, graphql } from 'gatsby';

type NavItem = {
  title: string;
  type: string;
  path: string;
  key: string;
  group: string;
  order: number;
  parent?: string;
  children?: NavItem[];
}

export default function useNavigation(group: string): NavItem[] {
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

  type NavNode = {
    frontmatter: {
      title: string;
      type?: string;
      slug: string;
      nav: {
        key: string;
        group: string;
        order?: number;
        parent?: string;
      }
    }
  }

  // Flat list of items
  const groupItems = data.allMdx.nodes
    .filter(node => node.frontmatter?.nav?.group === group)
    .map<NavItem>(
      node => {
        if (node?.frontmatter) {
          return {
            ...node.frontmatter.nav,
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
