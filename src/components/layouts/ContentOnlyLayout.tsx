import React from 'react';
import clsx from 'clsx';
import Layout from './Layout';

import { content, contentOnly } from './Layout.module.scss';
// import { content, contentOnly } from './Layout.css';

type LayoutProps = {
  children: React.ReactNode;
}

export default function ContentOnlyLayout({ children }: LayoutProps) {
  return (
    <Layout className={contentOnly}>
      <article className={`${content}`}>{children}</article>
    </Layout>
  )
}
