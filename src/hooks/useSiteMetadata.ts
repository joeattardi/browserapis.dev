import { useStaticQuery, graphql } from 'gatsby';

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          title
          subtitle
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
}