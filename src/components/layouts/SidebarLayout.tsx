import React from 'react';
import clsx from 'clsx';
import Layout from './Layout';
import Sidebar from '../Sidebar';

import { content } from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

export default function SidebarLayout({ children }: LayoutProps) {
  return (
    <Layout>
      <Sidebar />
      <article className={content}>
        <div className="p-4 bg-stone-100 dark:bg-stone-900">{children}</div>
      </article>
    </Layout>
  );
}
