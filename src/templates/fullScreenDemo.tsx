import React from 'react';
import clsx from 'clsx';
import InlineDemo from '../components/layouts/InlineDemo';
import useCodeImport from '../hooks/useCodeImport';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function FullScreenDemo(props) {
  const { title } = useSiteMetadata();
  const basePath = props.pageContext.frontmatter.slug;
  const { code, isCodeLoaded } = useCodeImport(basePath);
  return (
    <main>
      <strong>{title}</strong>
      <h1>{props.pageContext.frontmatter.title}</h1>
      {props.children}
      {isCodeLoaded && <InlineDemo {...code} />}
    </main>
  );
}

export { default as Head } from '../components/Head';
