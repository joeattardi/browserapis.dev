import React from 'react';
import clsx from 'clsx';
import Layout from './Layout';

import { content, contentOnly } from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
}

export default function ContentOnlyLayout({ children }: LayoutProps) {
  return (
    <Layout className={contentOnly}>
      <article className={clsx(content, 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200')}>
        <div>{children}</div>
      </article>
    </Layout>
  )
}
