import React from 'react';
import clsx from 'clsx';
import { MdOpenInNew } from 'react-icons/md';

import SidebarLayout from '../components/layouts/SidebarLayout';
import InlineDemo from '../components/layouts/InlineDemo';
import CodeBlock from '../components/CodeBlock';
import useCodeImport from '../hooks/useCodeImport';

import { description } from './demo.module.scss';
import { demoHeader, fullscreenLink } from '../styles/globalStyles.css';

export default function Demo({ children, uri, pageContext }) {
  const { code, isCodeLoaded } = useCodeImport(pageContext.frontmatter.slug);

  return (
    <SidebarLayout>
      <h1 className="title is-1">{pageContext.frontmatter.title}</h1>

      <section className={description}>{children}</section>

      <section>
        <h2 className="subtitle is-3">
          <a title="Open demo in full screen" href="./full" target="_blank" className={fullscreenLink}><span>Demo</span> <MdOpenInNew size={18} /></a>
        </h2>
        <div className="demo">
          {isCodeLoaded && <InlineDemo {...code} />}
        </div>
      </section>

      <section>
        <h2 className="subtitle is-3">Code</h2>
        <CodeBlock code={code.js} language="javascript" />
        <CodeBlock code={code.html} language="html" />
        <CodeBlock code={code.css} language="css" />
      </section>
    </SidebarLayout>
  )
}

export { default as Head } from '../components/Head';