import { useStaticQuery, graphql } from 'gatsby';

export default function useCategories() {
  const data = useStaticQuery<Queries.CategoriesQuery>(graphql`
    query Categories {
      allMdx(
        filter: { frontmatter: { type: { eq: "category" } } }
        sort: { frontmatter: { order: ASC } }
      ) {
        nodes {
          excerpt
          frontmatter {
            order
            slug
            title
            key
          }
        }
      }
    }
  `);

  return data.allMdx.nodes;
}
