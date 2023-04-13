import React from 'react';
import clsx from 'clsx';
import { ThemeContext } from '../components/layouts/Layout';
import InlineDemo from '../components/layouts/InlineDemo';
import useCodeImport from '../hooks/useCodeImport';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function FullScreenDemo(props) {
  const { title } = useSiteMetadata();
  const basePath = props.pageContext.frontmatter.slug;
  const { code, isCodeLoaded } = useCodeImport(basePath);
  return (
    <ThemeContext.Provider value={{ theme: 'light' }}>
      <main className="p-4">
        <strong>{title}</strong>
        <h1 className="text-4xl">{props.pageContext.frontmatter.title}</h1>
        <div className="prose prose-lg mb-4">{props.children}</div>
        <div className="recipeDemo">
          {isCodeLoaded && <InlineDemo {...code} />}
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export { default as Head } from '../components/Head';
