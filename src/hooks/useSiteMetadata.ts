import { useStaticQuery, graphql } from 'gatsby';

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          title
          subtitle
          siteUrl
          description
          image
          twitterUsername
        }
      }
    }
  `);

  return data.site.siteMetadata;
}