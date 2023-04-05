import React from 'react';
import clsx from 'clsx';
import InlineDemo from '../components/layouts/InlineDemo';
import { lightTheme, darkTheme } from '../theme';
import useCodeImport from '../hooks/useCodeImport';
import useSiteMetadata from '../hooks/useSiteMetadata';

import { demo } from '../styles/index.css';

export default function FullScreenDemo(props) {
  const { title } = useSiteMetadata();
  const basePath = props.pageContext.frontmatter.slug;
  const { code, isCodeLoaded } = useCodeImport(basePath);
  return (
    <main className={clsx(demo, lightTheme)}>
      <strong>{title}</strong>
      <h1>{props.pageContext.frontmatter.title}</h1>
      {props.children}
      {isCodeLoaded && <InlineDemo {...code} />}
    </main>
  );
}

export { default as Head } from '../components/Head';
