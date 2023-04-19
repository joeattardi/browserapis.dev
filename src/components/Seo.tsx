import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function SEO(props) {
  console.log({ props });
  const { pageTitle: localPageTitle, pageContext, description, location } = props;
  const { title: siteTitle, description: defaultDescription, siteUrl, image, twitterUsername } = useSiteMetadata();
  const pageTitle = pageContext?.frontmatter?.title || localPageTitle;
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const pageDescription = description || defaultDescription;

  return (
    <>
      <html lang="en" />
      <meta name="description" content={pageDescription} />
      <meta name="twitter:card" content={image} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={`${siteUrl}${location.pathname}`} />
      <title>{title}</title>
    </>
  );
}
