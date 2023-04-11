import React from 'react';
import clsx from 'clsx';
import Layout from './Layout';

import { content, contentOnly } from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
}

export default function ContentOnlyLayout({ children }: LayoutProps) {
  return (
    <Layout className={contentOnly}>
      <article className={clsx(content)}>
        <div>{children}</div>
      </article>
    </Layout>
  )
}
