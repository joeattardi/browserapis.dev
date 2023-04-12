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
import { recipeDemo } from './demo.module.css';
import CompatibilityNote from '../components/CompatibilityNote';

export default function Demo({ children, uri, pageContext }) {
  const { code, isCodeLoaded } = useCodeImport(pageContext.frontmatter.slug);

  return (
    <SidebarLayout>
      <h1 className="text-4xl">{pageContext.frontmatter.title}</h1>

      {pageContext.frontmatter.compatibilityWarning && (
        <CompatibilityNote {...pageContext.frontmatter.compatibilityWarning} />
      )}

      <section className="prose max-w-none">{children}</section>

      <section className="my-5">
        <h2 className="text-2xl my-2">
          <a className="space-x-1 flex items-center" title="Open demo in full screen" href="./full" target="_blank"><span>Demo</span> <MdOpenInNew size={18} /></a>
        </h2>
        <div className={clsx('bg-white p-4 rounded-md shadow-lg my-2', recipeDemo)}>
          {isCodeLoaded ?
            <InlineDemo {...code } /> :
            <Skeleton width="100%" height="5em" />
          }
        </div>
      </section>

      <section className="my-5">
        <h2 className="text-2xl my-2">Code</h2>
        <div className="flex flex-col space-y-8">
        <CodeBlock isLoading={!isCodeLoaded} code={code.js} language="javascript" />
        <CodeBlock isLoading={!isCodeLoaded} code={code.html} language="html" />
        <CodeBlock isLoading={!isCodeLoaded} code={code.css} language="css" />
        </div>
      </section>
    </SidebarLayout>
  )
}

export { default as Head } from '../components/Head';