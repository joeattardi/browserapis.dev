import React from 'react';
import clsx from 'clsx';
import InlineDemo from '../components/layouts/InlineDemo';
import { demo } from '../styles/index.css';
import { lightTheme, darkTheme } from '../theme';
import useCodeImport from '../hooks/useCodeImport';

export default function FullScreenDemo(props) {
  const basePath = props.pageContext.frontmatter.slug;
  const { code, isCodeLoaded } = useCodeImport(basePath);
  return (
    <main className={clsx(demo, lightTheme)}>
      <h1>{props.pageContext.frontmatter.title}</h1>
      {props.children}
      {isCodeLoaded && <InlineDemo {...code} />}
    </main>
  );
}

export { default as Head } from '../components/Head';
