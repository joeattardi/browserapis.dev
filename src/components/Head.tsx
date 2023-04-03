import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Head(props) {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title: siteTitle } = data.site.siteMetadata;
  const pageTitle = props.pageContext?.frontmatter?.title;
  return (
    <>
      <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>
    </>
  )
}
