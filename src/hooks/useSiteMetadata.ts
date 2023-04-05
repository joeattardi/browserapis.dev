import { useStaticQuery, graphql } from 'gatsby';

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
}