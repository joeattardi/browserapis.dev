import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function SEO(props) {
  const { pageTitle: localPageTitle, pageContext, description, location } = props;
  const { title: siteTitle, description: defaultDescription, siteUrl, image, twitterUsername } = useSiteMetadata();
  const pageTitle = pageContext?.frontmatter?.title || localPageTitle;
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const pageDescription = description || defaultDescription;

  return (
    <>
      <html lang="en" />
      <meta name="description" content={pageDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={`${siteUrl}${location.pathname}`} />
      <meta name="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:title" content={title} />
      <title>{title}</title>
      <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=6447a5facbd2bb001b85f787&product=custom-share-buttons&source=platform" async></script>
    </>
  );
}
