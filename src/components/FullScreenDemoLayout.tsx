import React from 'react';
import InlineDemo from './InlineDemo';
import useCodeImport from '../hooks/useCodeImport';
import { demo } from './FullScreenDemoLayout.css';

type LayoutProps = {
  children: React.ReactNode;
}

const FullScreenDemoLayout = (props) => {
  const { pageContext, children } = props;
  const basePath = props.path.split('/').slice(0, -2).join('/');
  const { code, isCodeLoaded } = useCodeImport(basePath);

  return (
    <main className={demo}>
      <h1>{pageContext.frontmatter.title}</h1>
      <div>
        {props.children}
      </div>
      {isCodeLoaded && <InlineDemo {...code} />}
    </main>
  )
};

export default FullScreenDemoLayout;