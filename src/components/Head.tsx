import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function Head(props) {
  const { title: siteTitle } = useSiteMetadata();
  const pageTitle = props.pageContext?.frontmatter?.title;
  return (
    <>
      <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>
    </>
  )
}
