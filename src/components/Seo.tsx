import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function SEO(props) {
  const { pageTitle: localPageTitle, pageContext } = props;
  const { title: siteTitle } = useSiteMetadata();
  const pageTitle = pageContext?.frontmatter?.title || localPageTitle;

  return (
    <>
      <html lang="en" />
      <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>
    </>
  );
}
