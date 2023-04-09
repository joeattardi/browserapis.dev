import React from 'react';
import clsx from 'clsx';
import { MdOpenInNew, MdWarningAmber } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { ThemeContext } from '../components/layouts/Layout';
import SidebarLayout from '../components/layouts/SidebarLayout';
import InlineDemo from '../components/layouts/InlineDemo';
import CodeBlock from '../components/CodeBlock';
import useCodeImport from '../hooks/useCodeImport';
import { description, demo } from './demo.module.scss';
import CompatibilityNote from '../components/CompatibilityNote';

export default function Demo({ children, uri, pageContext }) {
  const { code, isCodeLoaded } = useCodeImport(pageContext.frontmatter.slug);

  return (
    <SidebarLayout>
      <h1 className="title is-1 is-family-secondary">{pageContext.frontmatter.title}</h1>

      {pageContext.frontmatter.compatibilityWarning && (
        <CompatibilityNote {...pageContext.frontmatter.compatibilityWarning} />
      )}

      <section className={clsx(description, 'block')}>{children}</section>

      <section className="block">
        <h2 className="subtitle is-3">
          <a title="Open demo in full screen" href="./full" target="_blank"><span>Demo</span> <MdOpenInNew size={18} /></a>
        </h2>
        <div className={clsx('box', demo)}>
          {isCodeLoaded ?
            <InlineDemo {...code } /> :
            <Skeleton width="100%" height="5em" />
          }
        </div>
      </section>

      <section className="block">
        <h2 className="subtitle is-3">Code</h2>
        <CodeBlock isLoading={!isCodeLoaded} code={code.js} language="javascript" />
        <CodeBlock isLoading={!isCodeLoaded} code={code.html} language="html" />
        <CodeBlock isLoading={!isCodeLoaded} code={code.css} language="css" />
      </section>
    </SidebarLayout>
  )
}

export { default as Head } from '../components/Head';