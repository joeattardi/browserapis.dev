import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function Head({ pageTitle }) {
  const { title: siteTitle } = useSiteMetadata();
  // const pageTitle = props.pageContext?.frontmatter?.title;

  return (
    <>
      <html lang="en" />
      <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>

    </>
  )
}
