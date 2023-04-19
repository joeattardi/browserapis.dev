import React from 'react';
import clsx from 'clsx';
import Layout from './Layout';

import { content, contentOnly } from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
}

export default function ContentOnlyLayout({ children, pageTitle, showTitle = true }: LayoutProps) {
  return (
    <Layout pageTitle={pageTitle} showTitle={showTitle} className={contentOnly}>
      {children}
    </Layout>
  )
}
