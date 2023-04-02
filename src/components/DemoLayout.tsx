import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import InlineDemo, { DemoProps } from './InlineDemo';
import useCodeImport from '../hooks/useCodeImport';
import CodeBlock from './CodeBlock';
import SidebarLayout from './SidebarLayout';

type LayoutProps = {
  children: React.ReactNode;
}

const DemoLayout = (props) => {
  const { pageContext, children } = props;

  const { code, isCodeLoaded } = useCodeImport(props.uri);

  return (
    <SidebarLayout>
      <h1>{pageContext.frontmatter.title}</h1>

      <div>
        {children}
      </div>

      <section>
        <h2>Demo</h2>
        <div className="demo">
          {isCodeLoaded && <InlineDemo {...code} />}
        </div>
      </section>

      <section>
        <h2>Code</h2>
        <CodeBlock code={code.js} language="javascript" />
        <CodeBlock code={code.html} language="html" />
        <CodeBlock code={code.css} language="css" />
      </section>

    </SidebarLayout>
  )
};

export default DemoLayout;